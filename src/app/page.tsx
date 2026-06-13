import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import GoogleReviews from "@/components/sections/GoogleReviews";

const siteUrl = "https://desafoaminsulation.com";

const whyChooseUs = [
  {
    icon: Clock,
    title: "On Time No Matter What",
    text: "We respect your schedule and complete projects with clear timelines, dependable communication, and professional execution.",
  },
  {
    icon: Trophy,
    title: "20+ Years Of Experience",
    text: "With over two decades of hands-on experience, DESA Foam Insulation brings proven skill and reliable workmanship to every project.",
  },
  {
    icon: ShieldCheck,
    title: "Unmatched Professionalism",
    text: "From the first quote to final cleanup, our team delivers clean work, careful attention to detail, and customer-focused service.",
  },
];

const services = [
  "Spray Foam Insulation",
  "Drywall",
  "Batt Insulation",
  "Attic Insulation",
  "Attic Insulation Removal",
  "Steel Framing",
  "Fireproofing",
  "Foam Slab Jacking",
];

const projectImages = [
  {
    title: "Drywall Installation",
    category: "Drywall",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Spray Foam Roof Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "Spray Foam Ceiling Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Spray Foam Wall Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-04.jpg",
  },
  {
    title: "Blown-In Attic Insulation",
    category: "Attic",
    image: "/images/projects/project-05.jpg",
  },
  {
    title: "Batt Insulation Materials",
    category: "Batt",
    image: "/images/projects/project-06.jpg",
  },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DESA Foam Insulation",
    url: siteUrl,
    image: `${siteUrl}/images/og/desa-og.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: "+16479602090",
    email: "dee@desafoaminsulation.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "310 Millway Avenue #6",
      addressLocality: "Concord",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    description:
      "DESA Foam Insulation provides spray foam insulation, drywall, batt insulation, attic insulation, steel framing, fireproofing, and foam slab jacking services in Toronto and the GTA.",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://share.google/3ZvYNsMYAwMOyHoHw"],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/desa-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center md:px-6">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-white/30 bg-black/35 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Toronto Insulation & Construction Experts
          </p>

          <h1 className="mx-auto mb-6 max-w-6xl text-4xl font-black leading-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
            Professional Foam Insulation Services in Toronto
          </h1>

          <p className="mx-auto mb-9 max-w-3xl text-lg font-medium leading-8 text-gray-100 drop-shadow-lg md:text-xl">
            DESA Foam Insulation provides spray foam insulation, drywall, batt
            insulation, attic insulation, steel framing, fireproofing, and foam
            slab jacking with clean workmanship and reliable service.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/project-assessment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/services"
              className="rounded-lg border border-white/40 bg-black/25 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-black text-dark md:text-5xl">
              Reliable Service. Clean Work. Professional Results.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={38} />
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-primary">
                    {item.title}
                  </h3>

                  <p className="text-base font-medium leading-8 text-gray-700">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      <GoogleReviews />

      <section className="bg-dark py-20 text-white md:py-28">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
                Our Services
              </p>

              <h2 className="mb-6 text-4xl font-black md:text-5xl">
                Complete Insulation & Construction Support
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-300">
                From residential insulation upgrades to commercial construction
                support, DESA Foam Insulation delivers dependable service across
                Toronto.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Explore All Services
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 font-bold text-white transition hover:border-primary hover:bg-primary/20"
                >
                  <CheckCircle2 className="text-primary" size={20} />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 md:py-28">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
                Recent Projects
              </p>

              <h2 className="max-w-3xl text-4xl font-black text-dark md:text-5xl">
                See The Quality Of Our Work
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-bold text-white transition hover:bg-red-700"
            >
              View Project Gallery
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((project) => (
              <Link
                href="/projects"
                key={project.image}
                className="group relative h-72 overflow-hidden rounded-2xl bg-dark shadow-sm"
              >
                <img
                  src={project.image}
                  alt={`${project.title} by DESA Foam Insulation`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="mb-2 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-black text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    View full gallery
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container-custom rounded-3xl bg-dark p-10 text-center text-white md:p-16">
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
            Get Started
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-5xl">
            Ready To Improve Your Property’s Comfort, Efficiency, And Safety?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Tell us about your project and let DESA Foam Insulation review your
            service needs, location, timeline, and project details.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/project-assessment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}