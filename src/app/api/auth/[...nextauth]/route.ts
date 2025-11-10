import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/auth"; // або правильний шлях до твого auth.ts

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
