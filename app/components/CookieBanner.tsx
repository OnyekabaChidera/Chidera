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
    <div style={{ position: "fixed", bottom: "16px", left: "16px", right: "16px", zIndex: 50, background: "#141a22", border: "1px solid #22c55e33", borderTop: "3px solid #22c55e", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.6)", fontFamily: "'Roboto Slab', Georgia, serif" }}>
      <p style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: 700, color: "#fff" }}>🍪 We value your privacy</p>
      <p style={{ margin: "0 0 16px", fontSize: "14.5px", lineHeight: "1.6", color: "#d1d5db", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        LeadVaultsHub uses essential cookies to run the site, plus analytics cookies to measure traffic and improve your experience.{" "}
        <a href="/privacy-policy" style={{ color: "#4ade80", textDecoration: "underline", fontWeight: 700 }}>Privacy & cookies</a>
      </p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
        <button onClick={() => choose("declined")} style={{ background: "transparent", color: "#e5e7eb", border: "1px solid #4b5563", borderRadius: "999px", padding: "10px 22px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Decline</button>
        <button onClick={() => choose("accepted")} style={{ background: "#16a34a", color: "#fff", border: "none", borderRadius: "999px", padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 14px rgba(22,163,74,0.4)" }}>Accept all</button>
      </div>
    </div>
  );
}
