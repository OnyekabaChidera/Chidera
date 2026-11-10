export const metadata = {
  title: "Your Vault Is Ready | LeadVaultsHub",
  robots: { index: false, follow: false },
};

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-gradient-to-b from-[#0f1c15] to-[#0a130e] border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">🔒</div>
        <h1 className="font-serif text-2xl font-bold mb-2">Your Vault Is Ready</h1>
        <p className="text-slate-400 text-[14.5px] mb-6 leading-relaxed">
          You signed up for the Training Vault — templates, checklists & walkthroughs to start affiliate marketing.
        </p>

        <div className="bg-[#0c1610] border border-green-500/20 rounded-xl p-4 text-left text-sm space-y-2 mb-6 text-slate-300">
          <p>✅ What's inside: starter templates guides</p>
          <p>✅ Price: Free</p>
          <p>✅ Why locked: To stop bots from stealing it</p>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          Complete one quick verification step to unlock instant access. Takes ~30 seconds.
        </p>

        <a
          href="https://saveapp.store/cl/i/j7nqqp"
          className="block w-full bg-gradient-to-r from-green-400 to-green-500 text-[#030a05] font-bold text-[15px] py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all"
        >
          Unlock My Vault →
        </a>

        <p className="text-[11px] text-slate-500 mt-4">
          Having issues? Email us at admin@leadvaultshub.com
        </p>
      </div>
    </main>
  );
}
