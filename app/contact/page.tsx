import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact LeadVaultsHub support - Affiliate marketing tools, guides, and free traffic strategies. We reply within 24-48 hours.",
};

const faqs = [
  {
    question: "How fast do you reply?",
    answer: "We reply to all emails within 24-48 hours, Monday to Friday. Weekend replies may take a bit longer."
  },
  {
    question: "Do you offer 1-on-1 affiliate coaching?",
    answer: "Not at the moment. All our guides, tools, and landing page vault are free on leadvaultshub.com for beginners to learn at their own pace."
  },
  {
    question: "Are your tools and templates really free?",
    answer: "Yes. All traffic strategies, checklists, and landing page templates in the vault are 100% free. We earn a small commission if you buy through our affiliate links."
  },
  {
    question: "Can I submit a guest post or tool?",
    answer: "Yes! Email us at support@leadvaultshub.com with your topic or tool details. We only accept content related to affiliate marketing."
  },
  {
    question: "Do you provide financial advice?",
    answer: "No, not the moment. LeadVaultsHub is for educational purposes only. We share marketing strategies, not financial or investment advice."
  }
];

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-300 mb-8">
        Have a question about our guides or tools? We reply within 24-48 hours.
      </p>

      <div className="bg-[#1a212b] p-6 rounded-xl mb-12">
        <p className="mb-2"><strong>Email:</strong> support@leadvaultshub.com</p>
        <p className="mb-2"><strong>Website:</strong> https://leadvaultshub.com</p>
        <p className="text-sm text-gray-400 mt-4">
          We do not provide financial advice. For business inquiries only.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-[#12161c] border border-[#1f2a38] p-5 rounded-xl group open:bg-[#1a212b] transition">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="text-gray-300 mt-3 text-[15px] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
