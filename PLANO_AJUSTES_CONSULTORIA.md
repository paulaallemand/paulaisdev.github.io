# Plano de ajustes — `/consultoria` (reconstrução com componentes reais)

*23/08/2026. Baseado em auditoria do Gui (dev) e do Vic (design) sobre o código real do site.*

## Diagnóstico

As 3 tentativas anteriores erraram do mesmo jeito: construíram um `style.css`
**autocontido**, "inspirado" na identidade do site (cores/fontes aproximadas
à mão), em vez de literalmente importar `css/main.css` + `css/media.css` e
reaproveitar os componentes reais (header, hero, botões, container). Isso
explica os 3 sintomas que você reportou:

1. **"Perdeu a identidade"** — porque o CSS era uma cópia aproximada, não o
   arquivo real.
2. **"Estranho no monitor grande"** — o `style.css` inventava um `.wrap`
   com `max-width` próprio (1100px / 1240px), valores que não existem no
   site real. O `main.css` já trava telas grandes corretamente
   (`.container` = 1200px, `.container-lg` = 1600px) — bastava usar essas
   classes.
3. **"Diferença drástica"** (Fraunces vs Poppins, creme vs off-white,
   arredondado vs reto) — confirmado: a fonte real do site é **Poppins**
   (o `.claude/skills/portfolio-identity/SKILL.md` diz "Inter", mas está
   desatualizado — o CSS que roda de verdade usa Poppins. Vic recomenda
   corrigir esse documento depois, separadamente).

## Decisão: importar o CSS/JS real, não recriar

A partir de agora, `/consultoria` carrega:
```
../css/reset.css
../css/main.css
../css/media.css
css/consultoria.css   (novo — só componentes que não existem ainda)
```
e no fim do body:
```
../js/main.js
../js/i18n.js   (opcional — só se quisermos bilíngue nessa página)
```

## Regras não-negociáveis pro JS não quebrar (achado crítico do Gui)

`js/main.js` acessa `#nav`, `#nav-btn`, `#header`, `#home` e `#goToTop`
**sem checagem de null** — se faltar `id="home"` na hero, o listener de
scroll quebra silenciosamente e derruba o sticky-header e o goToTop juntos.
Isso é provavelmente a causa real do "bug de responsividade" de uma
tentativa anterior, não a resolução em si.

**Toda página nova precisa ter, mesmo que sem uso visual:**
- `<section id="home" class="hero">` (ou qualquer seção, mas com esse ID)
- `<div id="goToTop">...</div>` (pode ficar oculto)
- Header com `id="header"`, nav com `id="nav"`, botão `#nav-btn` +
  `#nav-btn-img`

## Componentes a reaproveitar (literal, sem reinventar)

| Peça | Classe/arquivo | Nota |
|---|---|---|
| Header + nav | `.header`, `.header-nav`, `.logo`, `.nav`, `.nav-list`, `.nav-link`, `.nav-link-cta` | Copiar markup exato de `index.html`; já existe `.nav-link-cta` pro item "Consultoria" |
| Hero 2 colunas | `.hero`, `.hero-row`, `.hero-content`, `.hero-img`, `.hero-greeting`, `.hero-heading`, `.hero-heading-subtitle` | Split 58/42, não 50/50. Breakpoint de colapso pra 1 coluna é **720px** (não 977px) |
| Botão CTA principal | `.btn-red` | Marsala sólido — mesmo usado no footer ("Fale comigo"), maior destaque que `.btn` cinza-escuro |
| Container | `.container` (1200px) / `.container-lg` (1600px) | Nunca criar um `.wrap` novo |
| Eyebrow | `.section-eyebrow` | Uppercase, bordô, `letter-spacing: 0.2em` |
| Footer | `.footer`, `.footer-row`, `.footer-copyright` | Markup exato de `index.html` |
| Ritmo vertical | `var(--section-v)` = 10rem | Padding padrão de toda seção nova |

## Componentes novos (não existem no site — só podem usar os tokens reais)

Vão para `css/consultoria.css` (novo arquivo, no espírito de `learning.css`:
"só acrescenta, nunca sobrescreve main.css"):

