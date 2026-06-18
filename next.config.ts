import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/category/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/spray-foam-insulation",
        destination: "/services/spray-foam-insulation",
        permanent: true,
      },
      {
        source:
          "/experienced-builders-across-ontario-choose-to-work-with-desa-foam-insulation",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/batt-insulation",
        destination: "/services/batt-insulation",
        permanent: true,
      },
      {
        source: "/tag/steel-framing-ontario",
        destination: "/services/steel-framing",
        permanent: true,
      },
      {
        source: "/drywall",
        destination: "/services/drywall",
        permanent: true,
      },
      {
        source: "/attic-insulation",
        destination: "/services/attic-insulation",
        permanent: true,
      },
      {
        source: "/attic-insulation-removal",
        destination: "/services/attic-insulation-removal",
        permanent: true,
      },
      {
        source: "/foam-slab-jacking",
        destination: "/services/foam-slab-jacking",
        permanent: true,
      },
      {
        source: "/fireproofing",
        destination: "/services/fireproofing",
        permanent: true,
      },
      {
        source: "/steel-framing",
        destination: "/services/steel-framing",
        permanent: true,
      },
      {
        source: "/tag/building-safety",
        destination: "/services/fireproofing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;