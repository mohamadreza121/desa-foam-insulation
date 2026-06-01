import Image from "next/image";
import Link from "next/link";

export default function AtticInsulationPage() {
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
              Attic Insulation
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Professional attic insulation installations and top-ups designed
              to improve comfort, reduce heat loss, and lower energy costs
              throughout the year.
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
              src="/images/services/attic-insulation-hero.jpg"
              alt="Attic with blown-in insulation installed"
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
                Professional Attic Insulation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                Improve your home’s comfort and energy efficiency from the top
                down.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-700">
              <p>
                Desa Foam Insulation provides complete attic insulation
                installations and insulation top-ups for new homes and existing
                properties. Our experienced team uses high-quality materials to
                ensure proper coverage and dependable performance.
              </p>

              <p>
                By sealing gaps and improving insulation levels, we help reduce
                heat loss, lower energy bills, and maintain consistent indoor
                temperatures year-round.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Attic insulation installation",
              "Insulation top-ups",
              "Cellulose and fiberglass options",
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
              Attic Insulation Options
            </p>

            <h2 className="mt-4 text-4xl font-bold text-neutral-950">
              Cellulose and fiberglass attic insulation
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/cellulose-attic-insulation.jpg"
                alt="Cellulose blown-in attic insulation"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Cellulose Attic Insulation
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Cellulose insulation is made from recycled paper products and
                  treated for fire resistance, making it an eco-friendly and
                  practical attic insulation option.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  It is blown into attic spaces to fill gaps and irregular
                  areas, creating a dense layer that helps reduce heat loss,
                  control airflow, and improve sound protection.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="/images/services/fiberglass-attic-insulation.jpg"
                alt="Fiberglass attic insulation being installed"
                width={1000}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-950">
                  Fiberglass Attic Insulation
                </h3>

                <p className="mt-5 leading-8 text-neutral-700">
                  Fiberglass insulation is a durable and affordable attic
                  insulation choice available in batt and loose-fill forms. It
                  uses fine glass fibers to trap air and slow heat transfer.
                </p>

                <p className="mt-4 leading-8 text-neutral-700">
                  When properly installed and ventilated, fiberglass helps
                  improve attic performance while resisting moisture and mold.
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
                Ready to upgrade your attic insulation?
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Contact Desa Foam Insulation today for a free quote and let our
                attic insulation experts improve your home’s comfort and
                efficiency.
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