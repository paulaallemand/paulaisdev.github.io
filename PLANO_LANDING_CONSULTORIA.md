# Plano — Landing Page de Consultoria (Automação e IA no dia a dia)

*Planejado em 23/08/2026. Página nova, sem tocar na migração Next.js (branch `feat/next-js-migration`) — tudo aqui roda em cima da `main`, no mesmo formato estático do site atual.*

> **Status (23/08/2026):** página construída em `/consultoria` (`index.html`, `style.css`, `privacidade.html`) + `EMAILJS_SETUP.md` com o passo a passo pra você conectar sua conta. **Ainda não commitado nem publicado** — aguardando seu ok (ver seção 9) e as 3 chaves do EmailJS.

---

## 1. Objetivo

Página em `paulaallemand.com/consultoria` oferecendo consultoria de automação e uso de IA no dia a dia para profissionais não técnicos. Fluxo do visitante:

1. Chega na página, entende a oferta.
2. Preenche nome + e-mail.
3. Recebe um e-mail automático com um passo a passo de preparação pra conversa (objetivo, dificuldade, tarefas com potencial de automação) + link de agendamento.
4. Enquanto isso, pode assistir vídeos recomendados no YouTube pra entender o básico de IA (placeholder até a plataforma própria — `/learning` — ficar pronta).

## 2. Estrutura da página

Uma página só, `consultoria/index.html`, estática — mesmo padrão de `/learning`.

1. **Hero** — headline direta (sem hype), subheadline explicando pra quem é, botão que rola até o formulário.
2. **Pra quem é / o que resolve** — 2-3 dores reais de quem não é técnico e usa (ou quer usar) IA no trabalho.
3. **Como funciona** — 3 passos: preenche → recebe e-mail com o preparo → agenda a conversa.
4. **Formulário** — nome + e-mail, botão único, sem fricção.
5. **Quer entender o básico antes?** — os vídeos recomendados do YouTube, com um aviso de que é temporário até a plataforma própria estar pronta.
6. **Rodapé** — identidade da marca, link pra política de privacidade (já existe em `/privacy`).

**Visual** (`Equipe/Kit-Visual-Marca.md`): bordô `#6F1D1B`, creme `#F4EDE4`, grafite `#2B2523`. Título em serifada (Fraunces/Playfair), corpo em sans (Inter/Poppins/Montserrat). Tom: clara, real, acolhedora — nunca hype, nunca "fórmula de sucesso".

## 3. Onde publica

Direto na `main` do `paulaallemand.com`, pasta nova `/consultoria/`, HTML+CSS+JS estáticos (reaproveitando `/css` e `/js` já existentes onde fizer sentido). Não mexe em `app/`, `.next`, nem na branch de migração — zero conflito com esse trabalho em andamento.

## 4. Backend de e-mail — decidido: EmailJS

Confirmado por você em 23/08/2026: **EmailJS agora, migração pro Firebase depois** (quando o projeto Firebase da Fase 0 existir de verdade). Instruções completas de setup em `EMAILJS_SETUP.md`.

<details>
<summary>Comparação que motivou a decisão</summary>

