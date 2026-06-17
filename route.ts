import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { clients } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const runtime = "edge";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = getDb();
  const rows = await db.select().from(clients).where(eq(clients.id, id));
  const row = rows[0];

  if (!row) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  return NextResponse.json({
    client: {
      ...row,
      notes: JSON.parse(row.notes || "{}"),
      doneSections: JSON.parse(row.doneSections || "{}"),
      settings: JSON.parse(row.settings || "{}"),
    },
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const db = getDb();

  const updates: Record<string, unknown> = { updatedAt: Date.now() };

  if (typeof body.clientName === "string") updates.clientName = body.clientName;
  if (typeof body.brandType === "string") updates.brandType = body.brandType;
  if (typeof body.audience === "string") updates.audience = body.audience;
  if (body.notes !== undefined) updates.notes = JSON.stringify(body.notes);
  if (body.doneSections !== undefined)
    updates.doneSections = JSON.stringify(body.doneSections);
  if (body.settings !== undefined) updates.settings = JSON.stringify(body.settings);

  await db.update(clients).set(updates).where(eq(clients.id, id));

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = getDb();
  await db.delete(clients).where(eq(clients.id, id));
  return NextResponse.json({ ok: true });
}
