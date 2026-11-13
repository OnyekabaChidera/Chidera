"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SugarBalancePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/previews/sugar-balance.jpg";
    img.onload = () => {
      // Canvas size = phone preview size
      canvas.width = 680;
      canvas.height = 1360;

      // 1. Draw full image first
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 2. Blur ONLY the bottom 34% - baked into the canvas
      // This blur is now PART of the picture, not a layer on top
      const blurStart = canvas.height * 0.66; // blur starts at 66% down
      const blurHeight = canvas.height - blurStart;
      ctx.save();
      // @ts-ignore - Safari supports filter
      ctx.filter = "blur(18px)";
      ctx.drawImage(
        canvas,
        0, blurStart, canvas.width, blurHeight,
        0, blurStart, canvas.width, blurHeight
      );
      ctx.restore();

      // 3. White fade on top of blur so text is readable
      const grad = ctx.createLinearGradient(0, blurStart, 0, canvas.height);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(1, "rgba(255,255,255,0.95)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, blurStart, canvas.width, blurHeight);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-2 py-3">
      <div className="max-w-[360px] mx-auto text-center w-full">
        <h1 className="text-xl font-bold">Sugar Balance — Preview</h1>
        <p className="text-gray-400 mt-1 text-[12px]">Your clean sugar balance landing page</p>

        {/* VIDEO - Remove poster, so iPhone can't peek the poster image */}
        <div className="mt-3 mx-auto w-full max-w-[340px] overflow-hidden rounded-xl border border-zinc-800 bg-black">
          <video
            src={`/previews/sugar-balance.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-[190px] object-cover"
          />
          <p className="text-gray-400 text-[11px] py-2 px-2 text-center">▶ Watch teaser - 8 sec preview</p>
        </div>

        {/* PREVIEW - CANVAS, NOT AN IMAGE. CANNOT LONG-PRESS TO PEEK */}
        <div
          className="relative w-full mt-3 mx-auto max-w-[340px] overflow-hidden rounded-xl border border-zinc-800 bg-white select-none"
          style={{ height: '680px', WebkitTouchCallout: 'none' as any }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ touchAction: 'none' }}
          />

          {/* Watermark - still on top */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-black/10 font-medium text-[11px] tracking-widest rotate-[-20deg]">LEADVAULTSHUB DEMO</p>
          </div>

          {/* Buttons - 34% as you wanted */}
          <div className="absolute bottom-0 left-0 w-full h-[34%] flex flex-col items-start justify-end pb-3 pl-4 pr-3">
            <p className="text-black font-medium text-[13px] bg-white px-3 py-1.5 rounded-full shadow">Own This Page</p>
            <p className="text-zinc-600 text-[12px] mt-1.5 font-medium">Choose your plan:</p>
            <div className="flex flex-col gap-1 mt-1 items-start w-full">
              <Link href="/shop" className="bg-black text-white rounded-full px-4 py-1.5 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">Starter $5 →</Link>
              <Link href="/shop" className="bg-zinc-800 text-white rounded-full px-4 py-1.5 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">Premium $15 →</Link>
              <Link href="/shop" className="bg-white text-black border border-black rounded-full px-4 py-1.5 text-[12px] font-medium w-[180px] text-center whitespace-nowrap">Exclusive $30 • 2 Slots →</Link>
            </div>
            <p className="text-zinc-500 text-[10px] leading-relaxed mt-1.5 text-left w-full">
              Starter = Download Only<br />
              Premium = We Set It Up For You<br />
              Exclusive = Only For You • 2 Slots Only
            </p>
          </div>
        </div>

        <Link href="/shop" className="inline-block text-gray-400 mt-5 text-sm">← Back to Shop</Link>
      </div>
    </div>
  );
}
