export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
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
            We use Google to display advertisements. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this website or other websites.
          </p>
          <p>
            Google uses cookies to serve ads. You may opt out of personalized advertising by visiting Google Ads Settings at https://www.google.com/settings/ads and www.aboutads.info/choices.
          </p>
          <p>Third-party vendors and ad networks may also use cookies, web beacons, and similar technologies.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">4. Affiliate Disclosure</h2>
          <p>
            LeadVaultsHub participates in affiliate programs. Some links on this site maybe affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Newsletter data is retained until you unsubscribe.
          </p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">6. Your Rights (GDPR and CCPA)</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-green-500">
            <li>Right to access, correct, or delete your personal information.</li>
            <li>Right to object to or restrict certain processing.</li>
            <li>Right to data portability.</li>
            <li>Right to withdraw consent at any time.</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@leadvaultshub.com. We will respond within 30 days. We do not sell your personal information.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">8. Childrens Privacy</h2>
          <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">9. Security</h2>
          <p>We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the Internet is 100 percent secure.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">10. Changes To This Policy</h2>
          <p>We may update this Privacy Policy from time to time by posting the new version on this page.</p>

          <h2 className="font-serif text-xl font-bold text-white mt-10 mb-3">11. Contact Us</h2>
          <p>Email: privacy@leadvaultshub.com<br/>Website: https://leadvaultshub.com/contact</p>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-500">
            <p>© 2026 LeadVaultsHub.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
