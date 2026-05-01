import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions || process.env.NEXT_PUBLIC_BASE_PATH) {
  // Use the repository name for GitHub Pages
  const repo = "My-portfolio"; 
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || `/${repo}`;
  assetPrefix = `${basePath}/`;
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
