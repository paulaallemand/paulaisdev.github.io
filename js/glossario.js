/**
 * Renderiza o Glossário Todas em Tech (training/glossario).
 * Semana 1 fica aberta pra qualquer pessoa; semanas 2 a 8 só mostram a
 * definição pra quem está logada (via paTrainingGetSession, de js/auth.js).
 * Cards travados mostram só um cadeado, sem expor quantos termos faltam.
 */

const PA_GLOSSARIO_SEMANA_ABERTA = 1;

function paGlossarioAgruparPorSemana(termos) {
  const semanas = new Map();
  termos.forEach((t) => {
    if (!semanas.has(t.semana)) semanas.set(t.semana, []);
    semanas.get(t.semana).push(t);
  });
  return [...semanas.entries()].sort((a, b) => a[0] - b[0]);
}

function paGlossarioCriarCard(termo, aberto) {
  const card = document.createElement("div");
  card.className = "glossario-card" + (aberto ? "" : " is-locked");

  if (aberto) {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <div class="glossario-card-inner">
        <div class="glossario-card-face glossario-card-front">
          <span class="glossario-card-termo">${termo.termo}</span>
        </div>
        <div class="glossario-card-face glossario-card-back">
          <span class="glossario-card-definicao">${termo.definicao}</span>
        </div>
      </div>
    `;

    const flip = () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");
    };

    card.addEventListener("click", flip);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flip();
      }
    });
  } else {
    card.innerHTML = `
      <div class="glossario-card-inner">
        <div class="glossario-card-face glossario-card-front glossario-card-locked-face">
          <span class="glossario-card-lock" aria-hidden="true">&#128274;</span>
        </div>
      </div>
    `;
    card.setAttribute("aria-label", "Termo bloqueado, entre para desbloquear");
  }

  return card;
}

function paGlossarioRender() {
  const container = document.getElementById("glossario-semanas");
  if (!container || typeof PA_GLOSSARIO_TERMOS === "undefined") return;

  const logada = !!paTrainingGetSession();
  const grupos = paGlossarioAgruparPorSemana(PA_GLOSSARIO_TERMOS);

  container.innerHTML = "";

  grupos.forEach(([semana, termos]) => {
    const aberta = semana === PA_GLOSSARIO_SEMANA_ABERTA || logada;

    const bloco = document.createElement("div");
    bloco.className = "glossario-semana";

    const titulo = document.createElement("h2");
    titulo.className = "title glossario-semana-title";
    titulo.textContent = `Semana ${semana}`;
    if (!aberta) {
      const badge = document.createElement("span");
      badge.className = "glossario-semana-badge";
      badge.textContent = "Login";
      titulo.appendChild(badge);
    }
    bloco.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "glossario-grid";
    termos.forEach((termo) => {
      grid.appendChild(paGlossarioCriarCard(termo, aberta));
    });
    bloco.appendChild(grid);

    if (!aberta) {
      bloco.addEventListener("click", (event) => {
        const card = event.target.closest(".glossario-card.is-locked");
        if (!card) return;
        window.location.href =
          "../login/index.html?next=/training/glossario/index.html";
      });
    }

    container.appendChild(bloco);
  });
}
