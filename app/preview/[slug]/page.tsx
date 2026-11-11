import { landers } from "@/data/landers";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  robots: "noindex, nofollow",
};

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lander = landers.find((l) => l.slug === slug);
  if (!lander) return <div className="p-10 bg-black text-white min-h-screen">Not found</div>;

  const isReady = lander.slug === "sugar-balance";

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

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-left">{lander.name} — Preview</h1>
        <p className="text-gray-400 mt-1 text-left text-[14px]">{lander.headline}</p>

        {/* VIDEO */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-black">
          <video
            src={`/previews/${lander.slug}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={`/previews/${lander.slug}.jpg`}
            className="w-full max-h-[500px] object-cover"
          />
          <p className="text-gray-400 text-xs py-2 px-3">▶ Watch it in action - 20 sec demo</p>
        </div>

        {/* PICTURE PREVIEW BOX */}
        <div className="relative w-full mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-white" style={{ height: '700px' }}>
          <Image
            src={`/previews/${lander.slug}.jpg`}
            alt={`${lander.name} Preview`}
            fill
            style={{ objectFit: 'top', objectPosition: 'top' }}
            priority
          />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/20 font-black text-4xl rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* Blur - LEFT CORNER, SMALL, COMPACT - YOUR VERSION */}
          <div
            className="absolute bottom-0 left-0 w-full h-[58%] flex flex-col items-start justify-end pb-6 pl-4 pr-4"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'linear-gradient(to top, rgba(255,255,255,0.97), rgba(255,255,255,0))',
            }}
          >
            {/* CTA - SMALL, NOT BROAD */}
            <p className="text-zinc-800 font-medium text-[13px] bg-white px-3 py-1.5 rounded-full shadow-sm inline-block">
              Buy To Unlock Full Page
            </p>

            <p className="text-zinc-500 text-[12px] mt-2">Choose your plan:</p>

            {/* OPTIONS - SMALL TEXT NOW */}
            <div className="flex flex-col gap-1.5 mt-1.5 items-start">
              <Link href="/shop" className="bg-black text-white rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center">
                Starter $5 →
              </Link>
              <Link href="/shop" className="bg-zinc-800 text-white rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center">
                Premium $15 →
              </Link>
              {/* EXCLUSIVE - 2 SLOTS */}
              <Link href="/shop" className="bg-white text-black border border-black rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center">
                Exclusive $30 • 2 Slots →
              </Link>
            </div>

            <p className="text-zinc-500 text-[10px] leading-snug mt-2 text-left max-w-[250px]">
              Starter = Download Only • Premium = We Set It Up For You • Exclusive = Only 2 Slots Available
            </p>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-6">← Back to Shop</Link>
      </div>
    </div>
  );
}
