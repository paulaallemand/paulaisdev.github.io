const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

// Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

// Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

// Fecha o menu mobile ao clicar num link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navBtnImg.src = "img/icons/open.svg";
  });
});

// Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  const goToTop = document.querySelector("#goToTop");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});


/* ============================================================
   Experiência — abas de ano "Antes disso"
   ============================================================ */
(function initExperienceTabs() {
  const tabs = Array.from(document.querySelectorAll(".exp-tab"));
  if (!tabs.length) return;

  function activate(tab) {
    tabs.forEach((t) => {
      const isActive = t === tab;
      t.setAttribute("aria-selected", String(isActive));
      t.setAttribute("tabindex", isActive ? "0" : "-1");
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !isActive;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (e) => {
      const idx = tabs.indexOf(e.currentTarget);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        activate(tabs[(idx + 1) % tabs.length]);
        tabs[(idx + 1) % tabs.length].focus();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        activate(tabs[(idx - 1 + tabs.length) % tabs.length]);
        tabs[(idx - 1 + tabs.length) % tabs.length].focus();
      }
      if (e.key === "Home") {
        e.preventDefault();
        activate(tabs[0]);
        tabs[0].focus();
      }
      if (e.key === "End") {
        e.preventDefault();
        activate(tabs[tabs.length - 1]);
        tabs[tabs.length - 1].focus();
      }
    });
  });
})();

/* ============================================================
   Chat de feedbacks estilo Zoom — animação de mensagens
   ============================================================ */
(function initFeedbackChat() {
  const chat = document.getElementById("zoom-chat");
  const windowEl = document.querySelector(".zoom-window");
  if (!chat || typeof FEEDBACKS === "undefined") return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let timers = [];
  let running = false;

  // Controle do auto-scroll: só "gruda" no fim se o usuário não rolou para
  // cima e não está segurando o dedo dentro do chat (mobile).
  let stickToBottom = true;
  let holding = false;
  const NEAR_BOTTOM = 24; // px de tolerância para considerar "no fim"

  function isNearBottom() {
    return chat.scrollHeight - chat.scrollTop - chat.clientHeight < NEAR_BOTTOM;
  }

  // Quando o usuário rola manualmente, decide se religa ou desliga o stick.
  chat.addEventListener("scroll", () => {
    if (holding) return; // durante o toque, a posição é reavaliada no release
    stickToBottom = isNearBottom();
  });

  // Mobile: segurar o dedo dentro do chat pausa o auto-scroll.
  function pause() {
    holding = true;
    stickToBottom = false;
  }
  function release() {
    holding = false;
    stickToBottom = isNearBottom();
  }
  chat.addEventListener("pointerdown", pause);
  chat.addEventListener("touchstart", pause, { passive: true });
  window.addEventListener("pointerup", release);
  window.addEventListener("touchend", release);
  window.addEventListener("touchcancel", release);

  function wait(ms) {
    return new Promise((resolve) => timers.push(setTimeout(resolve, ms)));
  }

  function avatarEl(fb, idx) {
    const a = document.createElement("div");
    a.className = "chat-avatar";
    a.style.background = AVATAR_COLORS[idx % AVATAR_COLORS.length];
    a.textContent = initials(fb.name);
    return a;
  }

  function messageEl(fb, idx) {
    const msg = document.createElement("div");
    msg.className = "chat-msg";
    msg.appendChild(avatarEl(fb, idx));

    const body = document.createElement("div");
    body.className = "chat-body";
    body.innerHTML =
      '<div class="chat-meta">' +
      '<span class="chat-name"></span>' +
      '<span class="chat-time"></span>' +
      "</div>" +
      '<div class="chat-text"></div>';
    body.querySelector(".chat-name").textContent = fb.name;
    body.querySelector(".chat-time").textContent = fb.time;
    body.querySelector(".chat-text").textContent = fb.text;
    msg.appendChild(body);
    return msg;
  }

  function typingEl(fb, idx) {
    const t = document.createElement("div");
    t.className = "chat-msg chat-typing show";
    t.appendChild(avatarEl(fb, idx));
    const body = document.createElement("div");
    body.className = "chat-body";
    body.innerHTML =
      '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    t.appendChild(body);
    return t;
  }

  function scrollDown() {
    if (stickToBottom) chat.scrollTop = chat.scrollHeight;
  }

  function renderStatic() {
    chat.innerHTML = "";
    FEEDBACKS.forEach((fb, idx) => {
      const m = messageEl(fb, idx);
      m.classList.add("show");
      chat.appendChild(m);
    });
  }

  async function play() {
    if (running) return;
    running = true;
    chat.innerHTML = "";

    for (let i = 0; i < FEEDBACKS.length; i++) {
      const fb = FEEDBACKS[i];
      const typing = typingEl(fb, i);
      chat.appendChild(typing);
      scrollDown();
      await wait(1000); // indicador "digitando…" ~1s

      typing.remove();
      const msg = messageEl(fb, i);
      chat.appendChild(msg);
      scrollDown();
      // força reflow antes de animar
      requestAnimationFrame(() => msg.classList.add("show"));
      await wait(400); // pausa curta antes da próxima mensagem
    }

    running = false;
  }

  if (reduceMotion) {
    renderStatic();
    return;
  }

  // Dispara a animação quando a janela do chat entra na viewport
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          play();
          obs.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  observer.observe(windowEl || chat);
})();

