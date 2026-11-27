import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import BrandLoader from "./components/BrandLoader";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "VARATECT | Architecture, Interiors & Design",
    template: "%s | VARATECT",
  },
  description: "VARATECT is an architecture and design studio creating thoughtful spaces through architecture, interiors, renovation and commercial design.",
  applicationName: "VARATECT",
  openGraph: {
    type: "website",
    siteName: "VARATECT",
    title: "VARATECT | Architecture, Interiors & Design",
    description: "Architecture, interiors, renovation and commercial design shaped around you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VARATECT | Architecture, Interiors & Design",
    description: "Architecture, interiors, renovation and commercial design shaped around you.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <BrandLoader />
            {children}
            <FloatingWhatsAppButton />
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
