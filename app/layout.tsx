import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { CSSProperties } from "react";
import { pageConfig } from "./config";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

type ThemeStyles = CSSProperties & {
  "--hot-pink": string;
  "--deep-pink": string;
  "--pink": string;
  "--light-pink": string;
  "--text": string;
  "--muted": string;
  "--white": string;
  "--background": string;
};

const themeStyles: ThemeStyles = {
  "--hot-pink": pageConfig.colors.hotPink,
  "--deep-pink": pageConfig.colors.deepPink,
  "--pink": pageConfig.colors.pink,
  "--light-pink": pageConfig.colors.lightPink,
  "--text": pageConfig.colors.text,
  "--muted": pageConfig.colors.muted,
  "--white": pageConfig.colors.white,
  "--background": pageConfig.colors.background,
};

export const metadata: Metadata = {
  title: `${pageConfig.creatorName} | Comunidade`,
  description:
    "Conheça a comunidade, seus conteúdos e informações antes de continuar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={dmSans.variable} style={themeStyles}>{children}</body>
    </html>
  );
}
