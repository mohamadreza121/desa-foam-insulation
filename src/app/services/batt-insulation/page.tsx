import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Batt Insulation";
const serviceSlug = "/services/batt-insulation";
const serviceImage = "/images/services/batt-hero.png";
const serviceDescription =
  "Professional batt insulation services in Toronto and the GTA using fiberglass and mineral wool batts for residential and commercial projects.";

export const metadata: Metadata = {
  title: "Batt Insulation Toronto & GTA | DESA Foam Insulation",
  description: serviceDescription,
  alternates: {
    canonical: serviceSlug,
  },
  openGraph: {
    title: "Batt Insulation Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    url: `${siteUrl}${serviceSlug}`,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 630,
        alt: "Batt insulation service by DESA Foam Insulation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batt Insulation Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    images: [serviceImage],
  },
};

export default function BattInsulationPage() {
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
                Batt Insulation
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Reliable fiberglass and mineral wool batt insulation services
                for residential and commercial projects. Desa Foam helps
                improve comfort, reduce energy costs, and create quieter indoor
                spaces.
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
                src="/images/services/batt-hero.png"
                alt="Batt insulation installed inside wall framing"
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
                  Professional Batt Insulation
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                  Affordable thermal protection with clean, precise
                  installation.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-700">
                <p>
                  Desa Foam Insulation installs high-quality fiberglass and
                  mineral wool batts with careful attention to detail. Our team
                  fits each section properly between studs and joists to improve
                  temperature control and sound reduction.
                </p>

                <p>
                  Whether you are insulating a new build or upgrading an
                  existing property, we complete each project efficiently,
                  professionally, and on time.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Fiberglass batt insulation",
                "Mineral wool batt insulation",
                "Removal and replacement",
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
                Our Batt Insulation Work
              </p>

              <h2 className="mt-4 text-4xl font-bold text-neutral-950">
                Installation, removal, and replacement
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/batt-installing.jpg"
                  alt="Worker installing batt insulation inside wall framing"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Installing Batt Insulation
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Batt insulation remains a popular option for homeowners and
                    builders looking for affordable thermal and sound
                    protection. Made from fiberglass or mineral wool, it is
                    installed by fitting pre-cut sections snugly between studs
                    and joists.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Our technicians ensure precise placement to maximize energy
                    efficiency, comfort, and consistent coverage across walls
                    and ceilings.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/batt-insulation-removal-and-replacement.jpg"
                  alt="Batt insulation installed in a residential wall"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Insulation Removal & Replacement
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Over time, insulation can become damaged, damp, or
                    ineffective. Our team provides safe removal followed by
                    expert replacement with premium batt insulation.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    We remove old or contaminated materials and restore your
                    space with clean, efficient insulation built for long-term
                    comfort and performance.
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
                  Need reliable batt insulation?
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