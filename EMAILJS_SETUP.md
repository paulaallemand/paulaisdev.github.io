# Configurar o EmailJS — Consultoria

A página `/consultoria` já está pronta com o formulário e o código de envio.

**Status (23/08/2026):** as 3 chaves (Service ID, Template ID, Public Key) já
estão coladas no código. Falta só colar o `EMAIL_TEMPLATE_CONSULTORIA.html`
no Code Editor do template (passo 6, se ainda não fez) e testar (passo 6 do
final do documento).

> ⚠️ **Sobre a Private Key que você me mandou:** não usei ela em nada — o
> fluxo do formulário (`emailjs.sendForm`) só precisa da Public Key. A
> Private Key não deve ir pro código do site (fica em texto puro num repo
> público). Ela só é necessária se um dia você chamar a API do EmailJS
> direto de um servidor. Por segurança, evite colar ela em lugares que não
> sejam o próprio painel do EmailJS.

## 1. Criar a conta

1. Vá em [emailjs.com](https://www.emailjs.com/) e crie uma conta gratuita
   (até 200 e-mails/mês).
2. Confirme seu e-mail.

## 2. Conectar seu e-mail (Service)

1. No painel, vá em **Email Services → Add New Service**.
2. Escolha o provedor que você usa (Gmail, Outlook, etc.) e autorize o
   EmailJS a mandar e-mails em seu nome.
3. Anote o **Service ID** gerado (algo como `service_xxxxxxx`).

## 3. Criar o template do e-mail

1. Vá em **Email Templates → Create New Template**.
2. Em **To Email**, coloque `{{reply_to}}` (é o e-mail que a pessoa
   preencheu no formulário).
3. Em **From Name**, coloque `Paula Allemand`.
4. Em **Reply To**, coloque o seu e-mail (`paulaalemand@gmail.com`), pra
   respostas caírem direto na sua caixa.
4.1. Em **Bcc**, coloque também o seu e-mail — assim você recebe uma cópia
   de cada envio (nome, e-mail e se a pessoa aceitou saber de novos
   conteúdos/oportunidades, campo `newsletter_optin`). Sem isso, você não
   tem nenhum registro de quem preencheu o formulário (o EmailJS não é um
   banco de dados, só manda o e-mail).
5. **Assunto:**

   ```
   Antes da nossa conversa
   ```

6. **Corpo do e-mail** — o EmailJS tem uma aba **"Code Editor"** dentro do
   editor de template (troca de WYSIWYG pra HTML). Abra ela, apague o que
   tiver lá, e cole o conteúdo do arquivo `EMAIL_TEMPLATE_CONSULTORIA.html`
   (está na raiz do repo) — é o e-mail já formatado com a identidade do
   site (Poppins, bordô, botão de agendar). Troque o link de agendamento
   dentro do HTML se o definitivo mudar.

   Se preferir sem HTML, a versão em texto puro é essa:

   ```
   Oi, {{from_name}}!

   Que bom que você quer conversar sobre automação e uso de IA no seu dia a dia.

   Pra aproveitarmos bem o nosso tempo, separei 3 pontos rápidos pra você
   pensar antes da conversa:

   1. Objetivo — o que você quer alcançar automatizando ou usando IA no seu
      trabalho?
   2. Dificuldade — onde você trava hoje? o que você já tentou?
   3. Tarefas — quais tarefas do seu dia a dia você imagina que dá pra
      automatizar?

   Não precisa responder nada agora, só pensar um pouco — a gente conversa
   sobre isso na chamada.

   Agenda um horário aqui: https://calendar.app.google/F5neD8jY2hFM3AnP8

   Quer adiantar o básico de IA antes da conversa? Tem uma seleção de vídeos
   aqui: https://paulaallemand.com/consultoria#videos

   Até já,
   Paula
   ```

7. Salve e anote o **Template ID** (algo como `template_xxxxxxx`).

## 4. Pegar a Public Key

1. Vá em **Account → General**.
2. Copie a **Public Key**.

## 5. Colar a chave que falta no código

Service ID e Public Key já estão coladas em `consultoria/index.html`.
Só falta o Template ID: procure `SEU_TEMPLATE_ID` perto do final do arquivo
e substitua pelo Template ID do passo 3.

## 6. Testar

1. Abrir a página localmente ou já publicada.
2. Preencher o formulário com seu próprio e-mail.
3. Confirmar que o e-mail chega (e checar a caixa de spam na primeira vez).

---

*Quando o projeto Firebase (Fase 0, tarefa #41) for criado de verdade, dá
pra migrar esse envio pra uma Cloud Function e também salvar os leads no
Firestore — hoje o EmailJS não guarda os contatos em lugar nenhum além do
seu próprio e-mail recebido.*
