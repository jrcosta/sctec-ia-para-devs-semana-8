# Prompt 03: arquitetura e diagramas

Padrao: contexto + tarefa

```text
Contexto:
O AgendaEdu sera uma web app com frontend React + Vite, backend FastAPI e armazenamento em memoria ou arquivo JSON simples. A aplicacao precisa ser demonstravel, testavel e documentada. O projeto exige diagramas, decisoes arquiteturais e evidencias do uso de IA.

Tarefa:
Proponha a arquitetura da aplicacao e gere diagramas Mermaid para:
1. arquitetura geral;
2. fluxo de calculo do plano de prioridades.

Restricoes:
- O backend deve expor API JSON.
- O frontend deve consumir a API.
- O backend deve concentrar a regra de negocio.
- Os diagramas devem ser compativeis com Mermaid.
- Inclua justificativas tecnicas curtas.

Formato de resposta:
1. Decisoes arquiteturais.
2. Responsabilidades por camada.
3. Diagrama Mermaid de arquitetura.
4. Diagrama Mermaid do fluxo de priorizacao.
5. Riscos e mitigacoes.
```

## Saida obtida

A arquitetura foi documentada em `docs/arquitetura-agendaedu.md`, com:

- decisoes arquiteturais;
- responsabilidades por camada;
- diagrama Mermaid de arquitetura geral;
- diagrama Mermaid do fluxo de priorizacao;
- riscos e mitigacoes;
- proximos passos.

Os diagramas foram atualizados em:

- `docs/diagrams/arquitetura-agendaedu.mmd`;
- `docs/diagrams/fluxo-priorizacao.mmd`.

## Avaliacao critica

A proposta atende ao escopo avaliativo e mantem a regra de negocio no backend. A principal decisao ainda pendente e a formula numerica final de pontuacao do plano de prioridades. Essa decisao deve ser fechada na implementacao do backend e validada por testes.

## Ajustes aplicados

Foram adicionadas responsabilidades separadas para frontend, backend, servicos de dominio, repositorio, testes e CI/CD. Os diagramas foram refinados para mostrar explicitamente API JSON, Pydantic, motor de priorizacao, armazenamento simples, OpenAPI, Pytest, GitHub Actions e documentacao.
