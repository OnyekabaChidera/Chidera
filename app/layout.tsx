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
  title: 'LeadVaultsHub',
  description: 'New to online money-making? Discover...',
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
