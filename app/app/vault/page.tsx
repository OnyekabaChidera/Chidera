export const metadata = {
  title: "Your Vault Is Ready | LeadVaultsHub",
  robots: { index: false, follow: false },
};

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-[#0a1f14] text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-[#122a1d] border border-green-800/50 rounded-2xl p-8 text-center shadow-2xl">
        <div className="text-4xl mb-3">🔒</div>
        <h1 className="text-2xl font-bold mb-2">Your Vault Is Ready</h1>
        <p className="text-green-200/80 text-sm mb-6">
          You signed up for the Training Vault — checklists & walkthroughs to start affiliate marketing.
        </p>

        <div className="bg-black/30 rounded-xl p-4 text-left text-sm space-y-2 mb-6">
          <p>✅ What's inside: 7 starter templates</p>
          <p>✅ Price: Free</p>
          <p>✅ Why locked: To stop bots from stealing it</p>
        </div>

        <p className="text-xs text-white/60 mb-4">
          Complete one quick verification step to unlock instant access. Takes ~30 seconds.
        </p>

        <a
          href="https://saveapp.store/cl/i/j7nqqp"
          className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3.5 rounded-xl text-center"
        >
          Unlock My Vault →
        </a>

        <p className="text-[11px] text-white/40 mt-4">
          Having issues? Email us at admin@leadvaultshub.com
        </p>
      </div>
    </main>
  );
}
