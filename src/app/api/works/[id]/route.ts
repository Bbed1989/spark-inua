import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { workUpdateSchema } from "../../../../lib/validations/work";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const work = await prisma.work.findUnique({
    where: { id: params.id }, // рядок, не число
    include: { author: true },
  });

  if (!work) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(work);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const parsed = workUpdateSchema.parse(body);

    const work = await prisma.work.update({
      where: { id: params.id }, // рядок
      data: parsed,
    });

    return NextResponse.json(work);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid request" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.work.delete({ where: { id: params.id } }); // рядок
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
