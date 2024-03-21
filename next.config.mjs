/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bungie.net',
        port: ''
      }
    ]
  }
}

export default nextConfig
