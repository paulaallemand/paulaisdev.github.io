import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { PrivacyBanner } from "./components/PrivacyBanner";

export const metadata: Metadata = {
  title: "Paula Allemand",
  description: "Software engineer and content creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/training.css" />
        <link rel="stylesheet" href="/css/media.css" />
        <link rel="stylesheet" href="/css/privacy-banner.css" />
        <link rel="stylesheet" href="/css/login-button.css" />
      </head>
      <body>
        <AnalyticsProvider>
          <Header />
          {children}
          <PrivacyBanner />
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
