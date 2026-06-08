import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteProgress from "@/components/animations/RouteProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://desafoaminsulation.com"),

  title: "DESA Foam Insulation Toronto",
  description:
    "Professional insulation, drywall, fireproofing, steel framing, attic insulation, batt insulation, and foam slab jacking services in Toronto and the GTA.",

  keywords: [
    "Foam Insulation Toronto",
    "Spray Foam Insulation Toronto",
    "Attic Insulation Toronto",
    "Batt Insulation Toronto",
    "Drywall Toronto",
    "Fireproofing Toronto",
    "Steel Framing Toronto",
    "Foam Slab Jacking Toronto",
    "DESA Foam Insulation",
  ],

  openGraph: {
    title: "DESA Foam Insulation Toronto",
    description:
      "Professional insulation, drywall, fireproofing, steel framing, attic insulation, batt insulation, and foam slab jacking services in Toronto and the GTA.",
    url: "https://desafoaminsulation.com",
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: "/images/desa-logo.png",
        width: 1200,
        height: 630,
        alt: "DESA Foam Insulation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DESA Foam Insulation Toronto",
    description:
      "Professional insulation, drywall, fireproofing, steel framing, attic insulation, batt insulation, and foam slab jacking services in Toronto and the GTA.",
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

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}