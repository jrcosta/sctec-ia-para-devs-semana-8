import { NextResponse } from "next/server";
import { buildPriorityPlan } from "@/lib/agendaedu/service";
import { readAppointmentFilters } from "@/lib/http/search-params";

export function GET(request) {
  const filters = readAppointmentFilters(new URL(request.url).searchParams);

  return NextResponse.json({
    prioridades: buildPriorityPlan(filters),
  });
}
