import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnalyticsProvider } from "./components/AnalyticsProvider";

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
      </head>
      <body>
        <AnalyticsProvider>
          <Header />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
