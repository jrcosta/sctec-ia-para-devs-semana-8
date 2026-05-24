from fastapi import FastAPI

app = FastAPI(
    title="AgendaEdu API",
    description="API para cadastro, consulta e priorizacao de compromissos escolares.",
    version="0.1.0",
)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "AgendaEdu API"}
