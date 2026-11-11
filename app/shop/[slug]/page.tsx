import { landers } from "@/data/landers";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return landers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const lander = landers.find((l) => l.slug === params.slug);
  if (!lander) return {};
  return {
    title: `${lander.name} - Landing Page Template | LeadVaultsHub`,
    description: lander.desc,
    alternates: { canonical: `https://leadvaultshub.com/shop/${lander.slug}` },
  };
}

export default function LanderPage({ params }: { params: { slug: string } }) {
  const lander = landers.find((l) => l.slug === params.slug);
  if (!lander) notFound();

  // ONLY Sugar Balance has template uploaded, so ONLY it shows prices / slots
  const isReady = lander.slug === "sugar-balance";

  return (
    <main className="min-h-screen bg-[#171b22] text-white px-4 py-10 max-w-3xl mx-auto">
      <Link href="/shop" className="text-sm text-gray-400">← Back to Shop</Link>

      <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
        <img src={lander.image} alt={lander.name} className="w-full h-64 object-cover rounded-xl" />
        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full inline-block mt-4">{lander.tag}</span>
        <h1 className="font-bold text-3xl mt-3">{lander.name}</h1>
        <p className="text-gray-300 mt-2 text-lg">{lander.headline}</p>
        <p className="text-gray-400 mt-3 leading-relaxed">{lander.desc}</p>

        <a href={lander.demoLink} target="_blank" className="block text-center bg-white/10 border border-white/20 font-bold py-3 rounded-full mt-6">Live Preview →</a>
      </div>

      <h2 className="font-bold text-2xl mt-10 text-center">Choose Your Package</h2>
      <p className="text-center text-gray-400 text-sm mt-2">Preview the style, then learn how to use it with your own offer.</p>

      {/* SLOTS - ONLY FOR SUGAR BALANCE, NOT FOR OTHER TEMPLATES */}
      {isReady && (
        <div className="mt-4 space-y-0.5 text-center" style={{ fontFamily: "var(--font-roboto), system-ui, sans-serif" }}>
          <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Starter - $5 Unlimited</p>
          <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Premium - Only 5 slots</p>
          <p className="text-[11px] font-normal text-pink-400 leading-relaxed">Exclusive - Only 2 slots</p>
        </div>
      )}

      {/* PACKAGES - ONLY FOR SUGAR BALANCE */}
      {isReady ? (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {lander.packages.map((p) => (
            <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-2xl font-bold mt-2">${p.price}</p>

              {/* NO MORE "- discounted" - REMOVED COMPLETELY */}

              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                {p.name === "Starter" && "Code file only. You set it up yourself."}
                {p.name === "Premium" && "We set it up for you with your link + photo."}
                {p.name === "Exclusive" && "Only 1 person gets this design. We set it up for you."}
              </p>
              <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="block text-center bg-white text-black font-bold py-2.5 rounded-full mt-4 text-sm">See How It Works →</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-gray-300">Preview only — Template coming soon.</p>
          <p className="text-xs text-gray-400 mt-2">Prices and slots will show here once this template is uploaded.</p>
        </div>
      )}

      {isReady && (
        <div className="mt-8 text-center space-y-1">
          <p className="text-sm text-gray-400">Exclusive includes Email Pack — 3 ready follow-up emails + steps to send them.</p>
          <p className="text-sm text-gray-400">If you need help, you may message us.</p>
        </div>
      )}

      <p className="text-center text-xs text-gray-500 mt-10">Educational templates. Results vary based on effort and execution.</p>
    </main>
  );
}
