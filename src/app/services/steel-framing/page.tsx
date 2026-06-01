import Image from "next/image";
import Link from "next/link";

export default function SteelFramingPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Desa Foam Insulation
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Steel Framing
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Professional steel stud framing services for residential and
              commercial construction projects. We deliver strong, precise, and
              durable framing systems built to meet modern building standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Get a Free Quote
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
              src="/images/services/steel-framing-hero.png"
              alt="Steel stud framing installation"
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
                Steel Stud Construction
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                Strong, accurate framing built for long-term performance.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-700">
              <p>
                Desa Foam Insulation specializes in steel framing services for
                residential and commercial projects. Our experienced team
                installs steel studs and tracks with precision, creating a
                strong framework that supports the entire structure.
              </p>

              <p>
                Whether you are building a new property or renovating an
                existing space, we provide dependable framing solutions that
                meet building codes and project specifications.
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
                alt="Steel framing ceiling structure"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Precise, Long-Lasting Structure
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Steel framing provides exceptional strength, straightness, and
                  durability for both residential and commercial projects.
                  Unlike wood, steel resists warping, shrinking, pests, and
                  moisture-related issues.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  Our team uses high-quality steel components to create framing
                  systems that remain stable and reliable for years to come.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/ideal-for-modern-construction.jpeg"
                alt="Steel stud framing installed in modern building"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Ideal For Modern Construction
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Lightweight, efficient, and highly adaptable, steel framing
                  is a preferred solution for modern construction projects that
                  require clean lines, accuracy, and structural integrity.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  Steel studs work exceptionally well with drywall systems,
                  commercial interiors, basements, offices, and custom
                  residential spaces.
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
                Contact Desa Foam Insulation today for a free quote and let our
                experienced steel framing team help bring your project to life.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}