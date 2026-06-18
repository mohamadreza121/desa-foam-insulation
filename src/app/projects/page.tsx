import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

const siteUrl = "https://desafoaminsulation.com";
const pageSlug = "/projects";
const pageUrl = `${siteUrl}${pageSlug}`;
const pageImage = "/images/projects/project-34.jpg";

const pageTitle = "Project Gallery Toronto & GTA";
const socialTitle = `${pageTitle} | DESA Foam Insulation`;

const pageDescription =
  "Explore completed spray foam insulation, attic insulation, batt insulation, drywall, steel framing, fireproofing, and concrete leveling projects by DESA Foam Insulation.";

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
        alt: "DESA Foam Insulation project gallery in Toronto and the GTA",
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

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
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

        about: [
          {
            "@type": "Thing",
            name: "Spray foam insulation projects",
          },
          {
            "@type": "Thing",
            name: "Attic insulation projects",
          },
          {
            "@type": "Thing",
            name: "Batt insulation projects",
          },
          {
            "@type": "Thing",
            name: "Drywall projects",
          },
          {
            "@type": "Thing",
            name: "Steel framing projects",
          },
          {
            "@type": "Thing",
            name: "Fireproofing projects",
          },
          {
            "@type": "Thing",
            name: "Foam slab jacking projects",
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
            name: "Projects",
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

      <ProjectsClient />
    </>
  );
}