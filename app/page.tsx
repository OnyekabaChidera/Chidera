"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clickid, setClickid] = useState("");
  const LOCKER_URL = "https://saveapp.store/cl/i/j7nqqp"; // Your OGAds locker

  // Grab clickid from URL so we can pass it to locker for tracking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cid = params.get("clickid") || params.get("subid") || "";
    setClickid(cid);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("Please enter your name and email");
    
    // 1. Log lead - you can connect this to email tool later
    console.log("New Lead:", name, email, "ClickID:", clickid);
    
    // 2. Redirect to locker with name, email, clickid attached
    window.location.href = `${LOCKER_URL}?clickid=${clickid}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-green-900 to-black">
        <p className="text-red-500 font-bold animate-pulse mb-4">⚠️ Only 37 Spots Left This Week</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Get My FREE Affiliate Marketing Training That Made Me $1,247/Month
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Step-by-step system to start earning affiliate commissions in 48 hours. 
          No experience. No ads. No BS.
        </p>
        
        {/* LEAD FORM - NAME + EMAIL */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-800 border-gray-600 text-white text-center outline-none focus:border-green-500"
            required
          />
          <input
            type="email"
            placeholder="Enter your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-800 border-gray-600 text-white text-center outline-none focus:border-green-500"
            required
          />
          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black px-10 py-5 rounded-xl text-xl font-bold shadow-lg shadow-green-500/50 transition"
          >
            🔓 Unlock Free Training Now
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-3">Complete 1 quick offer after this to get instant access</p>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What You Get Inside:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "The best affiliate networks + products to promote as a beginner",
            "3 landing pages that convert at 40%+",
            "Free traffic methods to get your first sales",
            "My personal email templates to make sales on autopilot"
          ].map((benefit) => (
            <div key={benefit} className="bg-gray-900 p-5 rounded-lg border-gray-800">
              ✅ {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-16 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Real Students. Real Results.</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {name: "Tunde A.", result: "Made my first $320 commission in 2 weeks"},
            {name: "Sarah K.", result: "Earned $1,200 my first month"},
            {name: "David P.", result: "Easiest way I've made money online"}
          ].map((t) => (
            <div key={t.name} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <p className="text-yellow-400 mb-2">★★★</p>
              <p>"{t.result}"</p>
              <p className="text-gray-400 text-sm mt-3">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Unlock It?</h2>
        <p className="text-gray-400 mb-6">Enter your name + email above to start</p>
        <p className="text-xs text-gray-500 mt-6">© 2026 LeadVaultsHub. This is not financial advice.</p>
      </section>
    </main>
  )
}
