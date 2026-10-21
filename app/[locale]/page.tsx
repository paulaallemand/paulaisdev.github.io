"use client";

import { useEffect } from "react";
import { messages, type Locale } from "@/config/i18n";
import { useParams } from "next/navigation";
import Expertise from "@/app/components/Expertise";
import Feedbacks from "@/app/components/Feedbacks";
import Talks from "@/app/components/Talks";

export default function Page() {
  const params = useParams();
  const locale = (params.locale as Locale) || "pt-BR";
  const t = messages[locale];

  useEffect(() => {
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
      <section id="home" className="hero">
        <div className="container container-lg">
          <div className="hero-content">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-ctas">
              <a
                href="https://www.linkedin.com/in/paulaallemand/"
                target="_blank"
                rel="noopener"
                className="btn btn-red"
              >
                {t.hero.cta.contact}
              </a>
              <a href={`/${locale}/training`} className="btn btn-ghost-white">
                {t.hero.cta.learn}
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <img src="/img/hero/hero.png" alt="Paula Allemand" />
          </figure>
        </div>
      </section>

      <Expertise />
      <Feedbacks />
      <Talks />
    </main>
  );
}
