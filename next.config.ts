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
    ],
  },
};

export default nextConfig;
