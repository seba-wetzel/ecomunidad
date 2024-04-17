import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Outfit({
  subsets: ["latin"],
});

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
    <body className={cn("bg-verde-principal tracking-wider", font.className)}>
      {children}
    </body>
  );
}
