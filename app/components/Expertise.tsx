"use client";

import { useEffect, useRef } from "react";

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Carregar expertise seção do index.html e inserir no container
    fetch("/index.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const expertise = doc.querySelector("#expertise");
        if (expertise && containerRef.current) {
          containerRef.current.innerHTML = expertise.innerHTML;
          // Re-run i18n e scripts para essa seção
          window.dispatchEvent(new Event("expertise-loaded"));
        }
      });
  }, []);

  return <section id="expertise" className="expertise" ref={containerRef} />;
}
