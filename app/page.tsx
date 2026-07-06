

  export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-green-900 to-black">
        <p className="text-red-500 font-bold animate-pulse mb-4">⚠️ Only 37 Spots Left Today</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Get My FREE CPA Training That Made Me $1,247/Month
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Step-by-step system to start getting paid affiliate leads in 48 hours. 
          No experience. No ads. No BS.
        </p>
        
        <a 
          href="https://appsave.site/cl/v/j7nqqp" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-black px-10 py-5 rounded-xl text-xl font-bold inline-block shadow-lg shadow-green-500/50"
        >
          🔓 Unlock Free Training Now
        </a>
        <p className="text-sm text-gray-400 mt-3">Complete 1 quick step to get instant access</p>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What You Get Inside:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "The exact CPA networks that approve beginners",
            "3 landing pages that convert at 42%+",
            "Traffic sources that cost $0 to start",
            "My personal copy templates for emails & ads"
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
            {name: "Tunde A.", result: "Made my first $320 in 2 weeks"},
            {name: "Sarah K.", result: "Quit my 9-5 after month 3"},
            {name: "David P.", result: "Easiest money I've ever 
          <details className="bg-gray-900 p-4 rounded-lg">
            <summary className="font-bold cursor-pointer">Is this legal?</summary>
            <p className="mt-2 text-gray-3promote legit CPA offers from OGAds and other networks.</p>
          </details>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Unlock It?</h2>
        <a 
          href="https://appsave.site/cl/v/j7nqqp" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-black px-10 py-5 rounded-xl text-xl font-bold inline-block"
        >
          Get Instant Access
        </a>
        <p className="text-xs text-gray-500 mt-6">© 2026 LeadVaultsHub. This is not financial advice.</p>
      </section>
    </main>
