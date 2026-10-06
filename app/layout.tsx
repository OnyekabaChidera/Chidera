import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Roboto_Slab, Roboto } from "next/font/google";
import Script from "next/script";
import './globals.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leadvaultshub.com'),
  title: {
    default: "LeadVaultsHub - Affiliate Marketing Tools & Guides",
    template: "%s | LeadVaultsHub",
  },
  description: "Affiliate marketing tutorials, free traffic strategies, and landing page vault for beginners.",
  robots: "index, follow",
  alternates: {
    canonical: "./",
  },
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
    <html lang="en" className={`${robotoSlab.variable} ${roboto.variable} dark bg-[#12161c]`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1879277088078387" crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased">
        {children}
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