- **Card do formulário**: fundo branco/off-white, borda 1px `--gray-color-2`,
  **sem** `border-radius` agressivo (máximo 0.4rem), inputs no padrão
  `border: 1px solid var(--gray-color-2); padding: 1.5rem; sem radius`
  (mesmo padrão do `.dashboard-name-input` já usado em `/learning`).
- **Lista numerada de passos**: número grande tipográfico + texto ao lado
  (sem círculo colorido/badge — foge do vocabulário do site).
- **Cards de vídeo**: flush, sem sombra decorativa, cantos retos ou 0.4rem,
  no padrão de `.project-card-title`/`.project-card-desc` pra tipografia.
- Nenhum `border-radius` > 0.4rem, nenhuma sombra genérica, nenhuma pill
  como CTA, nenhuma animação de entrada ao scroll (Do's/Don'ts do Vic).

## Paleta final (confirmada, hex reais do `:root` do `main.css`)

| Token | Hex |
|---|---|
| Fundo | `#f7fbfd` |
| Texto principal | `#0c1618` |
| Acento (marsala/bordô) | `#6f1d1b` |
| Texto secundário | `#565a5b` |

Sem creme, sem dourado — confirmado por Vic e já documentado por Gui em
`12-Desenvolvimento-Web.md`. O bordô da marca de vídeo e o marsala do site
são a mesma cor (`#6F1D1B` = `#6f1d1b`), então isso é o elo natural entre
as duas identidades.

## Fotografia

Trocamos sua foto pessoal por uma de banco (Pexels, uso livre) — hoje
linkada direto na URL da Pexels porque o sandbox não baixa o arquivo pro
repo. Tratamento de imagem no site real é sempre reto/flush (sem
`border-radius` grande, sem sombra) — vou ajustar o crop pra isso.

## Arquivos que vão mudar

1. `consultoria/index.html` — reescrito do zero usando os componentes reais
   (header/nav/hero/footer idênticos ao site, `id="home"` e `#goToTop`
   presentes, paths `../css/`, `../js/`, `../img/`).
2. `consultoria/css/consultoria.css` (novo) — só os 3 componentes que não
   existem no site (form card, lista de passos, cards de vídeo).
3. `consultoria/privacidade.html` — mesma reconstrução.
4. `consultoria/style.css` (atual) — removido, substituído pelo par acima.

## O que já foi feito nesta rodada (sem esperar o plano, por serem pontuais)

- Removida a seção "Novo — O conteúdo dos vídeos, organizado em trilha"
  da página principal (`index.html`).
- Adicionado checkbox opcional no formulário: "Quero também saber de novos
  conteúdos e oportunidades gratuitas" (`newsletter_optin`, sim/não).
- `EMAILJS_SETUP.md` atualizado com um passo pra você colocar seu próprio
  e-mail em **Bcc** no template — sem isso, você não tem nenhum registro
  de quem preencheu o formulário (EmailJS não é banco de dados).

## Status (23/08/2026) — implementado

Reconstrução concluída conforme aprovado:
- `consultoria/index.html` e `consultoria/privacidade.html` reescritos com
  header/nav/hero/footer/botões reais (`../css/reset.css` + `main.css` +
  `media.css` + `../js/main.js`), `id="home"` e `#goToTop` presentes.
- `consultoria/css/consultoria.css` (novo) com os 3 componentes que não
  existiam: card de formulário, lista de passos, cards de vídeo — só
  tokens reais, cantos ≤0.4rem, sem sombra genérica.
- `consultoria/style.css` (versão antiga, autocontida) descontinuado —
  não é mais referenciado; não consegui apagar por permissão da pasta,
  só deixei um aviso dentro dele.

## Rodada 2 (auditoria Gui + Vic) — implementado

- Centralização: `#pra-quem`, `#como-funciona`, `#form`, `#videos` voltaram
  pra `.container` simples (1200px), igual ao padrão de `#about` da home —
  removido o `container-lg` que deixava as colunas com respiro excessivo.
