import HomeClient from "./HomeClient";

export const metadata = {
  title: "Zero-Budget Affiliate Marketing Hub for Beginners | LeadVaultsHub",
  description: "Free guides, templates and tools for beginners to start affiliate marketing with zero budget — no paid ads needed.",
  alternates: { canonical: "https://leadvaultshub.com/" },
  openGraph: {
    url: "https://leadvaultshub.com/",
    title: "Zero-Budget Affiliate Marketing Hub for Beginners",
    description: "Free guides, templates and tools for beginners to start affiliate marketing with zero budget.",
  },
};

export default function Page() { 
  return <HomeClient />; 
}
