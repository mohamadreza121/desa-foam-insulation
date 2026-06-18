import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteProgress from "@/components/animations/RouteProgress";

const siteUrl = "https://desafoaminsulation.com";

const siteDescription =
  "Professional spray foam insulation, attic insulation, batt insulation, drywall, fireproofing, steel framing, and foam slab jacking services in Toronto and the GTA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DESA Foam Insulation Toronto & GTA",
    template: "%s | DESA Foam Insulation",
  },

  description: siteDescription,

  keywords: [
    "Spray Foam Insulation Toronto",
    "Foam Insulation Toronto",
    "Attic Insulation Toronto",
    "Batt Insulation Toronto",
    "Drywall Contractor Toronto",
    "Fireproofing Toronto",
    "Steel Framing Toronto",
    "Foam Slab Jacking Toronto",
    "Insulation Contractor GTA",
    "DESA Foam Insulation",
  ],

  authors: [
    {
      name: "DESA Foam Insulation",
      url: siteUrl,
    },
  ],

  creator: "DESA Foam Insulation",
  publisher: "DESA Foam Insulation",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "DESA Foam Insulation Toronto & GTA",
    description: siteDescription,
    url: siteUrl,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: "/images/desa-logo.png",
        width: 1200,
        height: 630,
        alt: "DESA Foam Insulation Toronto and GTA",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DESA Foam Insulation Toronto & GTA",
    description: siteDescription,
    images: ["/images/desa-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <RouteProgress />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}