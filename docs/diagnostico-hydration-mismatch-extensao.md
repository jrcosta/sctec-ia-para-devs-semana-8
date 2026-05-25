# Diagnostico: hydration mismatch por extensoes no HTML

## Issue

Issue vinculada: `#21 Fix hydration mismatch causado por extensao no HTML raiz`

## Problema

O console exibiu erro de hidratacao no Next.js informando que atributos do HTML renderizado no servidor nao batiam com as propriedades no cliente.

Trechos relevantes:

```text
data-lt-installed="true"
suppresshydrationwarning="true"
cz-shortcut-listen="true"
```

## Causa

Os atributos `data-lt-installed` e `cz-shortcut-listen` indicam interferencia de extensoes do navegador. Elas alteram o elemento `<html>` ou `<body>` antes do React hidratar a pagina, gerando diferenca entre HTML do servidor e DOM do cliente.

## Correcao aplicada

Arquivo alterado:

```text
frontend/src/app/layout.jsx
```

Foi adicionada a propriedade React correta nos elementos raiz afetados:

```jsx
<html lang="pt-BR" suppressHydrationWarning>
  <body suppressHydrationWarning>
```

## Observacao

Essa correcao evita ruido de hidratacao causado por atributos externos no `html` e no `body`. Se o erro persistir, testar tambem em aba anonima ou com extensoes desativadas.
