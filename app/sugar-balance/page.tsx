{/* Blur - LEFT CORNER, SMALL, COMPACT */}
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
