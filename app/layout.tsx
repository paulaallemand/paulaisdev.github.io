import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
