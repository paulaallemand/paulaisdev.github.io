/**
 * Bilíngue PT/EN. Cada texto traduzível no HTML usa data-i18n="chave"
 * (textContent) ou data-i18n-html="chave" (innerHTML, para quebras/ênfase).
 * A bandeira na navbar mostra o idioma de DESTINO (US quando em PT, BR quando em EN).
 */
const TRANSLATIONS = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.expertise": "Atuação",
    "nav.feedbacks": "Feedbacks",
    "nav.talks": "Palestras",
    "lang.toggle": "Ver em inglês",

    "hero.greeting": "Olá, eu sou",
    "hero.subtitle": "Engenheira de Software · Educadora · Finanças &amp; Dados",
    "hero.cta.projects": "Ver projetos",
    "hero.cta.contact": "Fale comigo",

    "about.title": "Sobre mim",
    "about.descr":
      "Sou uma engenheira de software multifacetada, com base sólida em desenvolvimento back-end, design de APIs e computação em nuvem (AWS, GCP). Meu trabalho integra tecnologias como Java, Spring Boot e Python. Apaixonada por ensinar, contribuo com programas como {reprograma} e Minas Programam, formando novos talentos da tecnologia — sempre com foco em soluções robustas, seguras e escaláveis.<br /><br />Acredito no poder da tecnologia para transformar: movida por propósito, alimentada pelo aprendizado e comprometida em construir soluções de impacto para um amanhã melhor.",
    "about.cv": "Baixar CV",
    "skill.backend": "Back-end",
    "skill.teaching": "Ensino &amp; Mentoria",
    "skill.data": "Dados",
    "skill.frontend": "Front-end",

    "expertise.title": "No que eu atuo",
    "expertise.subtitle": "Três frentes que se complementam.",
    "expertise.eng.title": "Engenharia de Software",
    "expertise.eng.desc":
      "Back-end, design de APIs e nuvem (AWS, GCP) com Java, Spring Boot, Node.js e Python — soluções robustas, seguras e escaláveis.",
    "expertise.edu.title": "Educação &amp; Mentoria",
    "expertise.edu.desc":
      "Professora e mentora no {reprograma}, Minas Programam e Tera. Centenas de pessoas formadas, com palestras Brasil afora.",
    "expertise.fin.title": "Finanças &amp; Dados",
    "expertise.fin.desc":
      "Experiência no setor financeiro (BV, Itaú) construindo plataformas e fluxos de dados orientados a produto e impacto.",

    "chips.label": "Comunidades &amp; programas:",

    "feedbacks.title": "O que dizem quem passou pelas minhas aulas",
    "feedbacks.subtitle":
      "Mensagens reais que recebi no chat ao final das aulas. 💬",
    "feedbacks.story.title": "Educação é o que me move.",
    "feedbacks.story.body":
      "Antes da tecnologia, fui doula e estudei obstetrícia. Aprendi cedo que escuta ativa e comunicação clara mudam a experiência de alguém — e foi exatamente isso que carreguei comigo quando migrei para o desenvolvimento de software.<br /><br />Ensinar, pra mim, é abrir portas. Cada turma no {reprograma}, no Minas Programam e na Tera é uma chance de mostrar que tecnologia é para todo mundo. As mensagens ao lado são reais — foi assim que me despedi de tantas aulas.",
    "feedbacks.story.sign": "— Paula, professora e mentora há mais de 5 anos",
    "feedbacks.window": "Aula ao vivo · {reprograma}",
    "feedbacks.replay": "Reproduzir o chat novamente",

    "talks.title": "Palestras &amp; vivências",
    "talks.subtitle": "Um pouco da minha trajetória em eventos e comunidades.",

    "projects.title": "Projetos",
    "projects.trilha.title": "Trilha",
    "projects.trilha.desc": "Plataforma modular de microaprendizagem (Expo / React Native).",
    "projects.fin.title": "Plataforma Financeira",
    "projects.fin.desc": "Back-end e fluxos de dados para produtos do setor financeiro.",
    "projects.bv.title": "Baixada Vacinada",
    "projects.bv.desc": "Projeto de dados e impacto social acompanhando indicadores de saúde.",
    "projects.travel.title": "Travel Mapper",
    "projects.travel.desc": "Gerador de roteiros de viagem com IA (Python / LangChain).",
    "projects.cta": "Ver no GitHub",

    "brands.title": "Empresas e organizações com quem trabalhei",

    "footer.cta": "Bora construir algo incrível?",
    "footer.contact": "Fale comigo",
    "footer.rights": "Feito com café e código por Paula Allemand.",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.expertise": "Expertise",
    "nav.feedbacks": "Feedback",
    "nav.talks": "Talks",
    "lang.toggle": "View in Portuguese",

    "hero.greeting": "Hello, I am",
    "hero.subtitle": "Software Engineer · Educator · Finance &amp; Data",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",

    "about.title": "About me",
    "about.descr":
      "I am a versatile software engineer with a solid foundation in backend development, API design, and cloud computing (AWS, GCP). My work integrates technologies like Java, Spring Boot, and Python. Passionate about teaching, I contribute to programs like {reprograma} and Minas Programam, empowering new tech talent — always focused on robust, secure, and scalable solutions.<br /><br />I believe in the power of technology to transform: driven by purpose, fueled by learning, and committed to building impactful solutions for a better tomorrow.",
    "about.cv": "Download CV",
    "skill.backend": "Backend",
    "skill.teaching": "Teaching &amp; Mentoring",
    "skill.data": "Data",
    "skill.frontend": "Frontend",

    "expertise.title": "What I do",
    "expertise.subtitle": "Three complementary fronts.",
    "expertise.eng.title": "Software Engineering",
    "expertise.eng.desc":
      "Backend, API design, and cloud (AWS, GCP) with Java, Spring Boot, Node.js, and Python — robust, secure, and scalable solutions.",
    "expertise.edu.title": "Education &amp; Mentoring",
    "expertise.edu.desc":
      "Teacher and mentor at {reprograma}, Minas Programam, and Tera. Hundreds of people trained, with talks across Brazil.",
    "expertise.fin.title": "Finance &amp; Data",
    "expertise.fin.desc":
      "Experience in the financial sector (BV, Itaú) building platforms and data flows driven by product and impact.",

    "chips.label": "Communities &amp; programs:",

    "feedbacks.title": "What the people I've taught say",
    "feedbacks.subtitle":
      "Real messages I received in the chat at the end of my classes. 💬",
    "feedbacks.story.title": "Education is what moves me.",
    "feedbacks.story.body":
      "Before tech, I was a doula and studied obstetrics. I learned early that active listening and clear communication change someone's experience — and that's exactly what I carried with me when I moved into software development.<br /><br />Teaching, to me, is about opening doors. Every cohort at {reprograma}, Minas Programam, and Tera is a chance to show that technology is for everyone. The messages beside this are real — that's how I said goodbye to so many classes.",
    "feedbacks.story.sign": "— Paula, teacher and mentor for 5+ years",
    "feedbacks.window": "Live class · {reprograma}",
    "feedbacks.replay": "Replay the chat",

    "talks.title": "Talks &amp; experiences",
    "talks.subtitle": "A glimpse of my journey across events and communities.",

    "projects.title": "Projects",
    "projects.trilha.title": "Trilha",
    "projects.trilha.desc": "Modular micro-learning platform (Expo / React Native).",
    "projects.fin.title": "Finance Platform",
    "projects.fin.desc": "Backend and data flows for financial-sector products.",
    "projects.bv.title": "Baixada Vacinada",
    "projects.bv.desc": "Data and social-impact project tracking public-health indicators.",
    "projects.travel.title": "Travel Mapper",
    "projects.travel.desc": "AI travel-itinerary generator (Python / LangChain).",
    "projects.cta": "View on GitHub",

    "brands.title": "Companies & organizations I've worked with",

    "footer.cta": "Shall we build something together?",
    "footer.contact": "Get in touch",
    "footer.rights": "Made with coffee and code by Paula Allemand.",
  },
};

function detectLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "pt" || stored === "en") return stored;
  return (navigator.language || "pt").toLowerCase().startsWith("en") ? "en" : "pt";
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = dict[el.getAttribute("data-i18n")];
    if (val != null) el.innerHTML = val; // innerHTML para suportar entidades (&amp;, ·)
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const val = dict[el.getAttribute("data-i18n-html")];
    if (val != null) el.innerHTML = val;
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  // Bandeira mostra o idioma de DESTINO
  const target = lang === "pt" ? "en" : "pt";
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    const img = btn.querySelector("img");
    img.src = target === "en" ? "img/flags/us.svg" : "img/flags/br.svg";
    img.alt = dict["lang.toggle"];
    btn.setAttribute("aria-label", dict["lang.toggle"]);
    btn.dataset.lang = lang;
  }

  localStorage.setItem("lang", lang);
}

function toggleLang() {
  const current = document.documentElement.lang.startsWith("pt") ? "pt" : "en";
  applyLang(current === "pt" ? "en" : "pt");
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(detectLang());
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", toggleLang);
});
