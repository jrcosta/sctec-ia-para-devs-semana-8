# Diagnostico: hydration mismatch no elemento html

## Issue

Issue vinculada: `#21 Fix hydration mismatch causado por extensao no HTML raiz`

## Problema

O console exibiu erro de hidratacao no Next.js informando que atributos do HTML renderizado no servidor nao batiam com as propriedades no cliente.

Trecho relevante:

```text
data-lt-installed="true"
suppresshydrationwarning="true"
```

## Causa

O atributo `data-lt-installed` indica interferencia de extensao do navegador, normalmente LanguageTool. A extensao altera o elemento `<html>` antes do React hidratar a pagina, gerando diferenca entre HTML do servidor e DOM do cliente.

## Correcao aplicada

Arquivo alterado:

```text
frontend/src/app/layout.jsx
```

Foi adicionada a propriedade React correta no elemento raiz:

```jsx
<html lang="pt-BR" suppressHydrationWarning>
```

## Observacao

Essa correcao evita ruido de hidratacao causado por atributos externos no elemento raiz. Se o erro persistir, testar tambem em aba anonima ou com extensoes desativadas.
