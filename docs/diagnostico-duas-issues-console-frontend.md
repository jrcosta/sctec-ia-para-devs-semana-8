# Diagnostico: duas issues no console ao abrir o frontend

## Problema

Ao abrir o frontend, o console ainda mostrava duas issues relacionadas ao carregamento inicial:

- busca da lista de compromissos;
- busca do plano de prioridades.

## Causas provaveis

1. Havia um servidor Next.js antigo ocupando `127.0.0.1:3000`, indicado pelo log `EADDRINUSE`.
2. O cliente HTTP ainda aceitava configuracao publica de URL externa, o que podia manter chamadas para um backend antigo se o processo tivesse sido iniciado com variavel de ambiente anterior.
3. O componente registrava `console.error` para erros que ja eram tratados visualmente na UI, duplicando as issues no console.

## Correcao aplicada

Arquivo `frontend/src/services/api.js`:

- removida dependencia de `NEXT_PUBLIC_API_URL`;
- chamadas passam a ser sempre relativas ao mesmo host:
  - `/api/health`
  - `/api/appointments`
  - `/api/appointments/priority-plan`

Arquivo `frontend/src/App.jsx`:

- removidos `console.error` duplicados nos fluxos de carregamento inicial;
- a UI continua exibindo mensagens de erro quando houver falha real.

## Acao operacional

Se o problema persistir no navegador, reiniciar o servidor Next.js para eliminar bundle antigo em memoria.
