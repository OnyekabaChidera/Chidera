import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import './globals.css';
import CookieBanner from "./components/CookieBanner";
import Header from "../components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://leadvaultshub.com'),
  title: {
    default: "LeadVaultsHub - Affiliate Marketing Tools & Guides",
    template: "%s | LeadVaultsHub",
  },
  description: "Affiliate marketing tutorials, free traffic strategies, and landing page vault for beginners.",
  robots: "index, follow",
  openGraph: {
    siteName: "LeadVaultsHub",
    type: "website",
    images: [
      {
        url: "/IMG_9606.jpeg",
        width: 1200,
        height: 630,
        alt: "LeadVaultsHub - Affiliate Marketing Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/IMG_9606.jpeg"],
  },
  verification: {
    other: {
      "msvalidate.01": "AC3E38497B3DA50DCE3EC80AD067B77F",
      "impact-site-verification": "52225b34-69f3-4ed2-95ef-7fc632071269",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#12161c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#12161c]" style={{ '--font-roboto': "'Roboto', sans-serif", '--font-roboto-slab': "'Roboto Slab', serif" } as React.CSSProperties}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Slab&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1879277088078387" crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <footer className="text-center text-sm text-gray-400 py-6 border-t border-white/10">
          <p>© {new Date().getFullYear()} LeadVaultsHub. All Rights Reserved.</p>
          <p className="mt-1 text-xs">
            All content on this site, including articles, images, and guides, is the property of LeadVaultsHub and may not be copied without written permission.
          </p>
        </footer>
        <CookieBanner />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PGQCVCLYNC" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PGQCVCLYNC');
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
