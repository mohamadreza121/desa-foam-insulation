import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Steel Framing";
const serviceSlug = "/services/steel-framing";
const serviceUrl = `${siteUrl}${serviceSlug}`;
const serviceImage = "/images/services/steel-framing-hero.png";

const pageTitle = "Steel Framing Toronto & GTA";
const socialTitle = `${pageTitle} | DESA Foam Insulation`;

const serviceDescription =
  "Professional steel framing and steel stud installation services in Toronto and the GTA for residential and commercial construction projects.";

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
        alt: "Professional steel framing and steel stud installation in Toronto and the GTA",
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

export default function SteelFramingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: serviceName,
        serviceType:
          "Steel framing and steel stud installation for residential and commercial construction",
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
                Steel Framing
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Professional steel stud framing services for residential and
                commercial construction projects. We deliver strong, precise,
                and durable framing systems built to meet modern construction
                requirements.
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

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={serviceImage}
                alt="Professional steel stud framing installation in Toronto"
                width={1000}
                height={700}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[430px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                  Steel Stud Construction
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                  Strong, accurate framing built for long-term performance.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-700">
                <p>
                  DESA Foam Insulation provides professional steel framing
                  services for residential and commercial projects. Our
                  experienced team installs steel studs and tracks with
                  precision, creating dependable frameworks for walls, ceilings,
                  and interior construction systems.
                </p>

                <p>
                  Whether you are building a new property or renovating an
                  existing space, we provide accurate framing solutions designed
                  around project specifications and applicable construction
                  requirements.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Steel stud walls",
                "Ceiling framing systems",
                "Commercial & residential projects",
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
                Steel Framing Benefits
              </p>

              <h2 className="mt-4 text-4xl font-bold text-neutral-950">
                Built for strength, durability, and modern construction
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/long-lasting-structure.jpeg"
                  alt="Steel framing ceiling structure installed for a construction project"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Precise, Long-Lasting Structure
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Steel framing provides strength, dimensional consistency,
                    and durability for both residential and commercial
                    projects. Unlike wood, steel does not warp, shrink, or
                    provide a food source for pests.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Our team uses quality steel components to create framing
                    systems that remain straight, stable, and dependable
                    throughout the life of the building.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/ideal-for-modern-construction.jpeg"
                  alt="Steel stud framing installed inside a modern building"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Ideal for Modern Construction
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Lightweight, efficient, and adaptable, steel framing is
                    widely used in modern construction projects requiring clean
                    lines, accurate layouts, and dependable structural support
                    for interior systems.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Steel studs work well with drywall systems, commercial
                    interiors, basements, offices, retail spaces, and custom
                    residential construction.
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
                  Need professional steel framing services?
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