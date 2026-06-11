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

// AOS animations
AOS.init({ once: true });

/* ============================================================
   Chat de feedbacks estilo Zoom — animação de mensagens
   ============================================================ */
(function initFeedbackChat() {
  const chat = document.getElementById("zoom-chat");
  const replayBtn = document.getElementById("chat-replay");
  const windowEl = document.querySelector(".zoom-window");
  if (!chat || typeof FEEDBACKS === "undefined") return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  let timers = [];
  let running = false;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

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
    chat.scrollTop = chat.scrollHeight;
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
    if (replayBtn) replayBtn.hidden = true;
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
    if (replayBtn) replayBtn.hidden = false;
  }

  if (reduceMotion) {
    renderStatic();
    return;
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      clearTimers();
      running = false;
      play();
    });
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
    { threshold: 0.3 }
  );
  observer.observe(windowEl || chat);
})();
