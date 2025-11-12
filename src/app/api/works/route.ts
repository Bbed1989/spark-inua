import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { workSchema } from "../../../lib/validations/work";

export async function GET() {
  const works = await prisma.work.findMany({
    include: { author: true },
  });
  return NextResponse.json(works);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = workSchema.parse(body);

    const work = await prisma.work.create({
      data: {
        title: parsed.title,
        description: parsed.description,
        author: {
          connect: { id: parsed.authorId },
        },
      },
    });

    return NextResponse.json(work, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
