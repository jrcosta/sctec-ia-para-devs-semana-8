const APPOINTMENT_TYPES = new Set(["prova", "trabalho", "tarefa", "leitura", "apresentacao"]);
const PRIORITIES = new Set(["baixa", "media", "alta"]);
const STATUSES = new Set(["pendente", "em andamento", "concluido"]);

const PRIORITY_WEIGHTS = {
  baixa: 10,
  media: 30,
  alta: 60,
};

const TYPE_WEIGHTS = {
  prova: 25,
  trabalho: 20,
  tarefa: 15,
  apresentacao: 18,
  leitura: 8,
};

const STATUS_WEIGHTS = {
  pendente: 20,
  "em andamento": 10,
  concluido: -40,
};

function getStore() {
  if (!globalThis.__agendaEduAppointments) {
    globalThis.__agendaEduAppointments = [];
  }

  return globalThis.__agendaEduAppointments;
}

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

function validateAppointment(payload) {
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

function matchesFilter(appointment, filters) {
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

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function buildReason(appointment, score, referenceDate) {
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

function scoreAppointment(appointment, referenceDate = todayIsoDate()) {
  return (
    PRIORITY_WEIGHTS[appointment.prioridade] +
    TYPE_WEIGHTS[appointment.tipo] +
    STATUS_WEIGHTS[appointment.status] +
    deadlineWeight(appointment.data, referenceDate)
  );
}

export function createAppointment(payload) {
  const validation = validateAppointment(payload);

  if (validation.error) {
    return { error: validation.error };
  }

  const appointment = {
    id: crypto.randomUUID(),
    ...validation.data,
  };

  getStore().push(appointment);
  return { data: appointment };
}

export function listAppointments(filters = {}) {
  return getStore().filter((appointment) => matchesFilter(appointment, filters));
}

export function getAppointmentById(id) {
  return getStore().find((appointment) => appointment.id === id) ?? null;
}

export function buildPriorityPlan(filters = {}) {
  const referenceDate = todayIsoDate();

  return listAppointments(filters)
    .map((appointment) => {
      const pontuacao = scoreAppointment(appointment, referenceDate);

      return {
        ...appointment,
        pontuacao,
        motivo: buildReason(appointment, pontuacao, referenceDate),
      };
    })
    .sort((left, right) => {
      if (right.pontuacao !== left.pontuacao) return right.pontuacao - left.pontuacao;
      if (left.data !== right.data) return left.data.localeCompare(right.data);
      return left.titulo.localeCompare(right.titulo);
    });
}

export function readFilters(searchParams) {
  return {
    disciplina: searchParams.get("disciplina") || "",
    tipo: searchParams.get("tipo") || "",
    prioridade: searchParams.get("prioridade") || "",
    status: searchParams.get("status") || "",
    date_from: searchParams.get("date_from") || "",
    date_to: searchParams.get("date_to") || "",
  };
}
