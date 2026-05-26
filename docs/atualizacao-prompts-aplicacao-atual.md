# Atualizacao dos prompts para a aplicacao atual

## Objetivo

Reescrever os prompts ativos do AgendaEdu para que, executados em sequencia, recriem a aplicacao atualmente consolidada em Next.js serverless.

Issue de referencia: #32

## Escopo

- alinhar os prompts com a stack ativa;
- retirar referencias ao backend Python legado;
- tornar os prompts auto-suficientes;
- manter a documentacao historica em `docs/descontinuado/`.

## Motivo

Os prompts antigos ainda exigiam interpretacao de contexto para chegar ao estado atual do projeto. A nova versao deve permitir que um agente siga apenas os arquivos vigentes e obtenha a mesma arquitetura, estrutura e comportamento do repositorio atual.

## Validacao esperada

```powershell
cd frontend
npm test
npm run build
```
