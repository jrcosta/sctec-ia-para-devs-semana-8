from datetime import date
from uuid import uuid4

from fastapi import FastAPI, HTTPException, Query, status

from app.models import AppointmentStatus, AppointmentType, Priority
from app.repositories.appointments import InMemoryAppointmentRepository
from app.schemas import (
    Appointment,
    AppointmentCreate,
    AppointmentListResponse,
    PriorityPlanResponse,
)
from app.services.appointments import filter_appointments
from app.services.priorities import build_priority_plan

repository = InMemoryAppointmentRepository()

app = FastAPI(
    title="AgendaEdu API",
    description="API para cadastro, consulta e priorizacao de compromissos escolares.",
    version="0.1.0",
)


app.state.repository = repository


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "AgendaEdu API"}


@app.post("/appointments", response_model=Appointment, status_code=status.HTTP_201_CREATED)
def create_appointment(payload: AppointmentCreate) -> Appointment:
    appointment = Appointment(id=str(uuid4()), **payload.model_dump())
    app.state.repository.add(appointment)
    return appointment


@app.get("/appointments", response_model=AppointmentListResponse)
def list_appointments(
    disciplina: str | None = None,
    tipo: AppointmentType | None = None,
    prioridade: Priority | None = None,
    status_filter: AppointmentStatus | None = Query(default=None, alias="status"),
    date_from: date | None = None,
    date_to: date | None = None,
) -> AppointmentListResponse:
    items = filter_appointments(
        app.state.repository.list(),
        disciplina=disciplina,
        tipo=tipo,
        prioridade=prioridade,
        status=status_filter,
        date_from=date_from,
        date_to=date_to,
    )
    return AppointmentListResponse(items=items, total=len(items))


@app.get("/appointments/priority-plan", response_model=PriorityPlanResponse)
def get_priority_plan(
    disciplina: str | None = None,
    tipo: AppointmentType | None = None,
    prioridade: Priority | None = None,
    status_filter: AppointmentStatus | None = Query(default=None, alias="status"),
    date_from: date | None = None,
    date_to: date | None = None,
) -> PriorityPlanResponse:
    items = filter_appointments(
        app.state.repository.list(),
        disciplina=disciplina,
        tipo=tipo,
        prioridade=prioridade,
        status=status_filter,
        date_from=date_from,
        date_to=date_to,
    )
    return PriorityPlanResponse(prioridades=build_priority_plan(items))


@app.get("/appointments/{appointment_id}", response_model=Appointment)
def get_appointment(appointment_id: str) -> Appointment:
    appointment = app.state.repository.get_by_id(appointment_id)
    if appointment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Compromisso nao encontrado.",
        )
    return appointment
