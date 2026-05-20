import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://cashub.pl";
const TITLE = "Cashub - zarabiaj cashback na zakupach";
const DESCRIPTION =
  "Darmowa wtyczka do przeglądarki — automatycznie szuka kodów rabatowych i zwraca cashback z zakupów online w 50+ sklepach. Pobierz za darmo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Cashub",
  keywords: [
    "cashback",
    "wtyczka cashback",
    "kody rabatowe",
    "zwrot pieniędzy",
    "zakupy online",
    "wtyczka chrome",
    "rozszerzenie przeglądarki",
    "Cashub",
  ],
  authors: [{ name: "Cashub" }],
  creator: "Cashub",
  publisher: "Cashub",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Cashub",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "8CaQZ9RQMN6iq1scCgQiiSpPcavykcK3BneDJA449TI",
  },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Cashub",
      url: SITE_URL,
      logo: `${SITE_URL}/icon0.svg`,
      sameAs: [
        "https://chromewebstore.google.com/detail/wtyczka-cashback/ilafemiekdndmopekgefoomphnkokhdh",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Cashub",
      description: DESCRIPTION,
      inLanguage: "pl-PL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebApplication",
      name: "Cashub - wtyczka cashback",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Edge, Brave",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "PLN",
      },
      url: "https://chromewebstore.google.com/detail/wtyczka-cashback/ilafemiekdndmopekgefoomphnkokhdh",
      description: DESCRIPTION,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
