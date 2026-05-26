# Prompt 07: testes dos Route Handlers

```text
Crie testes para os Route Handlers do AgendaEdu cobrindo health check,
cadastro valido, validacoes, filtros, consulta por ID e plano de prioridades.
```

## Estrategia

A suite deve validar a aplicacao Next.js ativa, priorizando:

- contrato JSON;
- validacoes de payload;
- filtros combinados;
- comportamento do 404 por ID ausente;
- ordenacao do plano de prioridades;
- isolamento do store com reset entre testes.
