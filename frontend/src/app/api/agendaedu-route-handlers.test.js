import { beforeEach, describe, expect, it } from "vitest";
import { GET as getHealth } from "./health/route";
import {
  GET as listAppointments,
  POST as createAppointment,
} from "./appointments/route";
import { GET as getPriorityPlan } from "./appointments/priority-plan/route";
import { clearAppointmentStore } from "@/lib/agendaedu/store";

function request(path, init) {
  return new Request(`http://localhost${path}`, init);
}

async function json(response) {
  return response.json();
}

async function postAppointment(payload) {
  const response = await createAppointment(
    request("/api/appointments", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  );

  return {
    response,
    body: await json(response),
  };
}

const mathExam = {
  titulo: "Prova de matematica",
  descricao: "Capitulos 1 a 4",
  disciplina: "Matematica",
  tipo: "prova",
  data: "2026-05-28",
  prioridade: "alta",
  status: "pendente",
};

const historyReading = {
  titulo: "Leitura de historia",
  descricao: "Capitulo 2",
  disciplina: "Historia",
  tipo: "leitura",
  data: "2026-06-10",
  prioridade: "baixa",
  status: "pendente",
};

describe("AgendaEdu route handlers", () => {
  beforeEach(() => {
    clearAppointmentStore();
  });

  it("returns health check metadata", async () => {
    const response = getHealth();
    const body = await json(response);

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "ok",
      service: "AgendaEdu Serverless API",
    });
  });

  it("creates a valid appointment", async () => {
    const { response, body } = await postAppointment(mathExam);

    expect(response.status).toBe(201);
    expect(body).toMatchObject(mathExam);
    expect(body.id).toEqual(expect.any(String));
  });

  it("rejects invalid appointment payloads", async () => {
    const { response, body } = await postAppointment({
      ...mathExam,
      titulo: "A",
    });

    expect(response.status).toBe(422);
    expect(body).toEqual({
      detail: "titulo deve ter pelo menos 3 caracteres",
    });
  });

  it("lists appointments filtered by query params", async () => {
    await postAppointment(mathExam);
    await postAppointment(historyReading);

    const response = listAppointments(
      request("/api/appointments?disciplina=Matematica&prioridade=alta"),
    );
    const body = await json(response);

    expect(response.status).toBe(200);
    expect(body.total).toBe(1);
    expect(body.items).toHaveLength(1);
    expect(body.items[0]).toMatchObject({
      titulo: "Prova de matematica",
      disciplina: "Matematica",
      prioridade: "alta",
    });
  });

  it("builds a priority plan ordered by calculated score", async () => {
    await postAppointment(historyReading);
    await postAppointment(mathExam);

    const response = getPriorityPlan(request("/api/appointments/priority-plan"));
    const body = await json(response);

    expect(response.status).toBe(200);
    expect(body.prioridades).toHaveLength(2);
    expect(body.prioridades[0].titulo).toBe("Prova de matematica");
    expect(body.prioridades[0].pontuacao).toBeGreaterThan(
      body.prioridades[1].pontuacao,
    );
    expect(body.prioridades[0].motivo).toContain("prioridade alta");
  });
});
