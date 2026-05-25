from datetime import date

from pydantic import BaseModel, ConfigDict, Field, field_validator

from app.models import AppointmentStatus, AppointmentType, Priority


class AppointmentCreate(BaseModel):
    titulo: str = Field(min_length=3)
    descricao: str = Field(default="")
    disciplina: str = Field(min_length=2)
    tipo: AppointmentType
    data: date
    prioridade: Priority
    status: AppointmentStatus

    @field_validator("titulo")
    @classmethod
    def validate_titulo(cls, value: str) -> str:
        value = value.strip()
        if len(value) < 3:
            raise ValueError("titulo deve ter pelo menos 3 caracteres")
        return value

    @field_validator("descricao")
    @classmethod
    def validate_descricao(cls, value: str) -> str:
        return value.strip()

    @field_validator("disciplina")
    @classmethod
    def validate_disciplina(cls, value: str) -> str:
        value = value.strip()
        if len(value) < 2:
            raise ValueError("disciplina deve ter pelo menos 2 caracteres")
        return value


class Appointment(AppointmentCreate):
    id: str

    model_config = ConfigDict(from_attributes=True)


class AppointmentListResponse(BaseModel):
    items: list[Appointment]
    total: int


class PriorityPlanItem(Appointment):
    pontuacao: int
    motivo: str


class PriorityPlanResponse(BaseModel):
    prioridades: list[PriorityPlanItem]
