import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Webpack alias
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: path.resolve(__dirname, "node_modules/three"),
    };
    return config;
  },

  // ✅ Images remote patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cheeltech.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ Turbopack fix for Next.js 16+
  turbopack: {},

  reactStrictMode: true, // optional but recommended
};

export default nextConfig;
