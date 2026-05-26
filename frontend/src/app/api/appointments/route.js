import { NextResponse } from "next/server";
import { createAppointment, listAppointments } from "@/lib/agendaedu/service";
import { readAppointmentFilters } from "@/lib/http/search-params";

export function GET(request) {
  const filters = readAppointmentFilters(new URL(request.url).searchParams);
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