Você pediu pra usar "o servidor" do próprio site, mas hoje a `main` é 100% estática (sem servidor). A opção mais próxima disso é **Firebase** (o projeto já está desenhado no repo — `firestore.rules`, `lib/firebase.ts` — mas ainda não foi criado de fato, é a tarefa pendente #41 do tracker).

Duas rotas possíveis:

| | Firebase (Cloud Function) | EmailJS |
|---|---|---|
| Precisa criar projeto novo | Sim | Não |
| Precisa cartão de crédito | **Sim** — Cloud Functions só faz chamada de rede pra fora (necessária pra mandar e-mail) no plano **Blaze** (pay-as-you-go), não no gratuito (Spark) | Não |
| Custo real no seu volume | Praticamente zero (fica dentro da faixa gratuita), mas a conta fica com billing habilitado | Grátis até 200 e-mails/mês |
| Reaproveita infra já planejada no repo | Sim (Firestore guarda os leads) | Não (mas dá pra também salvar no Firestore depois, se quiser) |
| Onde roda o envio | Cloud Function (Node + SendGrid, ~100 e-mails grátis/dia sem cartão) | Direto do navegador, sem servidor nenhum |

**Recomendação:** EmailJS pra começar — zero fricção, zero cartão, funciona hoje com o site estático como está. Se/quando o projeto Firebase for criado de verdade (tarefa #41, parte da migração maior), migro o envio pra lá e aproveito pra também salvar os leads no Firestore.

*Se um dia migrar pro Firebase, aviso antes de habilitar billing — é mudança de configuração de conta, não faço sem ok explícito.*
</details>

## 5. Formulário — campos e consentimento

- Nome
- E-mail
- Checkbox: "aceito receber e-mails sobre a consultoria" (base legal LGPD — a página de privacidade já existe em `app/privacy/page.tsx`, vou linkar)

## 6. E-mail automático — conteúdo

**Assunto:** algo como "antes da nossa conversa" (a definir no copy final).

**Corpo:**
- Saudação breve, tom de marca.
- Passo a passo de preparo, 3 pontos:
  1. **Objetivo** — o que você quer alcançar automatizando/usando IA no seu trabalho.
  2. **Dificuldade** — onde trava hoje, o que já tentou.
  3. **Tarefas** — quais tarefas do seu dia a dia você imagina que dá pra automatizar.
- Link de agendamento: `https://calendar.app.google/F5neD8jY2hFM3AnP8` — **você chamou de "teste este", então confirmo antes de publicar se é o link definitivo.**
- Link pra seção de vídeos recomendados (ou os vídeos direto no corpo do e-mail).

## 7. Vídeos do YouTube — shortlist inicial

Pesquisa em português (nada em inglês sem legenda PT-BR, como você pediu). Shortlist pra você revisar — ainda preciso confirmar qualidade/atualidade assistindo antes de publicar, isso aqui é ponto de partida:

**Básico de IA (o que é, conceito):**
- ["O que é Inteligência Artificial (IA)? (Explicado de Forma Simples!)"](https://www.youtube.com/watch?v=gHLeO7wbooU)
- ["Inteligência Artificial em 4 minutos" — canal Pensamento Computacional](https://www.youtube.com/watch?v=lB4IwJDnvsA)

**Uso prático no trabalho (ChatGPT/IA no dia a dia):**
- ["ChatGPT - O que é e Como usar [Tutorial Detalhado + Exemplos]"](https://www.youtube.com/watch?v=UmuJeb0VvXA)
- ["Aprenda ChatGPT em 15 Minutos"](https://www.youtube.com/watch?v=Ju7GCm1wlYI)

Se preferir, posso trocar por vídeos do seu próprio banco de conteúdo (Trilha IA Nível 0) assim que os roteiros virarem vídeo — hoje ainda não tem vídeo publicado, só os carrosséis e roteiros de gravação.

## 8. Ordem de execução

1. Confirmar as 2 decisões em aberto (seção 9).
2. Assistir e validar a shortlist de vídeos (ou trocar).
3. Escrever o copy final da página (headline, seções, microcopy) seguindo o Guia de Voz.
4. Construir `/consultoria/index.html` com o Kit Visual aplicado.
5. Configurar EmailJS (ou Firebase, conforme decisão) e escrever o e-mail automático.
6. Testar o fluxo ponta a ponta: preencher → receber e-mail → clicar no link de agendamento.
7. Commit direto na `main`, conferir `paulaallemand.com/consultoria` no ar.

## 9. Decisões em aberto (preciso da sua resposta antes de construir)

1. **Backend de e-mail:** EmailJS (recomendado, sem cartão) ou Firebase Blaze (billing habilitado, cartão cadastrado)?
2. **Link de agendamento:** o link que você mandou (`calendar.app.google/F5neD8jY2hFM3AnP8`) é definitivo ou só teste?
3. **Preço/formato da consultoria** aparece na página, ou fica só "agende uma conversa" sem valor exposto?
4. **Headline/nome da oferta** — quer propor você, ou eu escrevo opções pro seu ok?
