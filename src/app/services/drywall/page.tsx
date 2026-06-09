import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://desafoaminsulation.com";

const serviceName = "Drywall Installation & Finishing";
const serviceSlug = "/services/drywall";
const serviceImage = "/images/services/drywall-hero.jpg";
const serviceDescription =
  "Professional drywall installation, taping, mudding, sanding, repair, and finishing services in Toronto and the GTA for residential and commercial projects.";

export const metadata: Metadata = {
  title: "Drywall Contractor Toronto & GTA | DESA Foam Insulation",
  description: serviceDescription,
  alternates: {
    canonical: serviceSlug,
  },
  openGraph: {
    title: "Drywall Contractor Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    url: `${siteUrl}${serviceSlug}`,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 630,
        alt: "Drywall installation and finishing by DESA Foam Insulation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Contractor Toronto & GTA | DESA Foam Insulation",
    description: serviceDescription,
    images: [serviceImage],
  },
};

export default function DrywallPage() {
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
                Drywall Installation & Finishing
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Professional drywall installation, repair, taping, mudding, and
                finishing for residential and commercial projects. With over 20
                years of experience, Desa Foam delivers clean, smooth, and
                reliable results.
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
                src="/images/services/drywall-hero.jpg"
                alt="Drywall construction site with work lights"
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
                  Professional Drywall Services
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                  Smooth walls, clean finishes, and dependable workmanship.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-700">
                <p>
                  Desa Foam Insulation specializes in drywall services for new
                  construction, renovations, commercial spaces, and repair
                  projects. Our skilled team handles the full process from board
                  installation to taping, mudding, sanding, and finishing.
                </p>

                <p>
                  We focus on precise workmanship, clean job sites, and on-time
                  completion, helping every space look professional and ready
                  for paint.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                "Drywall installation",
                "Taping, mudding, and sanding",
                "Repair and patching services",
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
                Our Drywall Work
              </p>

              <h2 className="mt-4 text-4xl font-bold text-neutral-950">
                From installation to final finish
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/drywall-process.jpg"
                  alt="Large drywall room prepared for finishing"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Drywall Installation Process
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Our process begins with accurate measuring and cutting to
                    ensure each drywall sheet fits properly. We secure the
                    panels to framing using quality fasteners, then tape, mud,
                    and sand the joints for a clean, seamless finish.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Whether it is a new build or renovation, we prepare walls
                    and ceilings for paint with professional results.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image
                  src="/images/services/drywall-repair.png"
                  alt="Workers installing drywall panels"
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-neutral-950">
                    Drywall Repair & Patching
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-700">
                    We also provide drywall repair and patching for damaged or
                    aging walls. From small holes and cracked seams to larger
                    repairs, our team restores surfaces with smooth blending and
                    a clean finish.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Our repair work is completed quickly, cleanly, and
                    professionally so your space looks refreshed and ready to
                    use.
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
                  Need professional drywall work?
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