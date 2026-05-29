import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";

export default function AtticInsulationPage() {
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
            Attic Insulation
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Attic Insulation That Transforms Comfort, Efficiency, and Energy
            Performance
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Published Apr 13, 2025
          </p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] bg-white md:h-[650px]">
            <Image
              src="/images/blog/attic-insulation.jpg"
              alt="Attic Insulation"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Attic insulation is one of the most effective upgrades a homeowner
              can make to improve comfort, reduce energy costs, and increase the
              overall performance of a property.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              Many homes lose a significant amount of heat through poorly
              insulated attics. During summer, the same attic spaces can trap
              excessive heat, forcing HVAC systems to work harder and increasing
              utility bills year-round.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Proper attic insulation helps maintain consistent indoor
                temperatures, lowers energy consumption, and creates a more
                comfortable home throughout every season.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Attic Insulation Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Warm air naturally rises. Without adequate attic insulation, much
              of the heat generated inside your home escapes through the roof
              during winter. In the summer months, excessive heat enters the
              home from above, making indoor spaces uncomfortable and increasing
              cooling demands.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Proper insulation creates a thermal barrier that helps regulate
              indoor temperatures while reducing unnecessary energy loss.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Lower Energy Costs Year-Round
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              One of the biggest benefits of professional attic insulation is
              energy efficiency. By reducing heat transfer, your furnace and air
              conditioning systems operate less frequently and more efficiently.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Over time, this can lead to significant savings on monthly energy
              bills while also reducing wear and tear on HVAC equipment.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Improved Comfort Throughout the Home
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Uneven room temperatures, cold drafts, and overheated second
              floors are often signs of inadequate attic insulation. A properly
              insulated attic helps maintain balanced temperatures throughout
              the entire home.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Homeowners often notice immediate improvements in comfort after
              upgrading attic insulation levels.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              The Benefits of Cellulose Attic Insulation
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Cellulose insulation is a popular option for homeowners seeking an
              environmentally friendly and cost-effective solution. Made from
              recycled materials and treated for fire resistance, cellulose
              provides excellent thermal performance.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Its blown-in installation method allows it to fill gaps, corners,
              and irregular spaces that traditional insulation may miss,
              creating a dense and effective insulation layer.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Additional Benefits of Cellulose
            </h2>

            <ul className="space-y-4 text-lg leading-9 text-gray-700">
              <li>• Excellent thermal performance</li>
              <li>• Eco-friendly recycled materials</li>
              <li>• Strong sound-dampening properties</li>
              <li>• Effective air flow control</li>
              <li>• Cost-effective attic upgrades</li>
              <li>• Ideal for top-ups and older homes</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Professional Installation Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              The performance of attic insulation depends heavily on proper
              installation. Insulation depth, even coverage, and air sealing all
              play critical roles in achieving maximum efficiency.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              At DESA Foam Insulation, we carefully assess attic conditions,
              identify air leaks, and ensure proper coverage throughout the
              entire attic space to maximize long-term performance.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Upgrade Your Attic with Confidence
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Whether you need a complete attic insulation installation, an
              insulation top-up, or a more energy-efficient solution for your
              home, DESA Foam Insulation provides reliable service backed by
              decades of experience.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Home size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Ready To Improve Your Home's Efficiency?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Our attic insulation experts can help reduce energy costs,
                improve comfort, and maximize the long-term performance of your
                property.
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