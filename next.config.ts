import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // deprecated
    // domains: [
    //   "images.pexels.com",
    // ],
    remotePatterns: [
      // Pattern for HTTP
      {
        protocol: 'http',
        hostname: 'images.pexels.com',
        pathname: '/**', // Allows any path
      },
      // Pattern for HTTPS
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**', // Allows any path
      },
    ],
  }
};

export default nextConfig;
