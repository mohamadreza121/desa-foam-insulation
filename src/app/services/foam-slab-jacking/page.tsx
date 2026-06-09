import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Foam Slab Jacking";
const serviceSlug = "/services/foam-slab-jacking";
const serviceImage = "/images/services/foam-slab-jacking-hero.png";
const serviceDescription =
  "Professional foam slab jacking and concrete leveling services in Toronto and the GTA using polyurethane foam to lift sunken driveways, sidewalks, patios, and slabs.";

export const metadata: Metadata = {
  title: "Foam Slab Jacking Toronto & GTA | DESA Foam Insulation",
  description: serviceDescription,
  alternates: {
    canonical: serviceSlug,
  },
  openGraph: {
    title: "Foam Slab Jacking Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    url: `${siteUrl}${serviceSlug}`,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 630,
        alt: "Foam slab jacking and concrete leveling by DESA Foam Insulation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foam Slab Jacking Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    images: [serviceImage],
  },
};

export default function FoamSlabJackingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    url: `${siteUrl}${serviceSlug}`,
    image: `${siteUrl}${serviceImage}`,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "DESA Foam Insulation",
      url: siteUrl,
      telephone: "+16479602090",
      email: "dee@desafoaminsulation.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "310 Millway Avenue #6",
        addressLocality: "Concord",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: [
      "Toronto",
      "GTA",
      "Concord",
      "North York",
      "Scarborough",
      "Etobicoke",
      "Mississauga",
      "Vaughan",
      "Markham",
      "Richmond Hill",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                Desa Foam Insulation
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                Foam Slab Jacking
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Lift and level sunken concrete quickly with professional foam
                slab jacking. Our polyurethane foam injection process restores
                driveways, sidewalks, patios, and foundations without costly
                replacement.
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
                src="/images/services/foam-slab-jacking-hero.png"
                alt="Polyurethane foam slab jacking process"
                width={1000}
                height={700}
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
                  Desa Foam Insulation provides professional foam slab jacking
                  services using high-density polyurethane foam to lift and
                  level sunken concrete surfaces quickly and effectively.
                </p>

                <p>
                  This minimally invasive process restores safety and appearance
                  without the expense, demolition, and downtime associated with
                  full concrete replacement.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Driveways & sidewalks",
                "Patios & walkways",
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
                  alt="Foam slab jacking foundation repair process"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Efficient Foundation Repair
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Foam slab jacking is a fast and cost-effective method for
                    lifting and leveling sunken concrete. Lightweight
                    polyurethane foam is injected beneath the slab, raising it
                    back into position.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    The process minimizes disruption and allows many repairs to
                    be completed much faster than traditional replacement
                    methods.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/long-lasting-foam-slab-jacking.png"
                  alt="Technician performing polyurethane foam slab lifting"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Durable & Long-Lasting Solution
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Expanding polyurethane foam fills voids beneath concrete,
                    stabilizes the ground, and helps prevent future settling.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Resistant to moisture and deterioration, foam slab jacking
                    provides long-term support that helps protect the safety,
                    functionality, and value of your property.
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