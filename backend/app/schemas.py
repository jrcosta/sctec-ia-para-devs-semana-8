from datetime import date

from pydantic import BaseModel, Field

from app.models import AppointmentStatus, AppointmentType, Priority


class AppointmentCreate(BaseModel):
    titulo: str = Field(min_length=3)
    descricao: str = Field(default="")
    disciplina: str = Field(min_length=2)
    tipo: AppointmentType
    data: date
    prioridade: Priority
    status: AppointmentStatus


class Appointment(AppointmentCreate):
    id: str
