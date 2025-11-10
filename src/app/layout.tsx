import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { URL } from "@/utils/constants/url";
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
  title: `Pokédex RSE | ${URL.MAIN_URL}`,
  description:
    "A simple Pokedex made with Ruby, Sapphire & Emerald style as the inspiration, which displays only the necessary information.",
  verification: {
    google: "VEY9xJGsGg-8CS-n8oS9RpsbVcexr2eKDQ5TXKKdIUU",
  },
  alternates: {
    canonical: URL.MAIN_URL,
  },
  openGraph: {
    title: `Pokédex RSE | ${URL.MAIN_URL}`,
    description:
      "A simple Pokedex made with Ruby, Sapphire & Emerald style as the inspiration, which displays only the necessary information.",
    url: URL.MAIN_URL,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
