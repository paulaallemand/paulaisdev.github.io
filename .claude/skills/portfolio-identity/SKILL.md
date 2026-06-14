---
name: portfolio-identity
description: Identidade visual e editorial do portfólio da Paula Allemand (paulaisdev.github.io). Carregue ao trabalhar em qualquer mudança de design, copy, layout ou componente do portfólio — define paleta, tipografia, ritmo de cor das seções, tom de voz e a referência ARQ Finance.
---

# Identidade do portfólio — Paula Allemand

Portfólio pessoal em HTML/CSS/JS vanilla (GitHub Pages). Branch de trabalho: `revamp-2026`.
Referência de design: **ARQ Finance** — editorial, premium, muito respiro, alto contraste.

## Quem é a Paula

Engenheira de Software com trajetória da neurociência (USP, doula/obstetrícia) aos
sistemas críticos do mercado financeiro (Itaú, BV, BTG Pactual). Educadora há +5 anos
({reprograma}, Minas Programam, Tera, Estação Hack) — +4 mil alunos, +400 aulas.
A narrativa central é **propósito + transformação pela tecnologia e educação**.

**Manifesto:** "Acredito no poder da tecnologia para transformar: movida por propósito,
alimentada pelo aprendizado e comprometida em construir soluções de impacto para um
amanhã melhor."

**Citação âncora (seção Sobre):** "Tudo que você toca, você transforma. Tudo que você
transforma, transforma você." — Octavia Butler.

## Paleta

| Cor | Hex | Variável CSS | Uso |
|-----|-----|--------------|-----|
| Off-white | `#f7fbfd` | `--primary-bg-color` | Fundo claro padrão, texto sobre escuro |
| Grafite | `#0c1618` | `--primary-accent` | Fundo escuro (talks), texto principal |
| Marsala | `#6f1d1b` | `--secondary-accent` | Acento, fundo de seções de destaque, linhas |
| Cinza | `#565a5b` | `--gray-text-color` | Texto secundário/descrições |

## Ritmo de cor das seções (intercalar — nunca encadear cores iguais)

`hero(W) → about(M) → experience(W) → communities(W) → feedbacks(W) → talks(G) → footer(M)`

W = off-white · M = marsala · G = grafite. O marsala vive no #about (citação Octavia
Butler, emocional/pessoal) e no footer. Garantir **alto contraste** texto/fundo sempre.

## Tipografia

- **Títulos de seção** (`.title`): grandes, peso 400–600, line-height ~1.3.
- **Eyebrow** (`.section-eyebrow`): uppercase, letter-spacing largo (~0.2em), pequeno,
  cor reduzida (cinza ou off-white 72% sobre escuro).
- **Citação** (`.about-quote-text`): ~4.4rem, peso 400; autor abaixo, separado, em cor
  de acento reduzida.
- **Body**: 1.4–1.7rem, line-height 1.7–1.85, cor cinza.

## Princípios de design (estilo ARQ)

- **Editorial flush, sem molduras genéricas** — conteúdo direto sobre o fundo. Evitar
  cards brancos com sombra + borda arredondada (parecem genéricos). Quando precisar
  destacar, usar linha de acento marsala à esquerda + tipografia, não caixas.
- **Muito respiro** — espaçamento vertical generoso (`--section-v`).
- **Imagens que sangram** — fotos grandes, podem cortar nas bordas (ex.: carousel split).
- **Sem motions de entrada/saída** — nada de AOS ou animações de scroll. Micro-interações
  sutis (hover) são ok.
- **Marca-d'água tipográfica** — números de ano gigantes, baixa opacidade, como elemento
  gráfico.

## Componentes-chave

- **Carousel de palestras (split)**: bloco esquerdo narrativo (fundo grafite) + trilha de
  fotos à direita que sangra. 1º card alinhado com "Início" da navbar. Legenda com faixa
  preta opaca de altura padronizada. Peek/fade sutil no card seguinte. Drag por Pointer
  Events, sem autoplay, sem setas visíveis (setas só para a11y).
- **Experiência editorial**: card "Agora" flush (linha marsala + ano marca-d'água), e
  trajetória anterior em abas de ano numa página dedicada (`trajetoria.html`).
- **Chat de feedbacks estilo Zoom**: mensagens reais de alunos animadas como num chat.
- **Grid de logos** (empresas & comunidades): grayscale + hover colorido.

## Do / Don't

✅ Intercalar cores entre seções · alto contraste · respiro · editorial flush · marsala
como acento pontual · imagens grandes.

❌ Encadear seções da mesma cor · cards brancos com sombra genérica · motions de entrada
(AOS) · ícones/ilustrações "brega" · texto de baixo contraste · setas de carousel visíveis.
