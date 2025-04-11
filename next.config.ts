import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "codervai.vercel.app",
      },
      {
        hostname: "olova.js.org",
      },
      {
        hostname: "iili.io",
      },
    ],
  },
  // Enable JSON imports
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
};

export default nextConfig;
