"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header id="header" className="header">
      <div className="container container-lg">
        <div className="header-nav">
          <Link href="/" className="logo">
            Paula<span>.</span>Allemand
          </Link>
          <nav id="nav" className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link active" data-i18n="nav.home">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/experience" className="nav-link" data-i18n="nav.experience">
                  Experiência
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#feedbacks" className="nav-link" data-i18n="nav.feedbacks">
                  Feedbacks
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#talks" className="nav-link" data-i18n="nav.talks">
                  Palestras
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/paulaallemand/"
                  target="_blank"
                  rel="noopener"
                  className="nav-link nav-link-btn"
                  data-i18n="hero.cta.contact"
                >
                  Fale comigo
                </a>
              </li>
              <li className="nav-item">
                <Link href="/consultoria/" className="nav-link nav-link-cta">
                  Consultoria
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/training/" className="nav-link nav-link-cta">
                  Trilhas
                </Link>
              </li>
              <li className="nav-item language-item">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
          <button
            id="nav-btn"
            className="nav-btn"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <img id="nav-btn-img" src="/img/icons/open.svg" alt="Menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
