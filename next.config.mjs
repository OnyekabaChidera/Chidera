/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
