import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const siteUrl = "https://desafoaminsulation.com";
const pageSlug = "/about";
const pageUrl = `${siteUrl}${pageSlug}`;
const pageImage = "/images/about/about-1.png";

const pageTitle = "About Our Insulation Company in Toronto & GTA";
const socialTitle = "About DESA Foam Insulation | Toronto & GTA";

const pageDescription =
  "Learn about DESA Foam Insulation, a Toronto and GTA insulation and construction team with over 20 years of experience in spray foam, drywall, attic insulation, steel framing, fireproofing, and concrete leveling.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: pageSlug,
  },

  openGraph: {
    title: socialTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: pageImage,
        alt: "DESA Foam Insulation team and construction services",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: socialTitle,
        description: pageDescription,

        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: "DESA Foam Insulation",
          url: siteUrl,
        },

        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}${pageImage}`,
        },

        about: {
          "@id": `${siteUrl}/#business`,
        },
      },

      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "DESA Foam Insulation",
        url: siteUrl,
        image: `${siteUrl}${pageImage}`,
        telephone: "+16479602090",
        email: "dee@desafoaminsulation.com",
        description: pageDescription,

        address: {
          "@type": "PostalAddress",
          streetAddress: "310 Millway Avenue #6",
          addressLocality: "Concord",
          addressRegion: "ON",
          postalCode: "L4K 3W3",
          addressCountry: "CA",
        },

        areaServed: [
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "AdministrativeArea",
            name: "Greater Toronto Area",
          },
          {
            "@type": "City",
            name: "Concord",
          },
          {
            "@type": "City",
            name: "Vaughan",
          },
          {
            "@type": "City",
            name: "North York",
          },
          {
            "@type": "City",
            name: "Scarborough",
          },
          {
            "@type": "City",
            name: "Etobicoke",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Markham",
          },
          {
            "@type": "City",
            name: "Richmond Hill",
          },
        ],

        knowsAbout: [
          "Spray foam insulation",
          "Batt insulation",
          "Attic insulation",
          "Attic insulation removal",
          "Drywall installation",
          "Steel framing",
          "Fireproofing",
          "Foam slab jacking",
        ],
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <AboutClient />
    </>
  );
}