/**
 * Autenticação da plataforma de training (paulaallemand.com/training).
 * Sprint 2 — login com Google Identity Services (GSI).
 *
 * IMPORTANTE: troque GOOGLE_CLIENT_ID abaixo pelo Client ID real, criado no
 * Google Cloud Console (APIs & Services → Credentials → OAuth client ID →
 * Web application, com paulaallemand.com nas origens autorizadas). Sem isso,
 * o botão de login não funciona — é a única peça que depende da Paula.
 *
 * O login aqui não abre backend nenhum: guarda o perfil básico (nome, e-mail,
 * foto) em localStorage, só pra saber quem está logada e liberar o
 * acompanhamento de progresso quando as aulas existirem (Sprint 3). O
 * conteúdo em si nunca depende de login pra ser visto.
 */

const GOOGLE_CLIENT_ID = "571336837163-2if41u56e2fkfv6kdsftgbr2ttq08dvo.apps.googleusercontent.com";

const PA_TRAINING_SESSION_KEY = "pa_training_user";

/** Decodifica o JWT do Google (sem validar assinatura — validação de verdade é tarefa de backend, fora do escopo do Sprint 2). */
function decodeGoogleCredential(credential) {
  const payloadBase64 = credential.split(".")[1];
  const payloadJson = decodeURIComponent(
    atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/"))
      .split("")
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
  return JSON.parse(payloadJson);
}

function paTrainingSaveSession(profile) {
  const session = {
    name: profile.name,
    email: profile.email,
    picture: profile.picture,
    loggedInAt: new Date().toISOString(),
  };
  localStorage.setItem(PA_TRAINING_SESSION_KEY, JSON.stringify(session));
  return session;
}

function paTrainingGetSession() {
  const raw = localStorage.getItem(PA_TRAINING_SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function paTrainingLogout() {
  localStorage.removeItem(PA_TRAINING_SESSION_KEY);
}

/** Handler chamado pelo Google depois de um login bem-sucedido (ver data-callback no botão). */
function handleGoogleCredentialResponse(response) {
  const profile = decodeGoogleCredential(response.credential);
  paTrainingSaveSession(profile);

  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "/training/trilhas/index.html";
  window.location.href = next;
}

/** Usado nas páginas de trilha pra mostrar estado logada/deslogada e trocar o CTA. */
function paTrainingRenderAccountState({
  loggedOutEl,
  loggedInEl,
  nameEl,
} = {}) {
  const session = paTrainingGetSession();

  if (session && loggedInEl) {
    if (loggedOutEl) loggedOutEl.style.display = "none";
    loggedInEl.style.display = "";
    if (nameEl) nameEl.textContent = session.name;
  } else if (loggedOutEl) {
    loggedOutEl.style.display = "";
    if (loggedInEl) loggedInEl.style.display = "none";
  }
}
