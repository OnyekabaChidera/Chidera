import Link from "next/link";
import Image from "next/image";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function SugarBalancePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Sugar Balance — Preview</h1>
        <p className="text-gray-400 mt-2">Your clean sugar balance landing page</p>

        {/* VIDEO */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-black">
          <video
            src={`/previews/sugar-balance.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={`/previews/sugar-balance.jpg`}
            className="w-full max-h-[500px] object-cover"
          />
          <p className="text-gray-400 text-xs py-2 px-3">▶ Watch it in action - 20 sec demo</p>
        </div>

        {/* PREVIEW BOX */}
        <div className="relative w-full mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-white" style={{ height: '700px' }}>
          <Image
            src={`/previews/sugar-balance.jpg`}
            alt={`Sugar Balance Preview`}
            fill
            style={{ objectFit: 'top', objectPosition: 'top' }}
            priority
          />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/20 font-black text-4xl rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* Blur - LEFT SIDE, SMALL, PINK - FIXED */}
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
