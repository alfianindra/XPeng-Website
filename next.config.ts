import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's-cdn.xpeng.com',
      },
    ],
  },
};

export default nextConfig;
