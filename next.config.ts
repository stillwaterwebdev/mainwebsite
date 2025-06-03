import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    domains: [],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
