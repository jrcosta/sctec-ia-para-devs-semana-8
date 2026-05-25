from datetime import date

from app.models import AppointmentStatus, AppointmentType, Priority
from app.schemas import Appointment


def filter_appointments(
    appointments: list[Appointment],
    *,
    disciplina: str | None = None,
    tipo: AppointmentType | None = None,
    prioridade: Priority | None = None,
    status: AppointmentStatus | None = None,
    date_from: date | None = None,
    date_to: date | None = None,
) -> list[Appointment]:
    filtered = appointments

    if disciplina is not None:
        filtered = [
            item for item in filtered if item.disciplina.casefold() == disciplina.casefold()
        ]

    if tipo is not None:
        filtered = [item for item in filtered if item.tipo == tipo]

    if prioridade is not None:
        filtered = [item for item in filtered if item.prioridade == prioridade]

    if status is not None:
        filtered = [item for item in filtered if item.status == status]

    if date_from is not None:
        filtered = [item for item in filtered if item.data >= date_from]

    if date_to is not None:
        filtered = [item for item in filtered if item.data <= date_to]

    return filtered
