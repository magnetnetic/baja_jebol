/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
