import { matchesAppointmentFilters } from "./filters";
import { buildPriorityReason, scoreAppointment, todayIsoDate } from "./priorities";
import { getAppointmentStore } from "./store";
import { validateAppointment } from "./validation";

export function createAppointment(payload) {
  const validation = validateAppointment(payload);

  if (validation.error) {
    return { error: validation.error };
  }

  const appointment = {
    id: crypto.randomUUID(),
    ...validation.data,
  };

  getAppointmentStore().push(appointment);
  return { data: appointment };
}

export function listAppointments(filters = {}) {
  return getAppointmentStore().filter((appointment) => matchesAppointmentFilters(appointment, filters));
}

export function getAppointmentById(id) {
  return getAppointmentStore().find((appointment) => appointment.id === id) ?? null;
}

export function buildPriorityPlan(filters = {}) {
  const referenceDate = todayIsoDate();

  return listAppointments(filters)
    .map((appointment) => {
      const pontuacao = scoreAppointment(appointment, referenceDate);

      return {
        ...appointment,
        pontuacao,
        motivo: buildPriorityReason(appointment, pontuacao, referenceDate),
      };
    })
    .sort((left, right) => {
      if (right.pontuacao !== left.pontuacao) return right.pontuacao - left.pontuacao;
      if (left.data !== right.data) return left.data.localeCompare(right.data);
      return left.titulo.localeCompare(right.titulo);
    });
}
