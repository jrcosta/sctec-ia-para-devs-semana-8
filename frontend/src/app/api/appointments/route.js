import { NextResponse } from "next/server";
import { createAppointment, listAppointments, readFilters } from "@/lib/agendaedu/appointments";

export function GET(request) {
  const filters = readFilters(new URL(request.url).searchParams);
  const items = listAppointments(filters);

  return NextResponse.json({
    items,
    total: items.length,
  });
}

export async function POST(request) {
  const payload = await request.json().catch(() => null);
  const result = createAppointment(payload);

  if (result.error) {
    return NextResponse.json({ detail: result.error }, { status: 422 });
  }

  return NextResponse.json(result.data, { status: 201 });
}
