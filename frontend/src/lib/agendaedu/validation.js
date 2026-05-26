import { APPOINTMENT_TYPES, PRIORITIES, STATUSES } from "./schema";

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function parseDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const parsed = new Date(`${value}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : value;
}

export function validateAppointment(payload) {
  const titulo = normalizeText(payload?.titulo);
  const descricao = normalizeText(payload?.descricao);
  const disciplina = normalizeText(payload?.disciplina);
  const tipo = payload?.tipo;
  const data = parseDate(payload?.data);
  const prioridade = payload?.prioridade;
  const status = payload?.status;

  if (titulo.length < 3) {
    return { error: "titulo deve ter pelo menos 3 caracteres" };
  }

  if (disciplina.length < 2) {
    return { error: "disciplina deve ter pelo menos 2 caracteres" };
  }

  if (!APPOINTMENT_TYPES.has(tipo)) {
    return { error: "tipo invalido" };
  }

  if (!data) {
    return { error: "data deve usar o formato YYYY-MM-DD" };
  }

  if (!PRIORITIES.has(prioridade)) {
    return { error: "prioridade invalida" };
  }

  if (!STATUSES.has(status)) {
    return { error: "status invalido" };
  }

  return {
    data: {
      titulo,
      descricao,
      disciplina,
      tipo,
      data,
      prioridade,
      status,
    },
  };
}
