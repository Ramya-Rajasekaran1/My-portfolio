import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Explicitly set the root to the current directory to avoid inference issues
  experimental: {
    // @ts-ignore - This might be needed for some versions
    turbo: {
      root: "./",
    },
  },
};

export default nextConfig;
