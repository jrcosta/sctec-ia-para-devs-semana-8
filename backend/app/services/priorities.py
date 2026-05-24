from app.schemas import Appointment


def build_priority_plan(appointments: list[Appointment]) -> list[Appointment]:
    """Return appointments ordered by future prioritization rules."""
    return appointments
