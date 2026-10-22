"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const params = useParams();
  const locale = (params.locale as string) || "pt-BR";

  const otherLocale = locale === "pt-BR" ? "en" : "pt-BR";
  const otherLabel = otherLocale === "pt-BR" ? "PT" : "EN";

  // Get current path without locale
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const pathWithoutLocale = pathname.replace(/^\/(pt-BR|en)/, "");

  return (
    <div className="language-switcher">
      <Link href={`/${otherLocale}${pathWithoutLocale || "/"}`}>
        <img src={`/img/flags/${otherLocale === "pt-BR" ? "br" : "us"}.svg`} alt={otherLabel} />
      </Link>
    </div>
  );
}
