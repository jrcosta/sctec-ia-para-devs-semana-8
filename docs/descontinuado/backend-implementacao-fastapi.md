# Implementacao inicial do backend FastAPI

Issue de referencia: `#15 Implementar backend FastAPI`

Branch indicada: `feature/geracao-codigo-ia`

Prompt relacionado: `docs/prompts/04-backend-fastapi.md`

## 1. Arquivos a criar

- `backend/app/main.py`
- `backend/app/schemas.py`
- `backend/app/models.py`
- `backend/app/repositories/appointments.py`
- `backend/app/services/appointments.py`
- `backend/app/services/priorities.py`
- `backend/tests/test_appointments.py`
- `docs/prompts/04-backend-fastapi.md`

## 2. Codigo por arquivo

Implementado no repositório:

- `backend/app/main.py`: rotas FastAPI para `health`, cadastro, listagem, consulta por ID e plano de prioridades.
- `backend/app/schemas.py`: modelos Pydantic e respostas estruturadas.
- `backend/app/models.py`: enums de tipo, prioridade e status.
- `backend/app/repositories/appointments.py`: armazenamento em memória com add, list, get_by_id e clear.
- `backend/app/services/appointments.py`: filtros por disciplina, tipo, prioridade, status e intervalo de datas.
- `backend/app/services/priorities.py`: calculo de pontuacao e geração do plano ordenado.
- `backend/tests/test_appointments.py`: cobertura inicial dos fluxos principais.

## 3. Comandos para executar

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m pytest
uvicorn app.main:app --reload
```

## 4. Exemplos de chamadas

### Cadastrar compromisso

```bash
curl -X POST http://127.0.0.1:8000/appointments ^
  -H "Content-Type: application/json" ^
  -d "{\"titulo\":\"Prova de matematica\",\"descricao\":\"Capitulos 1 a 4\",\"disciplina\":\"Matematica\",\"tipo\":\"prova\",\"data\":\"2026-05-28\",\"prioridade\":\"alta\",\"status\":\"pendente\"}"
```

### Listar com filtro

```bash
curl "http://127.0.0.1:8000/appointments?disciplina=Matematica&tipo=prova"
```

### Gerar plano de prioridades

```bash
curl "http://127.0.0.1:8000/appointments/priority-plan"
```

## 5. Pontos que exigem revisao humana

- Os pesos numéricos da priorização podem ser ajustados após validação com uso real.
- O armazenamento em memória atende ao ciclo inicial, mas perde dados ao reiniciar.
- A API ainda não grava em JSON persistente.
- A cobertura de testes cobre os fluxos principais, mas ainda falta testar combinações mais amplas de filtros e casos de datas limite.
- O frontend ainda precisa consumir esses endpoints para fechar a experiência completa.

