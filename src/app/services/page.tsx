import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const siteUrl = "https://desafoaminsulation.com";
const pageUrl = `${siteUrl}/services`;

const pageTitle = "Insulation & Construction Services Toronto & GTA";

const pageDescription =
  "Explore spray foam, attic and batt insulation, drywall, steel framing, fireproofing, and foam slab jacking services across Toronto and the GTA.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: `${pageTitle} | DESA Foam Insulation`,
    description: pageDescription,
    url: pageUrl,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: "/images/services/spray-foam-hero.jpeg",
        alt: "DESA Foam Insulation services in Toronto and the GTA",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | DESA Foam Insulation`,
    description: pageDescription,
    images: ["/images/services/spray-foam-hero.jpeg"],
  },
};

const serviceItems = [
  {
    name: "Spray Foam Insulation",
    url: `${siteUrl}/services/spray-foam-insulation`,
  },
  {
    name: "Drywall",
    url: `${siteUrl}/services/drywall`,
  },
  {
    name: "Batt Insulation",
    url: `${siteUrl}/services/batt-insulation`,
  },
  {
    name: "Attic Insulation",
    url: `${siteUrl}/services/attic-insulation`,
  },
  {
    name: "Attic Insulation Removal",
    url: `${siteUrl}/services/attic-insulation-removal`,
  },
  {
    name: "Steel Framing",
    url: `${siteUrl}/services/steel-framing`,
  },
  {
    name: "Fireproofing",
    url: `${siteUrl}/services/fireproofing`,
  },
  {
    name: "Foam Slab Jacking",
    url: `${siteUrl}/services/foam-slab-jacking`,
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: serviceItems.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: service.url,
        item: {
          "@type": "Service",
          name: service.name,
          url: service.url,
          provider: {
            "@type": "LocalBusiness",
            name: "DESA Foam Insulation",
            url: siteUrl,
            telephone: "+16479602090",
            email: "dee@desafoaminsulation.com",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <ServicesClient />
    </>
  );
}