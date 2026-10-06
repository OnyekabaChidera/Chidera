import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact LeadVaultsHub support",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-300 mb-6">
        Have a question about our guides or tools? We reply within 24-48 hours.
      </p>
      <div className="bg-[#1a212b] p-6 rounded-xl">
        <p className="mb-2"><strong>Email:</strong> support@leadvaultshub.com</p>
        <p className="mb-2"><strong>Website:</strong> https://leadvaultshub.com</p>
        <p className="text-sm text-gray-400 mt-4">
          We do not provide financial advice. For business inquiries only.
        </p>
      </div>
    </div>
  );
}
