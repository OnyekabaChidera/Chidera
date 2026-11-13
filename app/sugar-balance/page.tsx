import Link from "next/link";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function SugarBalancePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-2 py-3">
      <div className="max-w-[360px] mx-auto text-center w-full">
        <h1 className="text-xl font-bold">Sugar Balance — Preview</h1>
        <p className="text-gray-400 mt-1 text-[12px]">Your clean sugar balance landing page</p>

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
          <p className="text-gray-400 text-[11px] py-2 px-2 text-center">▶ Watch teaser - 8 sec preview</p>
        </div>

        {/* PREVIEW - NO onContextMenu, SO VERCEL GO BUILD */}
        <div
          className="relative w-full mt-3 mx-auto max-w-[340px] overflow-hidden rounded-xl border border-zinc-800 bg-white select-none"
          style={{ height: '680px', WebkitTouchCallout: 'none' as any, WebkitUserSelect: 'none' as any }}
        >
          {/* Top image - clear */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(/previews/sugar-balance.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Watermark - SMALL */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/10 font-medium text-[11px] tracking-widest rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* BOTTOM 28% - BLUR VISUAL ONLY, NO CLIPPING FOR CONTENT */}
          <div
            className="absolute bottom-0 left-0 w-full h-[28%]"
            style={{ WebkitTouchCallout: 'none' as any }}
          >
            {/* Blurred image - THIS ONE get overflow-hidden, not the whole container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/previews/sugar-balance.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat',
                  filter: 'blur(18px)',
                  WebkitFilter: 'blur(18px)' as any,
                  transform: 'scale(1.15)',
                }}
              />
            </div>
            {/* White wash - SOFT GRADIENT NOW, NO BE SOLID WHITE BLOCK AGAIN */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.92), rgba(255,255,255,0.55))' }}
            />

            {/* Buttons + Badge - NO overflow-hidden here, so badge no go cut again */}
            {/* I make am small small so e fit inside 28% */}
            <div className="absolute inset-0 flex flex-col items-start justify-end pb-2 pl-4 pr-3">
              <p className="text-black font-medium text-[13px] bg-white px-3 py-1 rounded-full shadow">Own This Page</p>
              <p className="text-zinc-600 text-[11px] mt-1 font-medium">Choose your plan:</p>

              <div className="flex flex-col gap-[4px] mt-1 items-start w-full">
                <Link href="/shop" className="bg-black text-white rounded-full px-4 py-1 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                  Starter $5 →
                </Link>
                <Link href="/shop" className="bg-zinc-800 text-white rounded-full px-4 py-1 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                  Premium $15 →
                </Link>
                <Link href="/shop" className="bg-white text-black border border-black rounded-full px-4 py-1 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">
                  Exclusive $30 • 2 Slots →
                </Link>
              </div>

              <p className="text-zinc-500 text-[10px] leading-tight mt-1 text-left w-full">
                Starter = Download Only<br />
                Premium = We Set It Up For You<br />
                Exclusive = Only For You • 2 Slots Only
              </p>
            </div>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-5 text-sm">← Back to Shop</Link>
      </div>
    </div>
  );
}
