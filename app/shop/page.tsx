export const metadata = {
  title: "Shop Landers | LeadVaultsHub",
  description: "High-converting landing page templates for affiliate marketers. Coming soon.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-4 py-16 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-roboto-slab)]">Shop Landers</h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          High-converting landing page templates for Weight Loss, Health, AI Tools and Make Money offers. We&apos;re building the first set now.
        </p>

        <div className="mt-10 inline-block bg-white/5 border border-white/10 rounded-2xl px-8 py-6">
          <p className="text-lg font-medium">First landers dropping soon🚨</p>
          <p className="text-sm text-gray-400 mt-1">No fake listings. We only list landers we&apos;ve actually built and tested.</p>
        </div>

        <div className="mt-8">
          <a href="/networks" className="inline-block bg-white text-black font-medium px-6 py-3 rounded-full text-[15px]">
            Start with Step 1: Join a Network →
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Want to be notified? Check back here or follow our Blog for launch updates.
        </p>
      </div>
    </main>
  );
}
