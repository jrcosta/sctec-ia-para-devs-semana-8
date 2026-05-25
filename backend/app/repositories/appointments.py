from app.schemas import Appointment


class InMemoryAppointmentRepository:
    def __init__(self) -> None:
        self._appointments: list[Appointment] = []

    def list(self) -> list[Appointment]:
        return list(self._appointments)

    def add(self, appointment: Appointment) -> Appointment:
        self._appointments.append(appointment)
        return appointment

    def get_by_id(self, appointment_id: str) -> Appointment | None:
        for appointment in self._appointments:
            if appointment.id == appointment_id:
                return appointment
        return None

    def clear(self) -> None:
        self._appointments.clear()
