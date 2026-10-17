import HomeClient from "./HomeClient";

export const metadata = {
  title: "Zero-Budget Affiliate Marketing Hub for Beginners | LeadVaultsHub",
  description: "Free guides, templates and tools for beginners to start affiliate marketing with zero budget — no paid ads needed.",
  alternates: { canonical: "https://leadvaultshub.com/" },
  openGraph: {
    url: "https://leadvaultshub.com/",
    title: "Zero-Budget Affiliate Marketing Hub for Beginners",
    description: "Free guides, templates and tools for beginners to start affiliate marketing with zero budget — no paid ads needed.",
    images: [
      {
        url: "https://leadvaultshub.com/IMG_9606.jpeg",
        width: 1200,
        height: 630,
        alt: "LeadVaultsHub - Affiliate Marketing Hub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Budget Affiliate Marketing Hub for Beginners",
    description: "Free guides, templates and tools for beginners to start affiliate marketing with zero budget.",
    images: ["https://leadvaultshub.com/IMG_9606.jpeg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
