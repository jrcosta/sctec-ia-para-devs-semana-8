const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function getHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Nao foi possivel consultar a API.");
  }

  return response.json();
}
