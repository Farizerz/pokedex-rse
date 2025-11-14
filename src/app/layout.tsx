import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { URL as STATIC_URL } from "@/utils/constants/url";
import Provider from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(STATIC_URL.MAIN_URL),
  title: `Pokédex RSE | A compact Pokédex in RSE style`,
  description:
    "A simple Pokedex made with Ruby, Sapphire & Emerald style as the inspiration, which displays only the necessary information.",
  verification: {
    google: "VEY9xJGsGg-8CS-n8oS9RpsbVcexr2eKDQ5TXKKdIUU",
  },
  alternates: {
    canonical: STATIC_URL.MAIN_URL,
  },
  openGraph: {
    title: `Pokédex RSE | A compact Pokédex in RSE Style`,
    description:
      "A simple Pokedex made with Ruby, Sapphire & Emerald style as the inspiration, which displays only the necessary information.",
    url: STATIC_URL.MAIN_URL,
    siteName: "Pokedex RSE",
    images: [
      {
        url: "/images/thumbs.webp",
        width: "1200",
        height: "630",
        alt: "Pokédex RSE",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
