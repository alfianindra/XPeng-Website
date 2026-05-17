import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/xpeng-sunter/**', // replace with your Cloudinary cloud name
      },
    ],
  },
}

export default nextConfig
