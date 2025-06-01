import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from '@/components/providers/session-provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "İstanbul Uydu Servisi | Çanak Anten & TV Servisi",
    template: "%s | İstanbul Uydu Servisi"
  },
  description: "İstanbul'un tüm ilçelerinde profesyonel uydu servisi, çanak anten kurulumu ve televizyon servisi hizmetleri. 7/24 hızlı servis, uygun fiyat.",
  keywords: [
    "uydu servisi istanbul",
    "çanak anten kurulumu",
    "televizyon servisi",
    "uydu tamiri",
    "çanak anten tamiri",
    "istanbul uydu teknik servis"
  ],
  authors: [{ name: "İstanbul Uydu Servisi" }],
  creator: "İstanbul Uydu Servisi",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://istanbul-uydu-servisi.com",
    title: "İstanbul Uydu Servisi | Çanak Anten & TV Servisi",
    description: "İstanbul'un tüm ilçelerinde profesyonel uydu servisi, çanak anten kurulumu ve televizyon servisi hizmetleri.",
    siteName: "İstanbul Uydu Servisi",
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Uydu Servisi | Çanak Anten & TV Servisi",
    description: "İstanbul'un tüm ilçelerinde profesyonel uydu servisi, çanak anten kurulumu ve televizyon servisi hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://istanbul-uydu-servisi.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <SessionProvider>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
