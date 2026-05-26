import { PRIORITY_WEIGHTS, STATUS_WEIGHTS, TYPE_WEIGHTS } from "./schema";

function deadlineWeight(appointmentDate, referenceDate) {
  const deadline = new Date(`${appointmentDate}T00:00:00`);
  const reference = new Date(`${referenceDate}T00:00:00`);
  const deltaDays = Math.round((deadline - reference) / 86_400_000);

  if (deltaDays < 0) return 35;
  if (deltaDays === 0) return 40;
  if (deltaDays <= 2) return 35;
  if (deltaDays <= 7) return 25;
  if (deltaDays <= 14) return 15;
  return 5;
}

export function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

export function scoreAppointment(appointment, referenceDate = todayIsoDate()) {
  return (
    PRIORITY_WEIGHTS[appointment.prioridade] +
    TYPE_WEIGHTS[appointment.tipo] +
    STATUS_WEIGHTS[appointment.status] +
    deadlineWeight(appointment.data, referenceDate)
  );
}

export function buildPriorityReason(appointment, score, referenceDate) {
  const deadline = new Date(`${appointment.data}T00:00:00`);
  const reference = new Date(`${referenceDate}T00:00:00`);
  const deltaDays = Math.round((deadline - reference) / 86_400_000);
  const parts = [];

  parts.push(appointment.status === "concluido" ? "status concluido reduz a prioridade" : `status ${appointment.status}`);
  parts.push(`prioridade ${appointment.prioridade}`);
  parts.push(`tipo ${appointment.tipo}`);

  if (deltaDays < 0) {
    parts.push("prazo vencido");
  } else if (deltaDays === 0) {
    parts.push("prazo hoje");
  } else if (deltaDays === 1) {
    parts.push("prazo em 1 dia");
  } else {
    parts.push(`prazo em ${deltaDays} dias`);
  }

  return `Pontuacao ${score}: ${parts.join(", ")}.`;
}
