import { NextResponse } from "next/server";
import { getAppointmentById } from "@/lib/agendaedu/service";

export async function GET(_request, { params }) {
  const { id } = await params;
  const appointment = getAppointmentById(id);

  if (!appointment) {
    return NextResponse.json({ detail: "Compromisso nao encontrado." }, { status: 404 });
  }

  return NextResponse.json(appointment);
}
