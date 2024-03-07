/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'default',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bungie.net'
      }
    ]
  }
}

export default nextConfig
