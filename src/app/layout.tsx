import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteProgress from "@/components/animations/RouteProgress";

export const metadata: Metadata = {
  title: "DESA Foam Insulation Toronto",
  description:
    "Professional insulation, drywall, fireproofing, and steel framing services in Toronto.",

  keywords: [
    "Foam Insulation Toronto",
    "Attic Insulation Toronto",
    "Drywall Toronto",
    "Fireproofing Toronto",
  ],
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