"use client";

import { useEffect, useRef } from "react";

export default function Talks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    fetch("/index.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const talks = doc.querySelector("#talks");
        if (talks && containerRef.current) {
          containerRef.current.innerHTML = talks.innerHTML;
          window.dispatchEvent(new Event("talks-loaded"));
        }
      });
  }, []);

  return <section id="talks" className="talks" ref={containerRef} />;
}
