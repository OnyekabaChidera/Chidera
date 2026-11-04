"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept all"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="leadvaultshub-cookie-consent"
      style={{
        background: "#12161c",
        borderTop: "1px solid #22c55e",
        borderRadius: "12px 12px 0 0",
        alignItems: "center",
      }}
      contentStyle={{ flex: "1 1 auto", margin: "0 15px 0 0" }}
      buttonStyle={{
        background: "#16a34a",
        color: "#fff",
        fontWeight: "700",
        borderRadius: "8px",
        padding: "10px 20px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#fff",
        border: "1px solid #4b5563",
        borderRadius: "8px",
        padding: "10px 20px",
      }}
    >
      We value your privacy. LeadVaultsHub uses essential cookies to run the site, plus analytics cookies to measure traffic.{" "}
      <a href="/privacy-policy" style={{ color: "#4ade80", textDecoration: "underline", fontWeight: "600" }}>
        Privacy & cookies
      </a>
    </CookieConsent>
  );
}
