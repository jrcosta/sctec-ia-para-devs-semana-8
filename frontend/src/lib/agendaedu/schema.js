export const APPOINTMENT_TYPES = new Set(["prova", "trabalho", "tarefa", "leitura", "apresentacao"]);
export const PRIORITIES = new Set(["baixa", "media", "alta"]);
export const STATUSES = new Set(["pendente", "em andamento", "concluido"]);

export const PRIORITY_WEIGHTS = {
  baixa: 10,
  media: 30,
  alta: 60,
};

export const TYPE_WEIGHTS = {
  prova: 25,
  trabalho: 20,
  tarefa: 15,
  apresentacao: 18,
  leitura: 8,
};

export const STATUS_WEIGHTS = {
  pendente: 20,
  "em andamento": 10,
  concluido: -40,
};
