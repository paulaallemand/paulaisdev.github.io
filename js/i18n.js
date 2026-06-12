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
    "nav.experience": "Experiência",
    "nav.feedbacks": "Feedbacks",
    "nav.talks": "Palestras",
    "nav.blog": "Blog",
    "lang.toggle": "Ver em inglês",

    "eyebrow.about": "Sobre mim",
    "eyebrow.expertise": "Atuação",
    "eyebrow.experience": "Experiência",
    "eyebrow.feedbacks": "Feedbacks",
    "eyebrow.talks": "Palestras &amp; Vivências",

    "hero.greeting": "Olá, eu sou",
    "hero.subtitle":
      "Engenheira de Software · Educadora · Finanças &amp; Dados",
    "hero.cta.projects": "Ver experiência",
    "hero.cta.contact": "Fale comigo",

    "about.title": "Sobre mim",
    "about.headline": "Movida por propósito, alimentada por aprendizado.",
    "about.descr":
      "Sou uma engenheira de software multifacetada, com base sólida em desenvolvimento back-end, design de APIs e computação em nuvem (AWS, GCP). Meu trabalho integra tecnologias como Java, Spring Boot e Python. Apaixonada por ensinar, contribuo com programas como {reprograma} e Minas Programam, formando novos talentos da tecnologia — sempre com foco em soluções robustas, seguras e escaláveis.<br /><br />Acredito no poder da tecnologia para transformar: movida por propósito, alimentada pelo aprendizado e comprometida em construir soluções de impacto para um amanhã melhor.",
    "about.cv": "Baixar CV",
    "skill.backend": "Back-end",
    "skill.teaching": "Ensino &amp; Mentoria",
    "skill.data": "Dados",
    "skill.frontend": "Front-end",

    "expertise.title": "Três frentes que se complementam.",
    "expertise.subtitle": "Três frentes que se complementam.",
    "expertise.eng.title": "Engenharia de Software",
    "expertise.eng.desc":
      "Back-end, design de APIs e nuvem (AWS, GCP) com Java, Spring Boot, Node.js e Python — soluções robustas, seguras e escaláveis.",
    "expertise.edu.title": "Educação &amp; Mentoria",
    "expertise.edu.desc":
      "Professora e mentora no {reprograma}, Minas Programam e Tera. Centenas de pessoas formadas, com palestras Brasil afora.",
    "expertise.fin.title": "Finanças &amp; Dados",
    "expertise.fin.desc":
      "Finanças, seguros e dados: experiência no BTG Pactual, Banco BV e Itaú, com formação em Inteligência Artificial Aplicada, Data & IT.",

    "chips.label": "Empresas que impactaram minha carreira:",

    "experience.title":
      "Da neurociência aos sistemas críticos do mercado financeiro.",
    "experience.subtitle":
      "Da pesquisa em neurociência aos sistemas críticos do mercado financeiro.",
    "experience.cta": "Ver trajetória completa no LinkedIn",
    "experience.past": "Antes disso",
    "exp.now.label": "Agora",
    "exp.btg.role": "Software Analyst",
    "exp.btg.desc":
      "Atuo na área de Seguros — soluções para seguradoras, resseguradoras e times de vendas — participando de todo o ciclo de sistemas críticos no setor regulado pela SUSEP. Construo aplicações que vão da emissão de apólices a resseguro e provisões técnicas, em arquitetura de microsserviços de alto volume e baixa latência, com modelagem de dados para cálculos atuariais. Faço a ponte entre requisitos regulatórios, produto e engenharia, garantindo conformidade, segurança e escalabilidade.",
    "exp.bv.role": "Engenheira de Software",
    "exp.bv.desc":
      "Prevenção a Fraudes (via Act Digital): segurança dos fluxos e dados de todas as áreas do banco, com Java, Spring Boot, GCP e AWS.",
    "exp.itau.role": "Engenheira de Software Pleno",
    "exp.itau.desc":
      "Back-end: construção de APIs do zero (Java, Spring Boot, Maven, SQL) e arquitetura BFF conectando múltiplas APIs e serviços de segurança. Manutenção de serviços em Python, Kotlin e iOS.",
    "exp.tera.role": "Expert &amp; Fullstack Developer",
    "exp.tera.desc":
      "Ensino de fullstack e back-end (lógica, algoritmos, arquitetura web, SQL/NoSQL, Node.js, web APIs e segurança) e desenvolvimento de plataformas em Vue, React, Node e Firebase — sempre com foco em acessibilidade.",
    "exp.edu.role": "Professora",
    "exp.edu.desc":
      "Formação de novas pessoas em programação — Git/GitHub, HTML/CSS, JavaScript, React, Node.js e APIs/CRUD — em programas que ampliam o acesso à tecnologia.",
    "exp.usp.role": "Iniciação Científica",
    "exp.usp.desc":
      "Onde tudo começou: pesquisa em Cronobiologia e Neurociência sobre a relação entre o sono e o desenvolvimento neurocognitivo do bebê (revisão sistemática, método PRISMA). Doula e ex-aluna de obstetrícia.",

    "featured.title": "Destaques",
    "featured.subtitle":
      "Um pouco do reconhecimento do meu trabalho como educadora.",
    "featured.link": "Ver →",
    "featured.unesco.title": "Galeria de Professores da UNESCO",
    "featured.unesco.desc":
      "Reconhecida entre educadores do mundo na galeria de professores da UNESCO.",
    "featured.google.title": "Google.org — When She Rises, We All Rise",
    "featured.google.desc":
      "Participação no vídeo do Impact Challenge for Women and Girls, do Google.org.",

    "feedbacks.title": "Educação é o que me move",
    "feedbacks.subtitle":
      "Mensagens reais que recebi no chat ao final das aulas",
    "feedbacks.story.body":
      "Antes da tecnologia, fui doula e estudei obstetrícia. Aprendi cedo que escuta ativa e comunicação clara mudam a experiência de alguém — e foi exatamente isso que carreguei comigo quando migrei para o desenvolvimento de software.<br /><br />Ensinar, pra mim, é abrir portas. Cada turma no {reprograma}, no Minas Programam e na Tera é uma chance de mostrar que tecnologia é para todo mundo. As mensagens ao lado são reais — foi assim que me despedi de tantas aulas.",
    "feedbacks.story.sign": "— Professora e mentora há 10 anos",
    "feedbacks.window": "Aula ao vivo · {reprograma}",

    "talks.title": "Palestras &amp; vivências",
    "talks.subtitle": "Um pouco da minha trajetória em eventos e comunidades.",
    "talks.tera.desc":
      "Aula aberta sobre carreira e back-end para a comunidade.",
    "talks.programaria.desc":
      "Palestra sobre mulheres e diversidade na tecnologia.",
    "talks.inovazl.desc":
      "Mentoria a times no hackathon de inovação da Zona Leste.",
    "talks.eh.desc":
      "Turma de Talentos Digitais Diversos, em parceria com o Itaú.",
    "talks.dpw.desc":
      "Imersão em produto e tecnologia com a comunidade da Tera.",
    "talks.wftech.desc":
      "Encontro de tecnologia com foco em comunidade e diversidade.",

    "projects.title": "Projetos",
    "projects.trilha.title": "Trilha",
    "projects.trilha.desc":
      "Plataforma modular de microaprendizagem (Expo / React Native).",
    "projects.fin.title": "Plataforma Financeira",
    "projects.fin.desc":
      "Back-end e fluxos de dados para produtos do setor financeiro.",
    "projects.bv.title": "Baixada Vacinada",
    "projects.bv.desc":
      "Projeto de dados e impacto social acompanhando indicadores de saúde.",
    "projects.travel.title": "Travel Mapper",
    "projects.travel.desc":
      "Gerador de roteiros de viagem com IA (Python / LangChain).",
    "projects.cta": "Ver no GitHub",

    "brands.title": "Marcas que transformaram minha carreira",
    "brands.subtitle": "Lugares onde aprendi, ensinei e cresci.",
    "brands.unesco": "Galeria global de professores",
    "brands.google": "Impact Challenge for Women",
    "brands.reprograma": "Mulheres em tecnologia",
    "brands.itau": "APIs e BFF no banco",
    "brands.tera": "Expert & desenvolvimento",
    "brands.estacaohack": "Talentos Digitais Diversos",
    "brands.usp": "Iniciação científica",
    "brands.jsconf": "Comunidade JavaScript",
    "brands.programaria": "Diversidade na tech",
    "brands.minas": "Git & GitHub para todas",
    "brands.bv": "Prevenção a fraudes",
    "brands.changeorg": "Tecnologia para impacto",
    "brands.habits": "Produto & dados",
    "brands.mckinsey": "Mentoria & estratégia",

    "footer.cta": "Bora construir algo incrível?",
    "footer.contact": "Fale comigo",
    "a11y.skip": "Pular para o conteúdo",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.expertise": "Expertise",
    "nav.experience": "Experience",
    "nav.feedbacks": "Feedback",
    "nav.talks": "Talks",
    "nav.blog": "Blog",
    "lang.toggle": "View in Portuguese",

    "eyebrow.about": "About me",
    "eyebrow.expertise": "Expertise",
    "eyebrow.experience": "Experience",
    "eyebrow.feedbacks": "Feedbacks",
    "eyebrow.talks": "Talks &amp; Experiences",

    "hero.greeting": "Hello, I am",
    "hero.subtitle": "Software Engineer · Educator · Finance &amp; Data",
    "hero.cta.projects": "View experience",
    "hero.cta.contact": "Get in touch",

    "about.title": "About me",
    "about.headline": "Driven by purpose, fueled by learning.",
    "about.descr":
      "I am a versatile software engineer with a solid foundation in backend development, API design, and cloud computing (AWS, GCP). My work integrates technologies like Java, Spring Boot, and Python. Passionate about teaching, I contribute to programs like {reprograma} and Minas Programam, empowering new tech talent — always focused on robust, secure, and scalable solutions.<br /><br />I believe in the power of technology to transform: driven by purpose, fueled by learning, and committed to building impactful solutions for a better tomorrow.",
    "about.cv": "Download CV",
    "skill.backend": "Backend",
    "skill.teaching": "Teaching &amp; Mentoring",
    "skill.data": "Data",
    "skill.frontend": "Frontend",

    "expertise.title": "Three complementary fronts.",
    "expertise.subtitle": "Three complementary fronts.",
    "expertise.eng.title": "Software Engineering",
    "expertise.eng.desc":
      "Backend, API design, and cloud (AWS, GCP) with Java, Spring Boot, Node.js, and Python — robust, secure, and scalable solutions.",
    "expertise.edu.title": "Education &amp; Mentoring",
    "expertise.edu.desc":
      "Teacher and mentor at {reprograma}, Minas Programam, and Tera. Hundreds of people trained, with talks across Brazil.",
    "expertise.fin.title": "Finance &amp; Data",
    "expertise.fin.desc":
      "Finance, insurance, and data: experience at BTG Pactual, Banco BV, and Itaú, with a degree in Applied Artificial Intelligence, Data & IT.",

    "chips.label": "Where I've worked:",

    "experience.title":
      "From neuroscience to mission-critical financial systems.",
    "experience.subtitle":
      "From neuroscience research to mission-critical financial systems.",
    "experience.cta": "See full career on LinkedIn",
    "experience.past": "Before that",
    "exp.now.label": "Now",
    "exp.btg.role": "Software Analyst",
    "exp.btg.desc":
      "I work in Insurance — solutions for insurers, reinsurers, and sales teams — across the full lifecycle of mission-critical systems in the SUSEP-regulated sector. I build applications spanning policy issuance, reinsurance, and technical reserves, in high-volume, low-latency microservice architecture, with data modeling for actuarial calculations. I bridge regulatory requirements, product, and engineering — ensuring compliance, security, and scalability.",
    "exp.bv.role": "Software Engineer",
    "exp.bv.desc":
      "Fraud Prevention (via Act Digital): security of flows and data across all areas of the bank, with Java, Spring Boot, GCP, and AWS.",
    "exp.itau.role": "Software Engineer (Mid)",
    "exp.itau.desc":
      "Backend: building APIs from scratch (Java, Spring Boot, Maven, SQL) and BFF architecture connecting multiple APIs and security services. Service maintenance in Python, Kotlin, and iOS.",
    "exp.tera.role": "Expert &amp; Fullstack Developer",
    "exp.tera.desc":
      "Teaching fullstack and backend (logic, algorithms, web architecture, SQL/NoSQL, Node.js, web APIs, and security) and building platforms in Vue, React, Node, and Firebase — always with a focus on accessibility.",
    "exp.edu.role": "Teacher",
    "exp.edu.desc":
      "Training new people in programming — Git/GitHub, HTML/CSS, JavaScript, React, Node.js, and APIs/CRUD — in programs that widen access to tech.",
    "exp.usp.role": "Research Scholarship",
    "exp.usp.desc":
      "Where it all began: Chronobiology and Neuroscience research on the relationship between sleep and infant neurocognitive development (systematic review, PRISMA method). Doula and former obstetrics student.",

    "featured.title": "Featured",
    "featured.subtitle": "A bit of the recognition of my work as an educator.",
    "featured.link": "View →",
    "featured.unesco.title": "UNESCO Teachers Photo Gallery",
    "featured.unesco.desc":
      "Featured among educators worldwide in UNESCO's teachers photo gallery.",
    "featured.google.title": "Google.org — When She Rises, We All Rise",
    "featured.google.desc":
      "Featured in Google.org's Impact Challenge for Women and Girls video.",

    "feedbacks.title": "Education is what moves me",
    "feedbacks.subtitle":
      "Real messages I received in the chat at the end of my classes",
    "feedbacks.story.body":
      "Before tech, I was a doula and studied obstetrics. I learned early that active listening and clear communication change someone's experience — and that's exactly what I carried with me when I moved into software development.<br /><br />Teaching, to me, is about opening doors. Every cohort at {reprograma}, Minas Programam, and Tera is a chance to show that technology is for everyone. The messages beside this are real — that's how I said goodbye to so many classes.",
    "feedbacks.story.sign": "— Paula, teacher and mentor for 5+ years",
    "feedbacks.window": "Live class · {reprograma}",

    "talks.title": "Talks &amp; experiences",
    "talks.subtitle": "A glimpse of my journey across events and communities.",
    "talks.tera.desc": "Open class on careers and backend for the community.",
    "talks.programaria.desc": "Talk on women and diversity in technology.",
    "talks.inovazl.desc":
      "Mentoring teams at the East Zone innovation hackathon.",
    "talks.eh.desc":
      "Diverse Digital Talents cohort, in partnership with Itaú.",
    "talks.dpw.desc":
      "A product and technology immersion with the Tera community.",
    "talks.wftech.desc": "A tech meetup focused on community and diversity.",

    "projects.title": "Projects",
    "projects.trilha.title": "Trilha",
    "projects.trilha.desc":
      "Modular micro-learning platform (Expo / React Native).",
    "projects.fin.title": "Finance Platform",
    "projects.fin.desc":
      "Backend and data flows for financial-sector products.",
    "projects.bv.title": "Baixada Vacinada",
    "projects.bv.desc":
      "Data and social-impact project tracking public-health indicators.",
    "projects.travel.title": "Travel Mapper",
    "projects.travel.desc":
      "AI travel-itinerary generator (Python / LangChain).",
    "projects.cta": "View on GitHub",

    "brands.title": "Brands that transformed my career",
    "brands.subtitle": "Places where I learned, taught, and grew.",
    "brands.unesco": "Global teachers gallery",
    "brands.google": "Impact Challenge for Women",
    "brands.reprograma": "Women in technology",
    "brands.itau": "APIs and BFF at the bank",
    "brands.tera": "Expert & development",
    "brands.estacaohack": "Diverse Digital Talents",
    "brands.usp": "Research scholarship",
    "brands.jsconf": "JavaScript community",
    "brands.programaria": "Diversity in tech",
    "brands.minas": "Git & GitHub for all",
    "brands.bv": "Fraud prevention",
    "brands.changeorg": "Tech for impact",
    "brands.habits": "Product & data",
    "brands.mckinsey": "Mentoring & strategy",

    "footer.cta": "Shall we build something together?",
    "footer.contact": "Get in touch",
    "footer.rights": "Made with coffee and code by Paula Allemand.",

    "a11y.skip": "Skip to main content",
  },
};

function detectLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "pt" || stored === "en") return stored;
  return (navigator.language || "pt").toLowerCase().startsWith("en")
    ? "en"
    : "pt";
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
