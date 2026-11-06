import NetworksClient from "./NetworksClient";

export const metadata = {
  title: "Join Affiliate Networks & Forums | LeadVaultsHub",
  description: "All affiliate networks and forums you can join in one place - from anywhere in the world. Global and Nigeria networks, free to join.",
  alternates: { canonical: "https://leadvaultshub.com/networks" },
  openGraph: {
    url: "https://leadvaultshub.com/networks",
    title: "Join Affiliate Networks & Forums",
    description: "All affiliate networks and forums you can join in one place - from anywhere in the world.",
    images: [{ url: "https://leadvaultshub.com/IMG_9606.jpeg", width: 1200, height: 630, alt: "LeadVaultsHub - Affiliate Networks" }],
    type: "website",
  },
};

export default function Page() {
  return <NetworksClient />;
}
