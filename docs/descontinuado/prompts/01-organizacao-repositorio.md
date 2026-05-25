# Prompt 01: organizacao do repositorio

Padrao: contexto + tarefa

```text
Contexto:
Estou desenvolvendo o AgendaEdu, uma web app de agenda escolar para o projeto avaliativo de IA para Desenvolvedores. O repositorio deve seguir Gitflow, usar Pull Requests para integrar em develop, manter commits semanticos e documentar o uso de IA em todas as etapas.

Tarefa:
Analise a estrutura inicial do repositorio e proponha uma organizacao de pastas para frontend Next.js, backend FastAPI, testes, documentacao, prompts, diagramas e pipeline CI/CD.

Restricoes:
- Nao misture escopos diferentes na mesma branch.
- Use nomes de pastas claros.
- Inclua docs/prompts para os prompts.
- Inclua docs/diagrams para diagramas Mermaid.
- Inclua .env.example sem chaves reais.

Formato de resposta:
1. Estrutura de pastas sugerida.
2. Justificativa de cada pasta.
3. Checklist de arquivos iniciais.
4. Branch e commit semantico sugeridos.
```

## Saida obtida

A estrutura inicial foi criada com separacao entre `backend/`, `frontend/`, `docs/`, `examples/`, `.github/`, `.env.example` e `.gitignore`.

Arquivos principais gerados:

- `backend/app/main.py`
- `backend/app/models.py`
- `backend/app/schemas.py`
- `backend/app/services/priorities.py`
- `backend/app/repositories/appointments.py`
- `backend/tests/test_health.py`
- `frontend/src/App.jsx`
- `frontend/src/services/api.js`
- `examples/appointment-request.json`
- `examples/priority-response.json`
- `scripts/dev.ps1`
- `.env.example`
- `.gitignore`

## Avaliacao critica

A estrutura gerada atende ao objetivo de organizar o repositorio, mas ainda nao implementa as funcionalidades principais. A decisao foi manter esta etapa limitada a scaffolding para nao misturar estrutura inicial com regras de negocio, frontend completo, testes funcionais ou pipeline.

## Ajustes aplicados

Foram criados placeholders funcionais minimos:

- endpoint `/health` no backend para validar execucao da API;
- tela inicial no frontend sem fluxo de negocio;
- script `scripts/dev.ps1` para subir backend e frontend juntos;
- exemplos JSON para apoiar documentacao e testes futuros;
- repositorio em memoria e servico de priorizacao ainda sem regra completa.
- `python -m pytest backend` foi tentado na raiz. A primeira falha foi corrigida com `pyproject.toml`; a segunda indicou incompatibilidade no ambiente global entre `fastapi==0.115.0` e `starlette==1.0.0`. O `requirements.txt` foi ajustado para fixar versoes compativeis e a validacao completa deve ser repetida em ambiente virtual limpo.

