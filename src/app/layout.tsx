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
      className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        {/* Topography Background Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.04] dark:opacity-[0.06] dark:invert animate-drift"
          style={{
            backgroundImage: `url("/assets/Background/topography.svg")`,
            backgroundSize: '600px',
            backgroundRepeat: 'repeat',
          }}
        />

        <GlobalLoadingScreen />
        {children}
      </body>
    </html>
  );
}
