export const defaultLocale = "pt-BR" as const;
export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const messages = {
  "pt-BR": {
    nav: {
      home: "Início",
      experience: "Experiência",
      feedbacks: "Feedbacks",
      talks: "Palestras",
    },
    hero: {
      title: "Olá! Sou Paula Allemand",
      subtitle: "Ajudo empresas e pessoas a dominar a tecnologia",
      cta: {
        contact: "Fale comigo",
        learn: "Aprenda grátis",
      },
    },
    footer: {
      cta: "Bora construir algo incrível?",
      contact: "Fale comigo",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      feedbacks: "Feedbacks",
      talks: "Talks",
    },
    hero: {
      title: "Hi! I'm Paula Allemand",
      subtitle: "I help companies and people master technology",
      cta: {
        contact: "Get in touch",
        learn: "Learn for free",
      },
    },
    footer: {
      cta: "Let's build something amazing?",
      contact: "Get in touch",
    },
  },
};
