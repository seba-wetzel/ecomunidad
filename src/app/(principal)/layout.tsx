import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";

export const metadata: Metadata = {
  title: "ecoMunidad",
  description: "Somos una comunidad consiente.",
};
// Font files can be colocated inside of `app`
const gotham = localFont({
  src: [
    {
      path: "../assets/fonts/Gotham/Gotham-Bold.otf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-BoldItalic.otf",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-Book.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-BookItalic.otf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-Light.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-LightItalic.otf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-MediumItalic.otf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-Medium.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-Thin.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham/Gotham-ThinItalic.otf",
      weight: "normal",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={cn(" bg-verde-principal", gotham.className)}>
      {children}
    </body>
  );
}
