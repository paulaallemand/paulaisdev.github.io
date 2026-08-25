/**
 * Renderiza o Glossário (training/glossario) como lista alfabética, com
 * busca e navegação por letra. Uma parte dos termos (PA_GLOSSARIO_SEMANA_ABERTA)
 * fica aberta pra qualquer pessoa; o restante convida a pessoa a entrar com
 * Google pra ver a definição — sempre em tom convidativo, nunca restritivo
 * (sem "bloqueado", sem cadeado).
 */

const PA_GLOSSARIO_SEMANA_ABERTA = 1;
const PA_GLOSSARIO_LOGIN_URL = "../login/index.html?next=/training/glossario/index.html";

const PA_GLOSSARIO_CONVITES = [
  "Essa definição fica disponível assim que você entra com sua conta Google.",
  "Entra com sua conta Google pra ver essa definição.",
  "Falta só entrar com sua conta Google pra desbloquear esse termo.",
  "Essa aqui é só entrar com sua conta Google e já libera.",
  "Quer ver o significado? É só entrar com sua conta Google.",
];

function paGlossarioHash(texto) {
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    hash = (hash << 5) - hash + texto.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function paGlossarioNormalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function paGlossarioPrimeiraLetra(termo) {
  const limpo = paGlossarioNormalizar(termo).trim();
  const letra = limpo.charAt(0).toUpperCase();
  return /[A-Z]/.test(letra) ? letra : "#";
}

function paGlossarioMontarDados() {
  if (typeof PA_GLOSSARIO_TERMOS === "undefined") return [];
  const logada = !!paTrainingGetSession();

  return PA_GLOSSARIO_TERMOS.map((t) => ({
    ...t,
    aberto: t.semana === PA_GLOSSARIO_SEMANA_ABERTA || logada,
    letra: paGlossarioPrimeiraLetra(t.termo),
  })).sort((a, b) =>
    paGlossarioNormalizar(a.termo).localeCompare(paGlossarioNormalizar(b.termo))
  );
}

function paGlossarioRenderAlfabeto(letrasComTermo) {
  const nav = document.getElementById("glossario-alfabeto");
  if (!nav) return;
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  nav.innerHTML = alfabeto
    .map((letra) => {
      const temTermo = letrasComTermo.has(letra);
      return temTermo
        ? `<a class="glossario-alfabeto-link" href="#letra-${letra}">${letra}</a>`
        : `<span class="glossario-alfabeto-link is-disabled">${letra}</span>`;
    })
    .join("");
}

function paGlossarioCriarItem(termo) {
  const item = document.createElement("div");
  item.className = "glossario-item";
  item.dataset.termo = paGlossarioNormalizar(termo.termo);

  const convite =
    PA_GLOSSARIO_CONVITES[
      paGlossarioHash(termo.termo) % PA_GLOSSARIO_CONVITES.length
    ];

  const corpo = termo.aberto
    ? `<p class="glossario-item-definicao">${termo.definicao}</p>`
    : `<p class="glossario-item-convite">${convite} <a href="${PA_GLOSSARIO_LOGIN_URL}">Acessar</a></p>`;

  item.innerHTML = `
    <p class="glossario-item-termo">${termo.termo}</p>
    ${corpo}
  `;
  return item;
}

function paGlossarioRenderLista(termos) {
  const container = document.getElementById("glossario-lista");
  if (!container) return;

  container.innerHTML = "";

  const grupos = new Map();
  termos.forEach((t) => {
    if (!grupos.has(t.letra)) grupos.set(t.letra, []);
    grupos.get(t.letra).push(t);
  });

  const letrasOrdenadas = [...grupos.keys()].sort();

  letrasOrdenadas.forEach((letra) => {
    const grupo = document.createElement("div");
    grupo.className = "glossario-letra-grupo";
    grupo.id = `letra-${letra}`;

    const titulo = document.createElement("h2");
    titulo.className = "glossario-letra-titulo";
    titulo.textContent = letra;
    grupo.appendChild(titulo);

    const lista = document.createElement("div");
    lista.className = "glossario-lista";
    grupos.get(letra).forEach((termo) => {
      lista.appendChild(paGlossarioCriarItem(termo));
    });
    grupo.appendChild(lista);

    container.appendChild(grupo);
  });

  paGlossarioRenderAlfabeto(new Set(letrasOrdenadas));

  if (!termos.length) {
    container.innerHTML =
      '<p class="glossario-vazio">Não encontramos nenhum termo com essa busca. Tenta outra palavra.</p>';
  }
}

function paGlossarioInit() {
  const dados = paGlossarioMontarDados();
  if (!dados.length) return;

  paGlossarioRenderLista(dados);

  const campoBusca = document.getElementById("glossario-busca");
  if (!campoBusca) return;

  campoBusca.addEventListener("input", () => {
    const consulta = paGlossarioNormalizar(campoBusca.value.trim());
    const filtrados = consulta
      ? dados.filter((t) => paGlossarioNormalizar(t.termo).includes(consulta))
      : dados;
    paGlossarioRenderLista(filtrados);
  });
}
