/**
 * Bilíngue PT/EN. Cada texto traduzível no HTML usa data-i18n="chave"
 * (textContent) ou data-i18n-html="chave" (innerHTML, para quebras/ênfase).
 * A bandeira na navbar mostra o idioma de DESTINO (US quando em PT, BR quando em EN).
 */
const TRANSLATIONS = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.expertise": "Atuação",
    "nav.feedbacks": "Feedbacks",
    "nav.talks": "Palestras",
    "nav.blog": "Blog",
    "lang.toggle": "Ver em inglês",

    "eyebrow.about": "Sobre mim",
    "eyebrow.expertise": "Atuação",
    "eyebrow.experience": "Experiência",
    "eyebrow.companies": "Empresas que impactaram minha carreira",
    "eyebrow.feedbacks": "Feedbacks",
    "eyebrow.talks": "Palestras &amp; Vivências",

    "hero.greeting": "Olá, eu sou",
    "hero.subtitle": "Engenharia de Software · Tecnologia, Finanças e Educação",
    "hero.cta.projects": "Ver experiência",
    "hero.cta.contact": "Fale comigo",

    "about.title": "Sobre mim",
    "about.headline.quote":
      "Tudo que você toca, você transforma. Tudo que você transforma, transforma você.",
    "about.headline.author": "— Octavia Butler",
    "about.descr":
      "Acredito no poder da tecnologia para transformar: movida por propósito, alimentada pelo aprendizado e comprometida em construir soluções de impacto para um amanhã melhor.",
    "trajectory.intro":
      "Sou uma engenheira de software multifacetada, com base sólida em desenvolvimento back-end, design de APIs e computação em nuvem (AWS, GCP). Meu trabalho integra tecnologias como Java, Spring Boot e Python. Apaixonada por ensinar, contribuo com programas como {reprograma} e Minas Programam, formando novos talentos da tecnologia — sempre com foco em soluções robustas, seguras e escaláveis.",
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

    "experience.title": "Da neurociência a sistemas do mercado financeiro",
    "experience.subtitle":
      "Da pesquisa em neurociência aos sistemas críticos do mercado financeiro.",
    "experience.cta": "Ver trajetória completa",
    "experience.past": "Antes disso",
    "experience.logos.title": "Empresas &amp; comunidades",
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

    "feedbacks.title":
      "Não acredite só em mim. Educação é o que me move e, por isso, ensinar pra mim é acreditar que qualquer um pode alcançar qualquer coisa. Essas mensagens recebi ao fim de algumas aulas que dei",
    "feedbacks.window": "Aula ao vivo",

    "talks.title": "Palestras &amp; vivências",
    "talks.subtitle": "Um pouco da minha trajetória em eventos e comunidades.",
    "talks.split.title": "O que me trouxe até aqui",
    "talks.split.narrative":
      "Desde 2018, atuei como educadora em iniciativas como {reprograma}, Minas Programam, Tera e Estação Hack, somando cerca de 100 turmas, entre 4 e 5 mil alunos impactados e mais de 400 aulas ministradas. Ensinar tecnologia — especialmente para pessoas em transição de carreira — me transformou: aprendi a traduzir complexidade e a entender que educação é presença, responsabilidade e construção de autonomia.",
    "talks.badge.students": "Alunos impactados",
    "talks.badge.classes": "Aulas ministradas",
    "talks.tera.desc":
      "Roda de conversa sobre times interdisciplinares para a comunidade da Tera.",
    "talks.programaria.desc": "Palestra sobre acessibilidade web.",
    "talks.inovazl.desc":
      "Apresentação de projeto em parceira com a Change.org no Inova Zona Leste.",
    "talks.eh.desc": "Turma {reprograma} em parceria com Accenture",
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

    "nav.consultoria": "Consultoria",

    "trainingtab.label": "Trilhas",
    "trainingtab.eyebrow": "Novo",
    "trainingtab.heading": "O conteúdo dos vídeos, organizado em trilha.",
    "trainingtab.cta": "Ver a plataforma de training →",

    "consultoria.hero.eyebrow": "Consultoria",
    "consultoria.hero.heading": "Menos tarefa manual, mais tempo pra você.",
    "consultoria.hero.subtitle":
      "Pra quem quer usar IA e automatizar tarefas no trabalho ou na vida, sem precisar dominar tecnologia pra isso.",
    "consultoria.cta.agendar": "Quero mais tempo",
    "consultoria.cta.conversa": "Quero minha conversa",
    "consultoria.cta.sending": "Enviando...",

    "consultoria.fit.yes.title": "Isso é pra você se...",
    "consultoria.fit.yes.item1":
      "Você ouve falar de IA o dia inteiro e não sabe por onde começar, na prática, no seu trabalho.",
    "consultoria.fit.yes.item2":
      "Tem tarefas repetitivas no seu dia a dia e desconfia que dá pra automatizar, mas não sabe como.",
    "consultoria.fit.yes.item3":
      "Já tentou usar ChatGPT ou outra IA sozinha, travou, e não sabe se está usando do jeito certo.",
    "consultoria.fit.no.title": "Isso não é pra você se...",
    "consultoria.fit.no.item1":
      "Você procura uma resposta pronta e genérica, que sirva pra qualquer pessoa. Aqui a gente parte do seu caso, não de um modelo padrão.",
    "consultoria.fit.no.item2":
      "Você prefere que alguém resolva tudo por você, sem participar. A consultoria funciona melhor quando a gente olha sua rotina junto.",
    "consultoria.fit.no.item3":
      "Você está procurando um curso longo ou uma trilha de estudo. Isso aqui é uma conversa focada no seu caso, não um treinamento extenso.",

    "consultoria.how.eyebrow": "Como funciona",
    "consultoria.how.step1": "Você preenche seu nome e e-mail aqui embaixo.",
    "consultoria.how.step2":
      "Chega um e-mail com um roteiro rápido pra você pensar antes da nossa conversa — e o link pra agendar um horário.",
    "consultoria.how.step3": "A gente conversa sobre o seu caso, no seu ritmo.",
    "consultoria.mockup.label.nome": "Nome",
    "consultoria.mockup.label.email": "E-mail",
    "consultoria.mockup.success":
      "Prontinho! Confere sua caixa de entrada (e o spam, por garantia).",

    "consultoria.form.title": "Vamos conversar?",
    "consultoria.form.lead":
      "Deixa seu nome e e-mail que eu te mando os próximos passos.",
    "consultoria.form.label.nome": "Nome",
    "consultoria.form.label.email": "E-mail",
    "consultoria.form.consent1":
      'Aceito receber e-mails sobre a consultoria. Veja a <a href="privacidade.html" target="_blank">política de privacidade</a>.',
    "consultoria.form.consent2":
      "Quero também saber de novos conteúdos e oportunidades gratuitas.",
    "consultoria.form.trust":
      "Quem te atende: Paula Allemand, engenheira de software com experiência em educação e tecnologia.",
    "consultoria.form.msgok":
      "Prontinho! Confere sua caixa de entrada (e o spam, por garantia) — te mandei um roteiro rápido de preparo e o link pra agendar.",
    "consultoria.form.msgerro":
      "Algo deu errado no envio. Tenta de novo em instantes, ou me chama direto.",

    "consultoria.videos.title": "Quer adiantar o básico?",
    "consultoria.videos.lead":
      "Minha própria plataforma de ensino gratuita (Trilha de IA) ainda está em construção. Até lá, esses vídeos ajudam a entender o essencial:",
    "consultoria.videos.tag.basico": "O básico",
    "consultoria.videos.tag.pratica": "Na prática",
    "consultoria.videos.v1":
      "O que é Inteligência Artificial? (explicado de forma simples)",
    "consultoria.videos.v2": "Inteligência Artificial em 4 minutos",
    "consultoria.videos.v3":
      "ChatGPT — o que é e como usar (tutorial com exemplos)",
    "consultoria.videos.v4": "Aprenda ChatGPT em 15 minutos",

    "consultoria.footer.cta": "Bora conversar?",
    "consultoria.footer.copyright":
      'Paula Allemand · <a href="privacidade.html">Privacidade</a>',
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.expertise": "Expertise",
    "nav.feedbacks": "Feedback",
    "nav.talks": "Talks",
    "nav.blog": "Blog",
    "lang.toggle": "View in Portuguese",

    "eyebrow.about": "About me",
    "eyebrow.expertise": "Expertise",
    "eyebrow.experience": "Experience",
    "eyebrow.companies": "Companies that shaped my career",
    "eyebrow.feedbacks": "Feedbacks",
    "eyebrow.talks": "Talks &amp; Experiences",

    "hero.greeting": "Hello, I am",
    "hero.subtitle": "Software Engineer · Educator · Finance &amp; Data",
    "hero.cta.projects": "View experience",
    "hero.cta.contact": "Get in touch",

    "about.title": "About me",
    "about.headline.quote":
      "All that you touch you change. All that you change changes you.",
    "about.headline.author": "— Octavia Butler",
    "about.descr":
      "I believe in the power of technology to transform: driven by purpose, fueled by learning, and committed to building impactful solutions for a better tomorrow.",
    "trajectory.intro":
      "I am a versatile software engineer with a solid foundation in backend development, API design, and cloud computing (AWS, GCP). My work integrates technologies like Java, Spring Boot, and Python. Passionate about teaching, I contribute to programs like {reprograma} and Minas Programam, empowering new tech talent — always focused on robust, secure, and scalable solutions.",
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

    "experience.title": "From neuroscience to financial systems",
    "experience.subtitle": "From neuroscience research to financial systems.",
    "experience.cta": "See full trajectory",
    "experience.past": "Before that",
    "experience.logos.title": "Companies &amp; communities",
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

    "feedbacks.title":
      "Don't just take my word for it. Education is what moves me, and to me, teaching means believing anyone can achieve anything. These are messages I received at the end of some of the classes I taught",
    "feedbacks.window": "Live class",

    "talks.title": "Talks &amp; experiences",
    "talks.subtitle": "A glimpse of my journey across events and communities.",
    "talks.split.title": "What brought me here",
    "talks.split.narrative":
      "Since 2018, I've worked as an educator in initiatives like {reprograma}, Minas Programam, Tera, and Estação Hack, across roughly 100 cohorts, reaching between 4,000 and 5,000 students and teaching over 400 classes. Teaching technology — especially to people changing careers — transformed me: I learned to translate complexity and understood that education is presence, responsibility, and building autonomy.",
    "talks.badge.students": "Students reached",
    "talks.badge.classes": "Classes taught",
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

    "nav.consultoria": "Consulting",

    "trainingtab.label": "Tracks",
    "trainingtab.eyebrow": "New",
    "trainingtab.heading": "The video content, organized into a track.",
    "trainingtab.cta": "See the training platform →",

    "consultoria.hero.eyebrow": "Consulting",
    "consultoria.hero.heading": "Less manual work, more time for you.",
    "consultoria.hero.subtitle":
      "For anyone who wants to use AI and automate tasks at work or in daily life, without having to master technology to do it.",
    "consultoria.cta.agendar": "I want more time",
    "consultoria.cta.conversa": "I want my call",
    "consultoria.cta.sending": "Sending...",

    "consultoria.fit.yes.title": "This is for you if...",
    "consultoria.fit.yes.item1":
      "You hear about AI all day long and don't know where to start, in practice, at your job.",
    "consultoria.fit.yes.item2":
      "You have repetitive tasks in your day-to-day and suspect they could be automated, but don't know how.",
    "consultoria.fit.yes.item3":
      "You've tried using ChatGPT or another AI on your own, got stuck, and aren't sure you're using it right.",
    "consultoria.fit.no.title": "This isn't for you if...",
    "consultoria.fit.no.item1":
      "You're looking for a generic, one-size-fits-all answer. Here we start from your actual case, not a template.",
    "consultoria.fit.no.item2":
      "You'd rather someone solve everything for you, without being involved. The consulting works best when we look at your routine together.",
    "consultoria.fit.no.item3":
      "You're looking for a long course or a study track. This is a focused conversation about your case, not an extensive training program.",

    "consultoria.how.eyebrow": "How it works",
    "consultoria.how.step1": "You fill in your name and email below.",
    "consultoria.how.step2":
      "You get an email with a quick prep guide to think about before our call — plus the link to book a time.",
    "consultoria.how.step3": "We talk through your case, at your own pace.",
    "consultoria.mockup.label.nome": "Name",
    "consultoria.mockup.label.email": "Email",
    "consultoria.mockup.success":
      "All set! Check your inbox (and your spam folder, just in case).",

    "consultoria.form.title": "Let's talk?",
    "consultoria.form.lead":
      "Leave your name and email and I'll send you the next steps.",
    "consultoria.form.label.nome": "Name",
    "consultoria.form.label.email": "Email",
    "consultoria.form.consent1":
      'I agree to receive emails about the consulting. See the <a href="privacidade.html" target="_blank">privacy policy</a>.',
    "consultoria.form.consent2":
      "I also want to hear about new content and free opportunities.",
    "consultoria.form.trust":
      "Who you'll talk to: Paula Allemand, software engineer with experience in education and technology.",
    "consultoria.form.msgok":
      "All set! Check your inbox (and your spam folder, just in case) — I've sent you a quick prep guide and the booking link.",
    "consultoria.form.msgerro":
      "Something went wrong sending this. Try again in a moment, or reach out to me directly.",

    "consultoria.videos.title": "Want a head start on the basics?",
    "consultoria.videos.lead":
      "My own free learning platform (Trilha de IA) is still under construction. Until then, these videos help with the essentials:",
    "consultoria.videos.tag.basico": "The basics",
    "consultoria.videos.tag.pratica": "In practice",
    "consultoria.videos.v1":
      "What is Artificial Intelligence? (explained simply)",
    "consultoria.videos.v2": "Artificial Intelligence in 4 minutes",
    "consultoria.videos.v3":
      "ChatGPT — what it is and how to use it (tutorial with examples)",
    "consultoria.videos.v4": "Learn ChatGPT in 15 minutes",

    "consultoria.footer.cta": "Shall we talk?",
    "consultoria.footer.copyright":
      'Paula Allemand · <a href="privacidade.html">Privacy</a>',
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
    img.src = target === "en" ? "/img/flags/us.svg" : "/img/flags/br.svg";
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
