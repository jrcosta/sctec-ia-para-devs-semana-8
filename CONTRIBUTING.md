# Contribuindo com o AgendaEdu

Este projeto segue Gitflow, commits semanticos e Pull Requests obrigatorios para integrar alteracoes.

## Fluxo de Branches

Branches principais:

- `main`: versao final entregue.
- `develop`: branch de integracao.

Branches de trabalho:

- `feature/nome-da-funcionalidade`
- `docs/nome-da-documentacao`
- `fix/nome-da-correcao`
- `test/nome-dos-testes`

Toda nova mudanca deve comecar com uma branch propria a partir da branch base correta.

Exemplo:

```bash
git switch develop
git pull
git switch -c feature/geracao-codigo-ia
```

## Pull Requests

Toda alteracao que produza artefato deve ser mergeada por PR para `develop`.

Regras:

- Nao abrir PR diretamente para `main`, exceto no merge final de entrega.
- Nao misturar escopos diferentes no mesmo PR.
- Nao misturar feature, refatoracao, testes e documentacao sem necessidade tecnica clara.
- Cada PR deve ter descricao objetiva, checklist preenchido e evidencia de validacao.
- Branches nao devem ser excluidas apos o PR concluido, conforme requisito do projeto avaliativo.

## Commits Semanticos

Use mensagens curtas e claras no formato:

```text
tipo: descricao objetiva
```

Tipos aceitos:

- `feat`: nova funcionalidade;
- `fix`: correcao de bug;
- `docs`: documentacao;
- `refactor`: refatoracao sem mudanca de comportamento;
- `test`: testes;
- `chore`: manutencao;
- `ci`: pipeline e automacoes.

Exemplos:

```text
docs: add AgendaEdu execution plan
feat: implement appointment creation endpoint
test: cover priority planning rules
ci: add backend tests workflow
```

## Escopo por PR

Cada PR deve representar um unico objetivo.

Exemplos corretos:

- criar prompts de planejamento;
- implementar endpoint de cadastro;
- adicionar testes de priorizacao;
- configurar pipeline CI/CD.

Exemplos a evitar:

- implementar backend, frontend e README no mesmo PR;
- refatorar codigo enquanto adiciona nova funcionalidade;
- alterar regras de negocio junto com mudancas visuais.

## Uso de IA

O uso de IA deve ser rastreavel.

Sempre que uma etapa usar IA, registre:

- prompt utilizado;
- saida relevante;
- avaliacao critica;
- ajuste aplicado;
- arquivo ou PR relacionado.

Os registros devem ficar em `docs/prompts/`.

## Testes e Validacao

Antes de abrir PR, execute as validacoes aplicaveis.

Backend:

```bash
cd backend
python -m pytest
```

Frontend:

```bash
cd frontend
npm run build
```

Pipeline:

- confirmar que o GitHub Actions executa lint, testes e build quando configurado;
- documentar falhas e correcoes no PR quando existirem.

## Checklist Antes do PR

- [ ] A mudanca foi feita em branch propria.
- [ ] O PR aponta para `develop`.
- [ ] O PR tem um unico escopo.
- [ ] Os commits seguem commits semanticos.
- [ ] Prompts usados foram salvos em `docs/prompts/`.
- [ ] Testes ou validacoes aplicaveis foram executados.
- [ ] Documentacao foi atualizada quando necessario.
- [ ] Nao ha chaves reais ou segredos no repositorio.

## Entrega Final

Ao final do desenvolvimento:

- todo o codigo deve estar mergeado em `develop`;
- a entrega final deve ser aberta de `develop` para `main`;
- o README deve conter o link do video nao listado;
- o repositorio e o board devem estar prontos para submissao no AVA.
