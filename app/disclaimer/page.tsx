import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Affiliate and Earnings Disclaimer for LeadVaultsHub",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p><strong>Last updated: October 6, 2026</strong></p>
        <p>
          LeadVaultsHub (leadvaultshub.com) participates in affiliate programs. If you click a link and purchase, we may earn a commission at no extra cost to you.
        </p>
        <p>
          <strong>Earnings Disclaimer:</strong> Any income examples or strategies shared on this site are based on our own experience and testing. We do not guarantee you will make money. Your results depend on your effort, skills, and market conditions.
        </p>
        <p>
          This site does not provide financial, legal, or professional advice. Always do your own research.
        </p>
      </div>
    </div>
  );
}
