import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Spray Foam Insulation";
const serviceSlug = "/services/spray-foam-insulation";
const serviceUrl = `${siteUrl}${serviceSlug}`;
const serviceImage = "/images/services/spray-foam-hero.jpeg";

const pageTitle = "Spray Foam Insulation Toronto & GTA";
const socialTitle = `${pageTitle} | DESA Foam Insulation`;

const serviceDescription =
  "Professional open-cell and closed-cell spray foam insulation services in Toronto and the GTA for residential, commercial, renovation, and new construction projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: serviceDescription,

  alternates: {
    canonical: serviceSlug,
  },

  openGraph: {
    title: socialTitle,
    description: serviceDescription,
    url: serviceUrl,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 630,
        alt: "Professional spray foam insulation service in Toronto and the GTA",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: serviceDescription,
    images: [serviceImage],
  },
};

export default function SprayFoamInsulationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: serviceName,
        serviceType:
          "Open-cell and closed-cell spray foam insulation installation",
        url: serviceUrl,
        image: `${siteUrl}${serviceImage}`,
        description: serviceDescription,

        provider: {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#business`,
          name: "DESA Foam Insulation",
          url: siteUrl,
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
            name: "Vaughan",
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
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
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
            name: "Services",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: serviceName,
            item: serviceUrl,
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
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                DESA Foam Insulation
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                Spray Foam Insulation
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Professional spray foam insulation services for residential and
                commercial projects across Toronto and the GTA. With over 20
                years of experience, DESA Foam Insulation delivers dependable
                workmanship, long-lasting performance, and improved energy
                efficiency.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/project-assessment"
                  className="rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Start a Project
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={serviceImage}
                  alt="Professional spray foam insulation applied to a roof assembly"
                  width={900}
                  height={650}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[420px] w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                  Professional Insulation Solutions
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                  Built for comfort, efficiency, and long-term protection.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-700">
                <p>
                  Our experienced team uses high-performance spray foam products
                  to provide dependable air sealing and thermal protection for
                  new construction, renovations, additions, and retrofit
                  projects.
                </p>

                <p>
                  By combining industry experience with modern application
                  equipment, we focus on safety, consistent coverage, energy
                  performance, and professional results on every project.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Over 20 years of experience",
                "Residential and commercial projects",
                "Energy-efficient insulation systems",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8"
                >
                  <p className="text-xl font-bold text-neutral-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                Foam Types
              </p>

              <h2 className="mt-4 text-4xl font-bold text-neutral-950">
                Open-cell and closed-cell spray foam insulation
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/open-cell-spray-foam.jpg"
                  alt="Open-cell spray foam insulation installed between roof joists"
                  width={900}
                  height={650}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Open-Cell Spray Foam
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Open-cell spray foam is lightweight and flexible, expanding
                    to fill cracks, gaps, and hard-to-reach spaces. Its softer,
                    sponge-like structure can also help reduce sound transfer,
                    making it useful for interior walls, ceilings, rooms, and
                    floor assemblies.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    It is a practical option for improving indoor comfort and
                    reducing uncontrolled air leakage where a vapour-impermeable
                    insulation system is not required.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/closed-cell-spray-foam.png"
                  alt="Closed-cell spray foam insulation being applied to a wall"
                  width={900}
                  height={650}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Closed-Cell Spray Foam
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Closed-cell spray foam creates a dense, rigid, and highly
                    effective insulation layer. It helps reduce air
                    infiltration, control moisture movement, and improve the
                    thermal performance of walls, roofs, and other building
                    assemblies.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Its high insulation value per inch makes it suitable for
                    projects that require strong thermal performance within
                    limited cavity space.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-950 p-10 text-white md:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold">
                  Ready to improve your building&apos;s comfort and efficiency?
                </h2>

                <p className="mt-5 text-lg leading-8 text-neutral-300">
                  Tell us about your project and our team will review the
                  details based on scope, location, timeline, and availability.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/project-assessment"
                  className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}