/* ============================================================
   Palestras — carousel horizontal de fotos (split layout)
   ============================================================ */
(function initTalksCarousel() {
  const track = document.getElementById("talks-track");
  const right = track && track.closest(".carousel-right");
  if (!track || !right) return;

  const slides = Array.from(track.querySelectorAll(".carousel-slide"));
  const dots = Array.from(
    document.querySelectorAll(".carousel-dots .carousel-dot"),
  );
  const btnPrev = right.querySelector(".carousel-prev");
  const btnNext = right.querySelector(".carousel-next");
  const total = slides.length; /* 8: 6 fotos + 2 badges (UNESCO, Google.org) */
  let current = 0;
  let autoTimer = null;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) {
    track.style.transition = "none";
  }

  /* Calcula o translateX para posicionar o slide `i` alinhado à esquerda */
  function getOffset(i) {
    const slideW = slides[0].offsetWidth;
    const gapPx = parseFloat(getComputedStyle(track).gap) || 16;
    const trackPad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    return -(i * (slideW + gapPx) - trackPad);
  }

  function goTo(i) {
    current = (i + total) % total;

    track.style.transform = `translateX(${getOffset(current)}px)`;

    slides.forEach((s, idx) => {
      const active = idx === current;
      s.toggleAttribute("data-active", active);
      s.setAttribute("aria-hidden", String(!active));
    });

    dots.forEach((d, idx) => {
      const active = idx === current;
      d.setAttribute("aria-selected", String(active));
    });
  }

  function startAuto() {
    if (reduceMotion) return;
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  // Setas
  btnPrev &&
    btnPrev.addEventListener("click", () => {
      goTo(current - 1);
      startAuto();
    });
  btnNext &&
    btnNext.addEventListener("click", () => {
      goTo(current + 1);
      startAuto();
    });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAuto();
    });
  });

  // Teclado (← →) quando foco dentro do bloco direito
  right.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(current - 1);
      startAuto();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(current + 1);
      startAuto();
    }
  });

  // Pausa ao hover / foco
  right.addEventListener("mouseenter", stopAuto);
  right.addEventListener("mouseleave", startAuto);
  right.addEventListener("focusin", stopAuto);
  right.addEventListener("focusout", startAuto);

  // Drag (mouse + touch via Pointer Events)
  let dragStartX = 0;
  let isDragging = false;

  right.addEventListener("pointerdown", (e) => {
    dragStartX = e.clientX;
    isDragging = true;
    right.setPointerCapture(e.pointerId);
    stopAuto();
  });

  right.addEventListener("pointerup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? goTo(current + 1) : goTo(current - 1);
    }
    startAuto();
  });

  right.addEventListener("pointercancel", () => {
    isDragging = false;
    startAuto();
  });

  // Recalcula offset ao redimensionar
  window.addEventListener("resize", () => goTo(current), { passive: true });

  // Inicializa
  goTo(0);
  startAuto();
})();
