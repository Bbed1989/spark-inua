import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { workUpdateSchema } from "../../../../lib/validations/work";

// окремий інтерфейс для контексту
interface Context {
  params: { id: string };
}

export async function GET(req: Request, { params }: Context) {
  const work = await prisma.work.findUnique({
    where: { id: params.id },
    include: { author: true },
  });

  if (!work) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(work);
}

export async function PUT(req: Request, { params }: Context) {
  try {
    const body = await req.json();
    const parsed = workUpdateSchema.parse(body);

    const work = await prisma.work.update({
      where: { id: params.id },
      data: parsed,
    });

    return NextResponse.json(work);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: Context) {
  try {
    await prisma.work.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
