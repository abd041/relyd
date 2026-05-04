import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website-media.deel.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
