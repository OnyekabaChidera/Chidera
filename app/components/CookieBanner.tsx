"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("leadvaultshub-cookie-consent")) {
      setTimeout(() => setShow(true), 600);
    }
  }, []);

  const choose = (val: string) => {
    localStorage.setItem("leadvaultshub-cookie-consent", val);
    setShow(false);
  };

  if (!show) return null;

  return (
   <div className="fixed bottom-4 left-4 right-4 z-50 bg-black border border-white/10 rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
      <p className="font-serif text-[17px] font-bold text-white mb-1.5">
        🍪 We value your privacy
      </p>
      <p className="text-[14.5px] leading-[1.65] text-slate-300 mb-4">
        LeadVaultsHub uses essential cookies to run the site, plus analytics cookies to measure traffic and improve your experience.{" "}
        <a href="/privacy" className="text-green-400 underline font-bold hover:text-green-300">
          Privacy & cookies
        </a>
      </p>
      <div className="flex gap-2.5 justify-end">
        <button
          onClick={() => choose("declined")}
          className="bg-transparent text-slate-200 border border-slate-600 rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer hover:bg-white/5"
        >
          Decline
        </button>
        <button
          onClick={() => choose("accepted")}
          className="bg-green-600 text-white rounded-full px-6 py-2.5 text-sm font-bold cursor-pointer shadow-[0_4px_14px_rgba(22,163,74,0.4)] hover:bg-green-500"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
