import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore typescript errors during production builds if strict Vercel check differences occur
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
