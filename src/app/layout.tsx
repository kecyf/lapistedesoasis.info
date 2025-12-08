import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "La Piste des Oasis | Trail à Étapes Nomade",
    template: "%s | La Piste des Oasis",
  },
  description:
    "Depuis 2007, La Piste des Oasis propose un trail à étapes nomade de +100km dans les plus beaux déserts du monde. Cap Vert, Tunisie, Maroc, Mongolie...",
  keywords: [
    "trail",
    "désert",
    "course à pied",
    "aventure",
    "Cap Vert",
    "Tunisie",
    "Maroc",
    "Mongolie",
    "oasis",
    "randonnée",
  ],
  authors: [{ name: "Cap au Sud Evasion" }],
  creator: "Cap au Sud Evasion",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lapistedesoasis.info",
    siteName: "La Piste des Oasis",
    title: "La Piste des Oasis | Trail à Étapes Nomade",
    description:
      "Trail à étapes nomade de +100km dans les plus beaux déserts du monde.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
      </body>
    </html>
  );
}

