"use client";
import { useState } from "react";

const networks = [
  { name: "ClickBank", bestFor: "Weight Loss, Health, Relationship", region: "Global", type: "Network", payout: "$20 - $100 / sale", link: "https://www.clickbank.com" },
  { name: "Digistore24", bestFor: "Weight Loss, Health, Relationship", region: "Global", type: "Network", payout: "$20 - $80 / sale", link: "https://www.digistore24.com" },
  { name: "Impact", bestFor: "AI Tools, Software", region: "Global", type: "Network", payout: "$10 - $50 / sale", link: "https://impact.com" },
  { name: "PartnerStack", bestFor: "AI Tools, Software", region: "Global", type: "Network", payout: "Recurring monthly", link: "https://partnerstack.com" },
  { name: "ShareASale", bestFor: "Health, Software", region: "Global", type: "Network", payout: "$10 - $40 / sale", link: "https://shareasale.com" },
  { name: "MaxBounty", bestFor: "CPA, Weight Loss, Dating", region: "Global", type: "Network", payout: "$1 - $50 / lead", link: "https://www.maxbounty.com" },
  { name: "Expertnaire", bestFor: "Nigeria - Health, Make Money", region: "Nigeria", type: "Network", payout: "₦10k - ₦50k / sale", link: "https://expertnaire.com" },
  { name: "Stakecut", bestFor: "Nigeria - Health, Relationship", region: "Nigeria", type: "Network", payout: "₦10k - ₦40k / sale", link: "https://stakecut.com" },
  { name: "Selar", bestFor: "Nigeria - Digital Products", region: "Nigeria", type: "Network", payout: "₦5k - ₦30k / sale", link: "https://selar.com" },
];

const forums = [
  { name: "AffiliateFix", bestFor: "Beginner guides, CPA", region: "Global", type: "Forum", payout: "Free", link: "https://www.affiliatefix.com" },
  { name: "Reddit r/AffiliateMarketing", bestFor: "Questions, real stories", region: "Global", type: "Forum", payout: "Free", link: "https://www.reddit.com/r/AffiliateMarketing/" },
  { name: "AffLift", bestFor: "Paid ads, landers, tracking", region: "Global", type: "Forum", payout: "$20 / month", link: "https://afflift.com" },
];

export default function NetworksClient() {
  const [filter, setFilter] = useState("All");
  const all = [...networks, ...forums];
  const filtered = filter === "All" ? all : all.filter((i) => i.region === filter || i.bestFor.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#12161c] text-white px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-roboto-slab)] text-center">Join Affiliate Networks & Forums</h1>
      <p className="text-center text-gray-400 mt-3">Step 1: Join a network to get a product. Step 2: Buy a lander. Step 3: Post your link.</p>

      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {["All", "Global", "Nigeria", "AI Tools", "Weight Loss"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm ${filter === f ? "bg-white text-black" : "bg-white/10 text-white"}`}>{f}</button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Affiliate Networks</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.filter((i) => i.type === "Network").map((n) => (
          <div key={n.name} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="font-bold text-lg">{n.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{n.bestFor}</p>
            <p className="text-sm mt-2">Payout: <span className="text-green-400">{n.payout}</span> • {n.region}</p>
            <a href={n.link} target="_blank" className="block text-center bg-white text-black font-bold py-2 rounded-full mt-4">Join Free →</a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Affiliate Forums</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.filter((i) => i.type === "Forum").map((n) => (
          <div key={n.name} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="font-bold text-lg">{n.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{n.bestFor}</p>
            <p className="text-sm mt-2">Cost: <span className="text-green-400">{n.payout}</span></p>
            <a href={n.link} target="_blank" className="block text-center bg-white text-black font-bold py-2 rounded-full mt-4">Join Forum →</a>
          </div>
        ))}
      </div>
    </main>
  );
}
