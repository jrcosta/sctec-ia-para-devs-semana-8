export function matchesAppointmentFilters(appointment, filters) {
  if (filters.disciplina && appointment.disciplina.toLowerCase() !== filters.disciplina.toLowerCase()) {
    return false;
  }

  if (filters.tipo && appointment.tipo !== filters.tipo) {
    return false;
  }

  if (filters.prioridade && appointment.prioridade !== filters.prioridade) {
    return false;
  }

  if (filters.status && appointment.status !== filters.status) {
    return false;
  }

  if (filters.date_from && appointment.data < filters.date_from) {
    return false;
  }

  if (filters.date_to && appointment.data > filters.date_to) {
    return false;
  }

  return true;
}
