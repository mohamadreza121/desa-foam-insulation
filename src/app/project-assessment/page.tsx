import type { Metadata } from "next";
import ProjectAssessmentClient from "./ProjectAssessmentClient";

const siteUrl = "https://desafoaminsulation.com";
const pageSlug = "/project-assessment";
const pageUrl = `${siteUrl}${pageSlug}`;
const pageImage = "/images/projects/project-34.jpg";

const pageTitle = "Request a Project Assessment Toronto & GTA";
const socialTitle = `${pageTitle} | DESA Foam Insulation`;

const pageDescription =
  "Submit a project assessment for spray foam insulation, attic insulation, drywall, steel framing, fireproofing, batt insulation, or concrete leveling services in Toronto and the GTA.";

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
        alt: "Request a project assessment from DESA Foam Insulation",
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

export default function ProjectAssessmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
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

        mainEntity: {
          "@type": "Service",
          name: "Construction and Insulation Project Assessment",
          description:
            "Project assessment request for residential and commercial insulation and construction services in Toronto and the Greater Toronto Area.",
          provider: {
            "@id": `${siteUrl}/#business`,
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Greater Toronto Area",
          },
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

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "07:00",
            closes: "17:00",
          },
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
            name: "Project Assessment",
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

      <ProjectAssessmentClient />
    </>
  );
}