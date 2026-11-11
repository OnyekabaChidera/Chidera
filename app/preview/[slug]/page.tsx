import { landers } from "@/data/landers";
import Link from "next/link";

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lander = landers.find((l) => l.slug === slug);
  if (!lander) return <div className="p-10 bg-black text-white min-h-screen">Not found</div>;

  const isReady = lander.slug === "sugar-balance";

  // If it's Sugar Balance, show the real demo
  if (isReady) {
    return (
      <div className="min-h-screen bg-black text-white p-6 text-center">
        <h1 className="text-3xl font-bold">{lander.name} — Live Preview</h1>
        <p className="text-gray-400 mt-2">{lander.headline}</p>
        <Link href="/sugar-balance" className="inline-block bg-white text-black rounded-full px-6 py-3 mt-6">Open Real Demo →</Link>
        <br />
        <Link href="/shop" className="inline-block text-gray-400 mt-4">← Back to Shop</Link>
      </div>
    );
  }

  // If it's NOT ready — Coming Soon INSIDE the page
  return (
    <div className="min-h-screen bg-black text-white p-6 text-center flex flex-col justify-center items-center">
      <p className="text-sm bg-zinc-800 px-3 py-1 rounded-full">{lander.name}</p>
      <h1 className="text-4xl font-bold mt-6">Coming Soon</h1>
      <p className="text-gray-400 mt-3 max-w-md">{lander.headline}</p>
      <p className="text-gray-500 mt-2 max-w-md">We are still building this template. Check back soon.</p>
      <Link href="/shop" className="bg-white text-black rounded-full px-6 py-3 mt-8">← Back to Shop</Link>
    </div>
  );
}
