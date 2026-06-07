import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace Philip Denulan — BSIT Portfolio",
  description: "System Development & Applied Analytics. Available for OJT January 2026.",
  openGraph: {
    title: "Ace Philip Denulan",
    description: "BSIT Student · System Developer · Pangasinan, PH",
    url: "https://portfolioace-sepia.vercel.app",
  },
};

import GlobalLoadingScreen from "@/components/GlobalLoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <GlobalLoadingScreen />
        
        {/* Global Rough Texture/Film Grain Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[9999] opacity-30 dark:opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {children}
      </body>
    </html>
  );
}
