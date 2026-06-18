import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Foam Slab Jacking";
const serviceSlug = "/services/foam-slab-jacking";
const serviceUrl = `${siteUrl}${serviceSlug}`;
const serviceImage = "/images/services/foam-slab-jacking-hero.png";

const pageTitle = "Foam Slab Jacking Toronto & GTA";
const socialTitle = `${pageTitle} | DESA Foam Insulation`;

const serviceDescription =
  "Professional foam slab jacking and concrete leveling services in Toronto and the GTA using polyurethane foam to lift sunken driveways, sidewalks, patios, and concrete slabs.";

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
        alt: "Foam slab jacking and concrete leveling in Toronto and the GTA",
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

export default function FoamSlabJackingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: serviceName,
        serviceType:
          "Polyurethane foam slab jacking and concrete leveling",
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
                Foam Slab Jacking
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Lift and level sunken concrete with professional polyurethane
                foam slab jacking. Our injection process restores driveways,
                sidewalks, patios, walkways, and concrete slabs without the
                disruption of complete replacement.
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
                alt="Polyurethane foam slab jacking and concrete leveling in Toronto"
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
                  Concrete Lifting Solutions
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                  Fast, clean, and cost-effective concrete leveling.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-700">
                <p>
                  DESA Foam Insulation provides professional foam slab jacking
                  services using high-density polyurethane foam to lift,
                  stabilize, and level sunken concrete surfaces.
                </p>

                <p>
                  This minimally invasive process helps restore safety,
                  appearance, and proper drainage without the demolition,
                  expense, and extended downtime associated with full concrete
                  replacement.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Driveways and sidewalks",
                "Patios and walkways",
                "Concrete slab leveling",
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
                Benefits of Foam Slab Jacking
              </p>

              <h2 className="mt-4 text-4xl font-bold text-neutral-950">
                Restore concrete surfaces with confidence
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/efficient-foundation-repair-foam-slab-jacking.png"
                  alt="Polyurethane foam being used to lift a sunken concrete slab"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Efficient Concrete Repair
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Foam slab jacking is a fast and cost-effective method for
                    lifting and leveling sunken concrete. Lightweight
                    polyurethane foam is injected through small access holes
                    beneath the slab, where it expands and raises the concrete
                    toward its proper position.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    The process minimizes disruption and allows many concrete
                    repairs to be completed significantly faster than
                    traditional removal and replacement methods.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/long-lasting-foam-slab-jacking.png"
                  alt="Technician completing polyurethane foam concrete lifting"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Durable &amp; Long-Lasting Solution
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Expanding polyurethane foam fills voids beneath the
                    concrete, stabilizes the slab, and helps reduce further
                    movement caused by unsupported areas.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    The lightweight foam is resistant to moisture and provides
                    dependable support that helps restore the safety,
                    functionality, and appearance of your concrete surfaces.
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
                  Need concrete leveling services?
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