import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "raw.githubusercontent.com", 
    ],
    remotePatterns: [
      {
        // Hostname cũ
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
        pathname: '/coins/images/**',
      },
      {
        // Hostname MỚI
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '/coins/images/**', // Bạn có thể điều chỉnh pathname nếu cần
      },
    ],
  },
};

export default nextConfig;
