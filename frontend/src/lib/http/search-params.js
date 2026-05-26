export function readAppointmentFilters(searchParams) {
  return {
    disciplina: searchParams.get("disciplina") || "",
    tipo: searchParams.get("tipo") || "",
    prioridade: searchParams.get("prioridade") || "",
    status: searchParams.get("status") || "",
    date_from: searchParams.get("date_from") || "",
    date_to: searchParams.get("date_to") || "",
  };
}
