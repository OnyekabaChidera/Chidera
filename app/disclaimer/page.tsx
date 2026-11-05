import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Affiliate and Earnings Disclaimer for LeadVaultsHub",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p><strong>Last updated: November 5, 2026</strong></p>

        <p>
          LeadVaultsHub (leadvaultshub.com) is a personal blog that shares information about affiliate marketing, online business, and ways to earn money online in Nigeria and diaspora.
        </p>

        <h2 className="text-xl font-bold pt-4">Affiliate Disclosure</h2>
        <p>
          Some links on this site are affiliate links. If you click a link and make a purchase or sign up, we may earn a commission at no extra cost to you. This helps support the site and allows us to keep creating free content.
        </p>

        <h2 className="text-xl font-bold pt-4">Earnings Disclaimer</h2>
        <p>
          Any income examples, screenshots, or strategies shared on this site are based on our own experience and testing. We do not guarantee you will make money. Your results depend on your effort, skills, experience, and market conditions. Most people who start affiliate marketing do not make significant income.
        </p>

        <h2 className="text-xl font-bold pt-4">Not Financial Advice</h2>
        <p>
          This site does not provide financial, legal, tax, or professional advice. The information here is for educational purposes only. Always do your own research before spending money or signing up for any program.
        </p>

        <h2 className="text-xl font-bold pt-4">Accuracy of Information</h2>
        <p>
          We try to keep information accurate and up to date, but affiliate programs, commission rates, and payment methods can change at any time. Always check the official website of any program before you join.
        </p>

        <h2 className="text-xl font-bold pt-4">External Links</h2>
        <p>
          We link to third-party websites. We are not responsible for the content, policies, or practices of those websites.
        </p>

        <h2 className="text-xl font-bold pt-4">Changes To This Disclaimer</h2>
        <p>
          We may update this disclaimer at any time. The updated version will be posted on this page.
        </p>

        <p>
          If you have any questions about this disclaimer, please reach us at <Link href="/contact" className="underline">Contact</Link>.
        </p>
      </div>
    </div>
  );
}
