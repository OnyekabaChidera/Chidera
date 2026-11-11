import { landers } from "@/data/landers";
import Link from "next/link";
import Image from "next/image";

// This tells Google: don't index preview pages
export const metadata = {
  robots: "noindex, nofollow",
};

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lander = landers.find((l) => l.slug === slug);
  if (!lander) return <div className="p-10 bg-black text-white min-h-screen">Not found</div>;

  const isReady = lander.slug === "sugar-balance";

  // If it's NOT ready — Coming Soon
  if (!isReady) {
    return (
      <div className="min-h-screen bg-black text-white p-6 text-center flex flex-col justify-center items-center">
        <p className="text-sm bg-zinc-800 px-3 py-1 rounded-full">{lander.name}</p>
        <h1 className="text-4xl font-bold mt-6">Coming Soon</h1>
        <p className="text-gray-400 mt-3 max-w-md">{lander.headline}</p>
        <Link href="/shop" className="bg-white text-black rounded-full px-6 py-3 mt-8">← Back to Shop</Link>
      </div>
    );
  }

  // If it IS Sugar Balance — Partial Blurred Image Preview
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">{lander.name} — Preview</h1>
        <p className="text-gray-400 mt-2">{lander.headline}</p>

        {/* PREVIEW BOX - Top clear, Bottom blurred */}
        <div className="relative w-full mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-white" style={{ height: '700px' }}>
          <Image
            src="/previews/sugar-balance.jpg"
            alt="Sugar Balance Preview"
            fill
            style={{ objectFit: 'top', objectPosition: 'top' }}
            priority
          />

          {/* Watermark in middle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/20 font-black text-4xl rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* Blur for bottom 50% */}
          <div
            className="absolute bottom-0 left-0 w-full h-[50%] flex flex-col items-center justify-center"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0))',
            }}
          >
            <p className="text-black font-bold text-lg bg-white px-4 py-2 rounded-full shadow">Buy To Unlock Full Page</p>
            <Link href="/shop" className="bg-black text-white rounded-full px-6 py-3 mt-4">Buy For $5 →</Link>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-6">← Back to Shop</Link>
      </div>
    </div>
  );
}
