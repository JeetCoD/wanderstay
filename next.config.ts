import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qjttiljqclrrevhltexm.supabase.co",
      },
    ],
  },
};

export default nextConfig;
