from datetime import date, timedelta

from fastapi.testclient import TestClient

from app.main import app


def client() -> TestClient:
    app.state.repository.clear()
    return TestClient(app)


def test_create_and_get_appointment() -> None:
    test_client = client()
    payload = {
        "titulo": "Prova de matematica",
        "descricao": "Capitulos 1 a 4",
        "disciplina": "Matematica",
        "tipo": "prova",
        "data": "2026-05-28",
        "prioridade": "alta",
        "status": "pendente",
    }

    response = test_client.post("/appointments", json=payload)

    assert response.status_code == 201
    data = response.json()
    assert data["titulo"] == payload["titulo"]
    assert data["disciplina"] == payload["disciplina"]
    assert data["tipo"] == payload["tipo"]
    assert data["prioridade"] == payload["prioridade"]
    assert data["status"] == payload["status"]
    assert data["descricao"] == payload["descricao"]
    assert data["id"]

    appointment_id = data["id"]
    get_response = test_client.get(f"/appointments/{appointment_id}")

    assert get_response.status_code == 200
    assert get_response.json()["id"] == appointment_id


def test_list_appointments_with_filters() -> None:
    test_client = client()
    test_client.post(
        "/appointments",
        json={
            "titulo": "Prova de matematica",
            "descricao": "Capitulos 1 a 4",
            "disciplina": "Matematica",
            "tipo": "prova",
            "data": "2026-05-28",
            "prioridade": "alta",
            "status": "pendente",
        },
    )
    test_client.post(
        "/appointments",
        json={
            "titulo": "Leitura de historia",
            "descricao": "Capitulo 2",
            "disciplina": "Historia",
            "tipo": "leitura",
            "data": "2026-06-10",
            "prioridade": "baixa",
            "status": "em andamento",
        },
    )

    response = test_client.get("/appointments?disciplina=Matematica&tipo=prova")

    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 1
    assert len(data["items"]) == 1
    assert data["items"][0]["disciplina"] == "Matematica"


def test_priority_plan_orders_more_urgent_first() -> None:
    test_client = client()
    today = date.today()
    soon = today + timedelta(days=1)
    later = today + timedelta(days=15)

    test_client.post(
        "/appointments",
        json={
            "titulo": "Prova urgente",
            "descricao": "Conteudo principal",
            "disciplina": "Matematica",
            "tipo": "prova",
            "data": soon.isoformat(),
            "prioridade": "alta",
            "status": "pendente",
        },
    )
    test_client.post(
        "/appointments",
        json={
            "titulo": "Leitura simples",
            "descricao": "Capitulo 2",
            "disciplina": "Historia",
            "tipo": "leitura",
            "data": later.isoformat(),
            "prioridade": "baixa",
            "status": "pendente",
        },
    )

    response = test_client.get("/appointments/priority-plan")

    assert response.status_code == 200
    data = response.json()
    assert len(data["prioridades"]) == 2
    assert data["prioridades"][0]["titulo"] == "Prova urgente"
    assert data["prioridades"][0]["pontuacao"] > data["prioridades"][1]["pontuacao"]


def test_invalid_appointment_returns_clear_validation_error() -> None:
    test_client = client()

    response = test_client.post(
        "/appointments",
        json={
            "titulo": "A",
            "descricao": "x",
            "disciplina": "M",
            "tipo": "prova",
            "data": "2026-05-28",
            "prioridade": "alta",
            "status": "pendente",
        },
    )

    assert response.status_code == 422
    detail = response.json()["detail"]
    assert detail
