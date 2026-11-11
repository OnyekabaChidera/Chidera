"use client";
import { useState } from "react";
import { landers } from "@/data/landers";

export default function ShopClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? landers : landers.filter((l) => l.tag === filter);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Shop Landing Pages</h1>
      <p className="text-center text-gray-400 mt-3 max-w-xl mx-auto">Pick a lander style, preview how it works, then use it with your network offer. No paid ads needed.</p>

      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {["All", "Weight Loss", "Health", "AI Tools", "Relationship"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm ${filter === f ? "bg-white text-black" : "bg-white/10 text-white"}`}>{f}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {filtered.map((l: any) => {
          // ONLY Sugar Balance has template uploaded, so ONLY it shows prices / slots
          const isReady = l.slug === "sugar-balance";

          return (
            <div key={l.slug} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <img src={l.image} alt={l.name} className="w-full h-48 object-cover rounded-xl" />
              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full inline-block mt-4">{l.tag}</span>
              <h3 className="font-bold text-xl mt-3">{l.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{l.headline}</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{l.desc}</p>

              {/* PRICE + SLOTS - ONLY FOR SUGAR BALANCE */}
              {isReady ? (
                <>
                  <p className="text-sm mt-3">Price: <span className="text-green-400">Free Preview</span></p>
                  {/* NO MORE "- discounted" - REMOVED COMPLETELY */}
                  <p className="text-sm mt-1">Starter: <span className="font-bold text-white">$5</span></p>

                  {/* SLOTS - SAME FONT AS HOME PAGE (ROBOTO), JUST TINIER, NO PLACARD */}
                  <div className="mt-2 space-y-0.5" style={{ fontFamily: "var(--font-roboto), system-ui, sans-serif" }}>
                    <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Starter - $5 Unlimited</p>
                    <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Premium - Only 5 slots</p>
                    <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Exclusive - Only 2 slots</p>
                  </div>

                  <a href={`/shop/${l.slug}`} className="block text-center bg-white text-black font-bold py-2.5 rounded-full mt-3">View Details - $5 / $15 / $30 →</a>
                </>
              ) : (
                <>
                  <p className="text-sm mt-3 text-gray-400">Preview only — Template coming soon.</p>
                  <a href={`/shop/${l.slug}`} className="block text-center bg-white text-black font-bold py-2.5 rounded-full mt-3">View Details →</a>
                </>
              )}

              <a href={l.demoLink} target="_blank" className="block text-center bg-white/10 border border-white/20 font-bold py-2.5 rounded-full mt-2">Live Preview →</a>
              <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="block text-center bg-white/10 border border-white/20 font-bold py-2.5 rounded-full mt-2">See How It Works →</a>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">Educational templates. Results vary based on effort and execution.</p>
    </main>
  );
}
