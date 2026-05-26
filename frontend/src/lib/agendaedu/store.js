export function getAppointmentStore() {
  if (!globalThis.__agendaEduAppointments) {
    globalThis.__agendaEduAppointments = [];
  }

  return globalThis.__agendaEduAppointments;
}