- Hierarquia de heading: os títulos de seção viraram `<h2 class="section-eyebrow">`
  (antes eram `<p>`) — agora a página tem H1 único + H2s reais.
- Carrossel: setas prev/next visíveis e acessíveis (`aria-label`, foco visível,
  alvo de toque ≥44px), `role="tablist"`/`aria-selected` nos pontos, trava de
  animação (`isAnimating`) pra não sobrepor fotos em cliques rápidos, crossfade
  reduzido de 0,8s pra 0,35s, pausa automática em hover/foco e respeito a
  `prefers-reduced-motion` (WCAG 2.2.2), `object-position: center top` nas fotos.
- Foco visível (WCAG 2.4.7) adicionado nos componentes novos desta página
  (pontos do carrossel, setas, cards de vídeo, campos do formulário, checkboxes).
- Título do H1 trocado — Paula escolheu "Menos tarefa manual, mais tempo pra você."
  entre as 6 opções sugeridas pelo Vic.
- Fotos do carrossel: as 4 fotos genéricas de notebook foram substituídas por
  5 fotos cobrindo profissões diferentes (médica, nutricionista, contadora,
  administradora, advogado) — todas Pexels, licença "Free to use". Não achei
  banco brasileiro com acesso realmente livre e comercial (brasilcoms:
  cota/parcialmente esgotado; pulsarimagens: pago; gov.br: uso jornalístico) —
  Paula está ciente e aprovou seguir com Pexels por ora.
- Ainda não commitado/publicado — falta seu ok final depois de conferir.

## Rodada 3 — implementado

- Carrossel do hero: removida a foto da "Contadora" (era uma foto real de
  escritório com placa de uma empresa de verdade, "Machado Nunes Assessoria
  Contábil" — não é apropriado usar o nome/identidade real de outro negócio
  no seu site). No lugar, voltou a foto da profissional negra com notebook
  (a que você já tinha aprovado antes).
- Crop das fotos do carrossel: `object-position` ajustado de `top` pra
  `15%` — o `top` estava mostrando o espaço vazio acima da cabeça em vez
  do rosto em algumas fotos. Sem conseguir ver as fotos eu mesma, isso é
  uma aproximação — me avisa se alguma continuar cortando estranho.
- "Como funciona": passos foram pro lado direito da seção; do lado
  esquerdo entrou um mockup de celular animado, simulando alguém acessando
  `/consultoria` e preenchendo nome e e-mail no formulário (efeito de
  digitação em loop, respeitando `prefers-reduced-motion`). Não gravei um
  vídeo de verdade — é uma simulação em CSS/JS, mais leve e mais fácil de
  manter que um vídeo.

## Rodada 4 — implementado

- Mensagem de sucesso do mockup de celular corrigida pra bater com a do
  formulário real: "Prontinho! Confere sua caixa de entrada (e o spam,
  por garantia)."
- Carrossel do hero: trocado `aspect-ratio` por altura fixa em rem (com
  valores por breakpoint) — agora as 5 fotos têm sempre exatamente a
  mesma altura entre si, e a imagem termina rente ao limite da seção,
  sem sobrar tira do fundo por baixo.
- `.hero-carousel` ganhou `background-color: var(--primary-accent)`
  (grafite escuro) como base — se alguma foto não carregar por qualquer
  motivo, aparece essa cor em vez do off-white azulado do site
  (`--primary-bg-color`), que era o mais provável causador do "fundo
  azul estranho" que você viu.

## Rodada 5 — implementado

- Carrossel desativado a pedido da Paula: o HTML (fotos, setas, pontos)
  ficou comentado dentro de `<!-- -->`, e o `<script>` do carrossel
  também — pra reativar no futuro é só remover os dois comentários.
- No lugar entrou uma imagem fixa: a primeira foto usada na primeira
  versão do carrossel (Christina Morillo, "Happy businesswoman with
  curly hair using a laptop at her desk", Pexels 1181742), com o mesmo
  esquema de altura por breakpoint e o mesmo fundo de fallback
  (`.hero-photo`, espelha `.hero-carousel`).
