import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { workUpdateSchema } from "../../../../lib/validations/work";

function getIdFromReq(req: Request) {
  const url = new URL(req.url);
  // /api/works/<id> → беремо останній сегмент
  const segments = url.pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "";
}

export async function GET(req: Request) {
  const id = getIdFromReq(req);

  const work = await prisma.work.findUnique({
    where: { id },
    include: { author: true },
  });

  if (!work) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(work);
}

export async function PUT(req: Request) {
  try {
    const id = getIdFromReq(req);
    const body = await req.json();
    const parsed = workUpdateSchema.parse(body);

    const work = await prisma.work.update({
      where: { id },
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

export async function DELETE(req: Request) {
  try {
    const id = getIdFromReq(req);
    await prisma.work.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
