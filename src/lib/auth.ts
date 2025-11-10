import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { User } from "next-auth";
import bcrypt from "bcrypt";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    ...(process.env.NODE_ENV === "development"
      ? [
          CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email" },
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
              if (!credentials?.email || !credentials?.password) return null;

              const user = await prisma.user.findUnique({
                where: { email: credentials.email },
                select: {
                  id: true,
                  email: true,
                  password: true,
                  name: true,
                },
              });

              if (!user || !user.password) return null;

              const isValid = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (!isValid) return null;

              return {
                id: String(user.id), // string
                email: user.email!,
                name: user.name,
              } as User;
            },
          }),
        ]
      : []),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "database", // зберігаємо сесії в таблиці Session
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
