import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Perto das pessoas, no caminho de Francisco | Frades Menores · Província Santa Cruz",
    template: "%s | Frades Menores · Província Santa Cruz",
  },
  description:
    "Frades Menores · Província Santa Cruz. Uma presença franciscana viva, feita de fraternidade, simplicidade, missão e cuidado com a vida.",
  keywords: [
    "Franciscanos",
    "Frades Menores",
    "OFM",
    "Província Santa Cruz",
    "Francisco de Assis",
    "Vida Religiosa",
    "Vocações",
    "Espiritualidade Franciscana",
    "Fraternidade",
    "Igreja Católica",
    "Belo Horizonte",
    "Brasil",
  ],
  authors: [{ name: "Ordem dos Frades Menores - Província Santa Cruz" }],
  creator: "OFM Província Santa Cruz",
  publisher: "OFM Província Santa Cruz",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fradesmenores.org.br",
    siteName: "Frades Menores · Província Santa Cruz",
    title: "Perto das pessoas, no caminho de Francisco | Frades Menores · Província Santa Cruz",
    description: "Uma presença franciscana viva, feita de fraternidade, simplicidade, missão e cuidado com a vida.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ordem dos Frades Menores - Província Santa Cruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perto das pessoas, no caminho de Francisco | Frades Menores · Província Santa Cruz",
    description: "Uma presença franciscana viva, feita de fraternidade, simplicidade, missão e cuidado com a vida.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${fraunces.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
