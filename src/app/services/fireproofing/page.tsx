import Image from "next/image";
import Link from "next/link";

export default function FireproofingPage() {
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
              Fireproofing
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Professional fireproofing services designed to improve building
              safety, protect structural elements, and support code compliance
              for residential and commercial projects.
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
              src="/images/services/fire-proofing-hero.jpg"
              alt="Spray-applied fireproofing on structural steel"
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
                Fire-Resistant Protection
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                Protect your structure with reliable, code-conscious
                fireproofing solutions.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-700">
              <p>
                Desa Foam Insulation provides professional fireproofing services
                using high-quality fire-resistant materials and proven
                application techniques. Our skilled team helps protect
                structural elements from heat and flame.
              </p>

              <p>
                Whether your project is new construction or an upgrade to meet
                safety requirements, we deliver precise and dependable
                fireproofing solutions tailored to the building’s needs.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Structural steel protection",
              "Spray-applied fireproofing",
              "Residential & commercial projects",
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
              Fireproofing Benefits
            </p>

            <h2 className="mt-4 text-4xl font-bold text-neutral-950">
              Safer buildings with durable fire-resistant systems
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/protecting-what-matters-fireproofing.jpg"
                alt="Worker applying fireproofing material to structural steel"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Protecting What Matters Most
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Fireproofing helps safeguard buildings and occupants by
                  slowing the spread of heat and flame during a fire. Properly
                  applied fire-resistant materials can help protect key
                  structural components.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  This added protection can provide critical extra time for
                  evacuation, emergency response, and damage reduction.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/code-compliant-fireproofing.jpg"
                alt="Close-up of spray-applied fireproofing material"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Code-Compliant & Reliable
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  We complete fireproofing work with attention to local building
                  codes, safety standards, and project requirements. Our
                  solutions are selected based on the structure and application
                  needs.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  From spray-applied fire-resistive materials to protective
                  coating systems, Desa Foam delivers long-lasting protection
                  with professional workmanship.
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
                Need professional fireproofing services?
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Contact Desa Foam Insulation today for a free quote and protect
                your property with expert fireproofing solutions.
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