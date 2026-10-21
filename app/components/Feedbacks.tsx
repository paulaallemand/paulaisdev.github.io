"use client";

import { useEffect, useRef } from "react";

export default function Feedbacks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    fetch("/index.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const feedbacks = doc.querySelector("#feedbacks");
        if (feedbacks && containerRef.current) {
          containerRef.current.innerHTML = feedbacks.innerHTML;
          window.dispatchEvent(new Event("feedbacks-loaded"));
        }
      });
  }, []);

  return <section id="feedbacks" className="feedbacks" ref={containerRef} />;
}
