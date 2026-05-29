import Link from "next/link";
import { Clock, ShieldCheck, Trophy } from "lucide-react";

const whyChooseUs = [
  {
    icon: Clock,
    title: "On Time No Matter What",
    text: "On Time, No Matter What isn’t just a slogan — it’s our promise. At our construction company, we pride ourselves on meeting deadlines with precision, no excuses. Rain or shine, we deliver results on time, every time, because your schedule is our priority.",
  },
  {
    icon: Trophy,
    title: "20+ Years Of Experience",
    text: "With over 20 years of hands-on experience, we’ve built a reputation for quality, reliability, and expertise in every project we take on. Our deep industry knowledge means we know how to get the job done right—the first time, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Unmatched Professionalism",
    text: "Our team brings unmatched professionalism to every job site, treating your project with the respect and attention it deserves. From clear communication to flawless execution, we hold ourselves to the highest standards — because you deserve nothing less.",
  },
];

const services = [
  "Foam Insulation",
  "Drywall",
  "Batt Insulation",
  "Attic Insulation",
  "Attic Insulation Removal",
  "Steel Framing",
  "Fireproofing",
  "Foam Slab Jacking",
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/desa-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/55" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center md:px-6">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-white/30 bg-black/35 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Toronto Insulation Experts
          </p>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-black leading-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
            Professional Foam Insulation Services in Toronto
          </h1>

          <p className="mx-auto mb-9 max-w-3xl text-lg font-medium leading-8 text-gray-100 drop-shadow-lg md:text-xl">
            DESA Foam Insulation provides foam insulation, drywall, batt insulation,
            attic insulation, steel framing, fireproofing, and foam slab jacking
            services with professional workmanship.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              Request a Quote
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
                className="inline-flex rounded-lg bg-primary px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Explore All Services
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold text-white transition hover:border-primary hover:bg-primary/20"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}