# Migracao para Next.js Serverless

## Mudanca realizada

O backend principal da aplicacao passou a ser implementado por Route Handlers do Next.js. A pasta `backend/` foi removida da area ativa do repositorio para evitar manutencao de codigo legado sem uso.

## Arquivos principais criados

- `frontend/src/app/api/health/route.js`
- `frontend/src/app/api/appointments/route.js`
- `frontend/src/app/api/appointments/priority-plan/route.js`
- `frontend/src/app/api/appointments/[id]/route.js`
- `frontend/src/lib/agendaedu/appointments.js`

## Arquivos de documentacao antiga

Os documentos anteriores foram preservados para consulta em:

```text
docs/descontinuado/
```

## Justificativa

A nova arquitetura reduz a necessidade de dois servidores locais, remove CORS no fluxo principal e aproxima o projeto de uma entrega serverless. A remocao do backend legado reduz ambiguidade sobre qual stack deve ser executada.

## Limitacao conhecida

O store em memoria nao e persistente. Ele atende demonstracao local, mas deve ser substituido por banco serverless para uso real.
