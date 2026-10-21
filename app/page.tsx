"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Load scripts que dependem do DOM
    const scripts = [
      "/js/i18n.js",
      "/js/main.js",
      "/js/feedbacks.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <main>
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container container-lg">
          <div className="hero-content">
            <h1 className="hero-title" data-i18n="hero.title">
              Olá! Sou Paula Allemand
            </h1>
            <p className="hero-subtitle" data-i18n="hero.subtitle">
              Ajudo empresas e pessoas a dominar a tecnologia
            </p>
            <div className="hero-ctas">
              <a
                href="https://www.linkedin.com/in/paulaallemand/"
                target="_blank"
                rel="noopener"
                className="btn btn-red"
                data-i18n="hero.cta.contact"
              >
                Fale comigo
              </a>
              <a
                href="/training/"
                className="btn btn-ghost-white"
                data-i18n="hero.cta.learn"
              >
                Aprenda grátis
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <img src="/img/hero/hero.png" alt="Paula Allemand" />
          </figure>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="expertise">
        {/* Content será carregado do index.html existente */}
      </section>

      {/* Feedbacks */}
      <section id="feedbacks" className="feedbacks">
        {/* Content será carregado do index.html existente */}
      </section>

      {/* Talks */}
      <section id="talks" className="talks">
        {/* Content será carregado do index.html existente */}
      </section>
    </main>
  );
}
