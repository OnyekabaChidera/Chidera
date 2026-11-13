import Link from "next/link";
import Image from "next/image";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function SugarBalancePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-2 py-3">
      <div className="max-w-[360px] mx-auto text-center w-full">
        <h1 className="text-xl font-bold">Sugar Balance — Preview</h1>
        <p className="text-gray-400 mt-1 text-[12px]">Your clean sugar balance landing page</p>

        {/* VIDEO - SMALL, NOT TALL, NOT BROAD */}
        <div className="mt-3 mx-auto w-full max-w-[340px] overflow-hidden rounded-xl border border-zinc-800 bg-black">
          <video
            src={`/previews/sugar-balance.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={`/previews/sugar-balance.jpg`}
            className="w-full h-[190px] object-cover"
          />
          <p className="text-gray-400 text-[11px] py-2 px-2 text-center">▶ Watch it in action - 20 sec demo</p>
        </div>

        {/* PREVIEW BOX - NOT STRETCHED ANYMORE */}
        <div className="relative w-full mt-3 mx-auto max-w-[340px] overflow-hidden rounded-xl border border-zinc-800 bg-white" style={{ height: '520px' }}>
          <Image
            src={`/previews/sugar-balance.jpg`}
            alt={`Sugar Balance Preview`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            priority
          />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/20 font-black text-3xl rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* Blur - LEFT SIDE, SMALL */}
          <div
            className="absolute bottom-0 left-0 w-full h-[55%] flex flex-col items-start justify-center pl-4"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'linear-gradient(to top, rgba(255,255,255,0.97), rgba(255,255,255,0))',
            }}
          >
            <p className="text-black font-medium text-[13px] bg-white px-3 py-1.5 rounded-full shadow">Buy To Unlock Full Page</p>
            <p className="text-zinc-600 text-[12px] mt-2 font-medium">Choose your plan:</p>

            <div className="flex flex-col gap-1.5 mt-1.5 items-start">
              <Link href="/shop" className="bg-black text-white rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                Starter $5 →
              </Link>
              <Link href="/shop" className="bg-zinc-800 text-white rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                Premium $15 →
              </Link>
              <Link href="/shop" className="bg-white text-black border border-black rounded-full px-4 py-2 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                Exclusive $30 • 2 Slots →
              </Link>
            </div>

            <p className="text-zinc-500 text-[10px] leading-snug mt-2 text-left max-w-[250px]">
              Starter = Download Only • Premium = We Set It Up For You • Exclusive = Only For You • 2 Slots Only
            </p>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-5 text-sm">← Back to Shop</Link>
      </div>
    </div>
  );
}
