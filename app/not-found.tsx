import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white p-6 text-center flex flex-col justify-center items-center">
      <p className="text-7xl font-bold text-zinc-800">404</p>
      <h1 className="text-3xl font-bold mt-4">This page got lost</h1>
      <p className="text-gray-400 mt-3 max-w-md">
        In Progress ⏳
        Let's take you back to something beautiful.
      </p>

      <div className="flex gap-3 mt-8">
        <Link href="/shop" className="bg-white text-black rounded-full px-6 py-3 font-medium">
          Back to Shop
        </Link>
        <Link href="/contact" className="bg-zinc-800 text-white rounded-full px-6 py-3 font-medium">
          Contact Us
        </Link>
      </div>

      <p className="text-gray-500 text-sm mt-8">
        Need help? contact@leadvaultshub.com
      </p>
    </div>
  );
}
