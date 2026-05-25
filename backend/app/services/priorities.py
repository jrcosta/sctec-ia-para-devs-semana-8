from datetime import date

from app.models import AppointmentStatus, AppointmentType, Priority
from app.schemas import Appointment, PriorityPlanItem


_PRIORITY_WEIGHTS = {
    Priority.BAIXA: 10,
    Priority.MEDIA: 30,
    Priority.ALTA: 60,
}

_TYPE_WEIGHTS = {
    AppointmentType.PROVA: 25,
    AppointmentType.TRABALHO: 20,
    AppointmentType.TAREFA: 15,
    AppointmentType.APRESENTACAO: 18,
    AppointmentType.LEITURA: 8,
}

_STATUS_WEIGHTS = {
    AppointmentStatus.PENDENTE: 20,
    AppointmentStatus.EM_ANDAMENTO: 10,
    AppointmentStatus.CONCLUIDO: -40,
}


def _deadline_weight(appointment_date: date, reference_date: date) -> int:
    delta_days = (appointment_date - reference_date).days

    if delta_days < 0:
        return 35
    if delta_days == 0:
        return 40
    if delta_days <= 2:
        return 35
    if delta_days <= 7:
        return 25
    if delta_days <= 14:
        return 15
    return 5


def calculate_priority_score(
    appointment: Appointment,
    reference_date: date | None = None,
) -> int:
    today = reference_date or date.today()
    return (
        _PRIORITY_WEIGHTS[appointment.prioridade]
        + _TYPE_WEIGHTS[appointment.tipo]
        + _STATUS_WEIGHTS[appointment.status]
        + _deadline_weight(appointment.data, today)
    )


def _build_reason(appointment: Appointment, score: int, reference_date: date) -> str:
    parts: list[str] = []

    if appointment.status == AppointmentStatus.CONCLUIDO:
        parts.append("status concluido reduz a prioridade")
    else:
        parts.append(f"status {appointment.status}")

    parts.append(f"prioridade {appointment.prioridade}")
    parts.append(f"tipo {appointment.tipo}")

    delta_days = (appointment.data - reference_date).days
    if delta_days < 0:
        parts.append("prazo vencido")
    elif delta_days == 0:
        parts.append("prazo hoje")
    elif delta_days == 1:
        parts.append("prazo em 1 dia")
    else:
        parts.append(f"prazo em {delta_days} dias")

    return f"Pontuacao {score}: " + ", ".join(parts) + "."


def build_priority_plan(
    appointments: list[Appointment],
    reference_date: date | None = None,
) -> list[PriorityPlanItem]:
    today = reference_date or date.today()
    prioritized = []

    for appointment in appointments:
        score = calculate_priority_score(appointment, today)
        prioritized.append(
            PriorityPlanItem(
                **appointment.model_dump(),
                pontuacao=score,
                motivo=_build_reason(appointment, score, today),
            )
        )

    return sorted(prioritized, key=lambda item: (-item.pontuacao, item.data, item.titulo))
