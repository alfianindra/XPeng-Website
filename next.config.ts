import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      // XPENG official product photos
      {
        protocol: 'https',
        hostname: 's-cdn.xpeng.com',
      },
      // Cloudinary — dealer photos, showroom images, promo banners
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/xpeng-sunter/**', // replace with your Cloudinary cloud name
      },
    ],
  },
}

export default nextConfig
