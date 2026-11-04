"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("leadvaultshub-cookie-consent")) {
      setShow(true);
    }
  }, []);

  const choose = (val: string) => {
    localStorage.setItem("leadvaultshub-cookie-consent", val);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "#12161c", borderTop: "1px solid #22c55e", padding: "16px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
      <p style={{ color: "#fff", fontSize: "14px", flex: "1 1 300px", margin: 0 }}>
        We value your privacy. LeadVaultsHub uses essential cookies to run the site, plus analytics cookies to measure traffic.{" "}
        <a href="/privacy-policy" style={{ color: "#4ade80", textDecoration: "underline", fontWeight: 600 }}>Privacy & cookies</a>
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => choose("declined")} style={{ background: "transparent", color: "#fff", border: "1px solid #4b5563", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" }}>Decline</button>
        <button onClick={() => choose("accepted")} style={{ background: "#16a34a", color: "#fff", fontWeight: 700, border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" }}>Accept all</button>
      </div>
    </div>
  );
}
