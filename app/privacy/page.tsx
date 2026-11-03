export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      {/* Header - same as HomeClient with 15% glow */}
      <nav className="sticky top-0 z-50 bg-[#030a05]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[780px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="relative flex items-center gap-2.5 no-underline">
            <img src="/logo.png.jpg" alt="LeadVaultsHub" className="w-8 h-8 rounded-lg object-cover relative z-10" />
            <span className="text-lg font-bold tracking-tight relative z-10">
              <span className="text-white">LeadVaults</span>
              <span className="text-[#86efac]">Hub</span>
            </span>
            <span className="pointer-events-none absolute left-[82%] top-[75%] h-[16px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e]/15 blur-[8px] z-0" />
          </a>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition">Blog</a>
            <a href="/" className="text-sm font-medium text-slate-300 hover:text-white transition">Home</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <h1 className="font-serif text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: October 17, 2026</p>

        <div className="space-y-8 text-[16px] leading-[1.8] text-slate-300">
          <p>
            At LeadVaultsHub (leadvaultshub.com), we respect your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and your choices.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">1. Information We Collect</h2>
          <p>We collect information you voluntarily provide and information automatically collected when you use our site:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-green-500">
            <li><strong className="text-white">Contact Information:</strong> First name and email address when you subscribe to our Training Vault or contact us.</li>
            <li><strong className="text-white">Usage Data:</strong> Pages visited, time on site, device type, browser type, and approximate location via cookies and similar technologies.</li>
            <li><strong className="text-white">Cookies:</strong> We and our advertising partners use cookies to improve user experience and serve relevant ads.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-green-500">
            <li>To provide access to guides, templates, and the Training Vault.</li>
            <li>To send educational content and updates (you can unsubscribe anytime).</li>
            <li>To improve our website content and user experience.</li>
            <li>To monitor, prevent fraud, and ensure site security.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">3. Cookies and Advertising (Google AdSense)</h2>
          <p>
            We use Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies, including the DoubleClick DART cookie, to serve ads based on your prior visits to this website or other websites.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">Google Ads Settings</a>. You can also opt out of third-party vendor use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">www.aboutads.info</a>.
          </p>
          <p>Third-party vendors and ad networks may also use cookies, web beacons, and similar technologies.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">4. Affiliate Disclosure</h2>
          <p>
            LeadVaultsHub participates in affiliate marketing programs. Some links on this site maybe affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend products and services we believe may add value to our readers.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Newsletter data is retained until you unsubscribe.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">6. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-green-500">
            <li>Right to access, correct, or delete your personal information.</li>
            <li>Right to object to or restrict certain processing.</li>
            <li>Right to data portability.</li>
            <li>Right to withdraw consent at any time (unsubscribe link in every email).</li>
          </ul>
          <p>
            To exercise these rights, contact us at privacy@leadvaultshub.com. We will respond within 30 days. California residents may also have rights under CCPA to know what personal information is collected and to opt-out of sale (we do not sell your personal information).
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">8. Children&apos;s Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us for removal.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">9. Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">10. Changes To This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: <a href="mailto:privacy@leadvaultshub.com" className="text-green-400">privacy@leadvaultshub.com</a><br />
            Website: https://leadvaultshub.com/contact
          </p>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-500">
            <p>© 2026 LeadVaultsHub.com · This policy is for informational purposes and does not constitute legal advice.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
