import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Phone } from "lucide-react";

export default function BattInsulationInstallationPage() {
  return (
    <main className="bg-light">
      <section className="bg-dark pt-40 pb-20 text-white">
        <div className="container-custom">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-gray-300 transition hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
            Batt Insulation
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Batt Insulation Installation for Comfort and Energy Efficiency
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Published Mar 23, 2025
          </p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] bg-white md:h-[650px]">
            <Image
              src="/images/blog/batt-insulation.jpg"
              alt="Batt Insulation Installation"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Batt insulation remains one of the most widely used insulation
              solutions in residential and commercial construction. When
              installed correctly, it provides dependable thermal performance,
              sound control, and long-term energy efficiency.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              For many builders, homeowners, and property managers, batt
              insulation delivers an excellent balance between affordability,
              performance, and reliability.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Properly installed batt insulation helps reduce energy loss,
                improve comfort, and create a quieter indoor environment without
                breaking the project budget.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              A Trusted Insulation Solution
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Batt insulation is commonly installed in walls, ceilings, floors,
              and attic spaces where framing allows for accurate placement.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              When fitted properly between studs and joists, batt insulation
              helps regulate indoor temperatures, reduce heat transfer, and
              support year-round comfort.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Installation Quality Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Even high-quality insulation materials can underperform if they
              are installed incorrectly. Gaps, compression, and poor alignment
              can reduce thermal efficiency and create areas where energy is
              lost.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              At DESA Foam Insulation, every batt is carefully measured and
              fitted to ensure consistent coverage and maximum effectiveness
              throughout the building envelope.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Fiberglass and Mineral Wool Options
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              We install both fiberglass and mineral wool batt insulation,
              allowing clients to choose the solution that best matches their
              project's performance requirements and budget.
            </p>

            <ul className="mt-6 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Strong thermal performance</li>
              <li>• Reliable moisture resistance</li>
              <li>• Long-lasting durability</li>
              <li>• Excellent sound absorption</li>
              <li>• Cost-effective insulation upgrades</li>
              <li>• Suitable for residential and commercial projects</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Added Sound Control Benefits
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Beyond thermal performance, batt insulation also improves acoustic
              comfort. Mineral wool insulation, in particular, offers excellent
              sound absorption properties.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              This makes it a popular choice for interior walls, offices,
              bedrooms, multi-family buildings, and spaces where reducing noise
              transfer is important.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              An Affordable and Practical Choice
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              While batt insulation does not create the same air seal as spray
              foam insulation, it remains a highly effective option when paired
              with proper air-sealing techniques.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Its combination of affordability, proven performance, and ease of
              installation makes it a practical solution for many construction
              and renovation projects.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Built for Long-Term Performance
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Properly installed batt insulation helps reduce heating and
              cooling costs, improve indoor comfort, and support overall
              building efficiency for years to come.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Our experienced team works closely with builders, contractors, and
              homeowners to ensure every project is completed with precision,
              professionalism, and attention to detail.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <ShieldCheck size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Looking For Reliable Batt Insulation?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                DESA Foam Insulation delivers professional batt insulation
                installation designed to improve comfort, reduce energy costs,
                and support long-term building performance.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-black text-white transition hover:bg-red-700"
              >
                <Phone size={18} />
                Request A Free Quote
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}