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
    <div className="min-h-screen bg-zinc-950 text-white px-3 py-4">
      <div className="max-w-[480px] mx-auto text-center w-full">
        <h1 className="text-2xl font-bold">{lander.name} — Preview</h1>
        <p className="text-gray-400 mt-1 text-[13px]">{lander.headline}</p>

        {/* VIDEO */}
        <div className="mt-3 mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-zinc-800 bg-black">
          <video
            src={`/previews/${lander.slug}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={`/previews/${lander.slug}.jpg`}
            className="w-full aspect-[4/3] max-h-[300px] object-cover"
          />
          <p className="text-gray-400 text-xs py-2 px-3 text-center">▶ Watch it in action - 20 sec demo</p>
        </div>

        {/* PREVIEW BOX */}
        <div className="relative w-full mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-white" style={{ height: '600px' }}>
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

          {/* Blur - LEFT SIDE, SMALL, PINK - ONLY THIS PART CHANGED */}
          <div
            className="absolute bottom-0 left-0 w-full h-[55%] flex flex-col items-start justify-center pl-6"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'linear-gradient(to top, rgba(255,255,255,0.97), rgba(255,255,255,0))',
            }}
          >
            <p className="text-black font-bold text-lg bg-white px-4 py-2 rounded-full shadow">Buy To Unlock Full Page</p>
            <p className="text-zinc-600 text-sm mt-2 font-medium">Choose your plan:</p>

            <div className="flex flex-col gap-2 mt-2 items-start">
              <Link href="/shop" className="bg-pink-600 text-white rounded-full px-5 py-2.5 text-sm font-medium w-[210px] text-center">
                Starter $5 →
              </Link>
              <Link href="/shop" className="bg-pink-600 text-white rounded-full px-5 py-2.5 text-sm font-medium w-[210px] text-center">
                Premium $15 →
              </Link>
              <Link href="/shop" className="bg-pink-600 text-white rounded-full px-5 py-2.5 text-sm font-medium w-[210px] text-center">
                Exclusive $30 • 2 Slots Only →
              </Link>
            </div>

            <p className="text-zinc-500 text-xs mt-3 text-left">
              Starter = Download Only • Premium = We Set It Up For You • Exclusive = Only For You • 2 Slots Only
            </p>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-6">← Back to Shop</Link>
      </div>
    </div>
  );
}
