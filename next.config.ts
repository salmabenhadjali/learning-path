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
        hostname: '*',
        pathname: '/**', // Allows any path
      },
      // Pattern for HTTPS
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**', // Allows any path
      },
    ],
  }
};

export default nextConfig;
