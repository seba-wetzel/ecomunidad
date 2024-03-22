import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ecoMunidad",
  description: "Somos una comunidad consiente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      {children}
    </html>
  );
}
