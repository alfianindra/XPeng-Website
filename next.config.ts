import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/cavemine/**',
      },
      {
        protocol: 'https',
        hostname: 's-cdn.xpeng.com',
        pathname: '/commoncms/**',
      },
    ],
  },
}

export default nextConfig
