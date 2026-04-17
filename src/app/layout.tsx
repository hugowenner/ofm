import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frades Menores no Brasil | Província Santa Cruz",
    template: "%s | Frades Menores no Brasil",
  },
  description:
    "Ordem dos Frades Menores no Brasil - Província Santa Cruz. Uma presença franciscana viva: fraternidade, simplicidade e cuidado com a criação. Conheça nossa história, espiritualidade e missão.",
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
    siteName: "Frades Menores no Brasil",
    title: "Frades Menores no Brasil | Província Santa Cruz",
    description:
      "Uma presença franciscana viva: fraternidade, simplicidade e cuidado com a criação.",
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
    title: "Frades Menores no Brasil | Província Santa Cruz",
    description:
      "Uma presença franciscana viva: fraternidade, simplicidade e cuidado com a criação.",
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
        className={`${sourceSans.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
