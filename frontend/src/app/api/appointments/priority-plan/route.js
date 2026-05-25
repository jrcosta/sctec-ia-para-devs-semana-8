import { NextResponse } from "next/server";
import { buildPriorityPlan, readFilters } from "@/lib/agendaedu/appointments";

export function GET(request) {
  const filters = readFilters(new URL(request.url).searchParams);

  return NextResponse.json({
    prioridades: buildPriorityPlan(filters),
  });
}
