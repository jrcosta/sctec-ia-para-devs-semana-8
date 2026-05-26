async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Erro na requisicao a API.");
  }

  return response.json();
}

function buildUrl(path, filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const query = params.toString();
  return `${path}${query ? `?${query}` : ""}`;
}

export async function getHealth() {
  const response = await fetch("/api/health");
  return handleResponse(response);
}

export async function getAppointments(filters = {}) {
  const response = await fetch(buildUrl("/api/appointments", filters));
  return handleResponse(response);
}

export async function createAppointment(appointment) {
  const response = await fetch("/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  });

  return handleResponse(response);
}

export async function getPriorityPlan(filters = {}) {
  const response = await fetch(buildUrl("/api/appointments/priority-plan", filters));
  return handleResponse(response);
}
