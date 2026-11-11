export const metadata = {
  title: "Support Healthy Blood Sugar Levels With A Simple Daily Routine",
  description: "A simple 3-step daily routine busy people use to support balanced energy and healthier habits at home.",
};

export default function SugarBalance() {
  return (
    <main className="min-h-screen bg-white text-black max-w-[480px] mx-auto px-4 pb-0 font-sans">
      {/* TOP BANNER */}
      <div className="bg-[#0E7C74] text-white text-center text-[17px] leading-snug font-medium px-6 py-4 mt-3">
        For People Watching Their Sugar —Check<br />If This Works For You.
      </div>

      <p className="text-center text-[#0E7C74] text-[12px] font-bold tracking-[0.08em] mt-7">
        HEALTHY BLOOD SUGAR SUPPORT FOR BUSY PEOPLE.
      </p>

      <h1 className="text-center text-[29px] leading-[1.25] font-bold mt-4 px-1">
        Support Healthy Blood Sugar Levels With A Simple Daily Routine.
      </h1>

      <p className="text-center text-[16px] leading-[1.5] mt-4 px-2">
        A simple 3-step daily routine busy people use to support balanced energy and healthier habits at home.
      </p>

      {/* FIXED IMAGE - tries your photo, if it fails shows backup, never shows broken icon */}
      <img
        src="/images/sugar-balance.jpg?v=2"
        alt="Woman in kitchen with healthy vegetables"
        className="w-full mt-6 rounded-lg object-cover"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (!img.src.includes("unsplash")) {
            img.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop";
          }
        }}
      />

      <a href="https://YOUR-AFFILIATE-LINK-HERE" target="_blank" className="block text-center bg-[#0E7C74] text-white text-[14px] font-medium py-3.5 px-4 rounded-full mt-5 mx-2">
        Get My Sugar Balance Plan —&gt;
      </a>
      <p className="text-center text-gray-500 text-[13px] mt-3">Free to check • Takes 2 minutes.</p>

      {/* DOES THIS SOUND LIKE YOU */}
      <div className="bg-[#F7F7F7] px-5 py-6 mt-8">
        <h2 className="text-center text-[#0E7C74] text-[17px] font-medium">Does This Sound Like You?</h2>
        <ul className="mt-5 space-y-5 text-[16px] leading-[1.45] font-medium">
          <li>•Energy drops after meal and you feel tired and flat when you want to stay focused?</li>
          <li>•Sugar craving that is hard to control, they show up at the worst times, even when you’re trying to eat well.</li>
          <li>•Hard to stay consistent when you’re busy/healthy slips when your day is full?</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <h2 className="text-center text-[#0E7C74] text-[17px] font-medium mt-8">HOW IT WORKS:</h2>
      <h3 className="text-center font-bold text-[18px] mt-3">Start In Three Simple Steps:</h3>

      <div className="text-center space-y-6 mt-6 px-4">
        <div>
          <p className="font-medium text-[16px]">1. Check Your Plan</p>
          <p className="text-[16px] leading-snug mt-1">Tap the button to see if this routine fits you.</p>
        </div>
        <div>
          <p className="font-medium text-[16px]">2. Follow The Daily Routine</p>
          <p className="text-[16px] leading-snug mt-1">Eat, drink water and move. Simple easy steps you can do at home.</p>
        </div>
        <div>
          <p className="font-medium text-[16px]">3. Stay Consistent</p>
          <p className="text-[16px] leading-snug mt-1">Small daily habits adds up to balanced energy over time.</p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-[#E3F0FF] px-5 py-6 mt-8 text-center">
        <h2 className="font-bold text-[18px]">What People Are Saying:</h2>
        <p className="text-[15px] leading-relaxed mt-3 font-medium">
          [PASTE 2-3 TESTIMONIALS FROM YOUR AFFILIATE PRODUCT SALES PAGE HERE. (Include name, age, city, result)]
        </p>
      </div>

      {/* BENEFITS */}
      <h2 className="text-center text-[#0E7C74] text-[17px] font-medium mt-8">Benefits:</h2>
      <ul className="text-center space-y-4 mt-4 px-4 text-[16px] leading-snug font-medium">
        <li>• Simple routine steps you can follow at home.</li>
        <li>•No strict diet or hard workout</li>
        <li>•Helps you stay consistent everyday.</li>
      </ul>

      {/* FINAL CTA */}
      <div className="bg-[#EAF6F5] px-5 py-5 mt-8 text-center">
        <p className="font-bold text-[14px] leading-snug">Ready To Check If Sugar Balance Is Right For You?</p>
      </div>

      <a href="https://YOUR-AFFILIATE-LINK-HERE" target="_blank" className="block text-center bg-[#0E7C74] text-white text-[17px] font-medium py-3.5 px-4 rounded-full mt-4 mx-2">
        Get My Sugar Balance Plan —&gt;
      </a>

      {/* FOOTER */}
      <div className="bg-black text-white text-center px-4 py-3 mt-5 mb-4">
        <p className="text-[12px]">©Sugar Balance | All Rights Reserved.</p>
        <p className="text-[12px] mt-1">This isn’t a Medical Advice. Results May Vary.</p>
      </div>
    </main>
  );
}
