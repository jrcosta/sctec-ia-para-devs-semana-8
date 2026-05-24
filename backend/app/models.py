from enum import StrEnum


class AppointmentType(StrEnum):
    PROVA = "prova"
    TRABALHO = "trabalho"
    TAREFA = "tarefa"
    LEITURA = "leitura"
    APRESENTACAO = "apresentacao"


class Priority(StrEnum):
    BAIXA = "baixa"
    MEDIA = "media"
    ALTA = "alta"


class AppointmentStatus(StrEnum):
    PENDENTE = "pendente"
    EM_ANDAMENTO = "em andamento"
    CONCLUIDO = "concluido"
