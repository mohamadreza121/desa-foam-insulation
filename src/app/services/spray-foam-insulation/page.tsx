import Image from "next/image";
import Link from "next/link";

export default function SprayFoamInsulationPage() {
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
              Spray Foam Insulation
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Trusted spray foam insulation services for residential and
              commercial projects across Ontario. With over 20 years of
              experience, Desa Foam delivers professional workmanship,
              long-lasting performance, and improved energy efficiency.
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

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/services/spray-foam-hero.jpeg"
                alt="Spray foam insulation being applied to a roof"
                width={900}
                height={650}
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
                Our certified team uses high-performance spray foam products to
                create reliable air sealing and thermal protection for new
                construction, renovations, and retrofit projects.
              </p>

              <p>
                By combining industry experience with modern application
                technology, we focus on safety, quality, energy savings, and
                customer satisfaction on every job.
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
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Open-Cell Spray Foam
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Open-cell spray foam is lightweight, flexible, and expands to
                  fill cracks, gaps, and hard-to-reach spaces. Its soft,
                  sponge-like texture also helps absorb sound, making it a great
                  choice for interior walls, rooms, and floors.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  It is a cost-effective option for improving comfort and
                  reducing air leaks where moisture resistance is not the main
                  priority.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/closed-cell-spray-foam.png"
                alt="Closed-cell spray foam being applied to a wall"
                width={900}
                height={650}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Closed-Cell Spray Foam
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Closed-cell spray foam creates a dense, rigid, airtight
                  barrier with strong thermal resistance. It helps block air
                  infiltration, resist moisture, and add strength to walls,
                  roofs, and building assemblies.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  With a high R-value per inch, it is ideal for areas that need
                  maximum insulation performance in limited space.
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
                Ready to improve your building’s comfort and efficiency?
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Contact Desa Foam Insulation today for a free quote and
                experience the difference of working with true insulation
                professionals.
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