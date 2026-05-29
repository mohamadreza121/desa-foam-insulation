import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Layers, Phone } from "lucide-react";

export default function ModernInsulation101Page() {
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
            Insulation Guide
          </p>

          <h1 className="max-w-6xl text-5xl font-black leading-tight md:text-7xl">
            Modern Insulation 101: How Spray Foam And Exterior Foam Transform
            Ontario Homes And Buildings
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Published Dec 16, 2024
          </p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] md:h-[650px]">
            <Image
              src="/images/blog/modern-insulation-101.jpg"
              alt="Modern Insulation 101"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Modern buildings need more than basic insulation. Ontario homes
              and commercial properties face cold winters, hot summers, moisture
              changes, and rising energy expectations.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              Spray foam and exterior foam insulation help solve these problems
              by improving air sealing, thermal performance, moisture control,
              and long-term building durability.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Modern insulation is not just about adding R-value. It is about
                creating a stronger, tighter, more efficient building envelope.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Traditional Insulation Is Often Not Enough
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Traditional insulation can provide thermal resistance, but it does
              not always stop air leakage or thermal bridging. Gaps, cracks,
              framing members, and poorly sealed penetrations can still allow
              energy to escape.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              This is why many modern projects now combine insulation with
              proper air sealing and continuous exterior foam systems.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              How Spray Foam Improves Building Performance
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Spray foam expands after application, filling cracks, gaps, and
              hard-to-reach areas. This creates a continuous insulation and air
              barrier that helps reduce drafts and uncontrolled airflow.
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Reduces air leakage</li>
              <li>• Improves indoor comfort</li>
              <li>• Helps lower heating and cooling costs</li>
              <li>• Supports moisture control</li>
              <li>• Strengthens the building envelope</li>
              <li>• Works well in complex framing areas</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              The Role of Exterior Foam Insulation
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Exterior foam insulation is installed outside the wall assembly to
              reduce thermal bridging through framing members. This helps create
              a more continuous thermal layer around the building.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              For Ontario properties, exterior foam can significantly improve
              wall performance, especially during recladding, renovations, and
              high-performance construction projects.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Spray Foam vs. Exterior Foam
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Spray foam and exterior foam are not always competing solutions.
              In many projects, they work best together. Spray foam seals
              cavities and difficult areas, while exterior foam adds continuous
              insulation across the building envelope.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              The right approach depends on the project type, budget, building
              design, and long-term performance goals.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Better Comfort in Every Season
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              A stronger insulation system helps keep warm air inside during the
              winter and limits unwanted heat gain during summer.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              This creates more consistent temperatures, fewer drafts, quieter
              interiors, and reduced strain on heating and cooling equipment.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Supporting Energy Code Requirements
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Building standards continue to move toward better airtightness,
              higher insulation performance, and improved energy efficiency.
              Modern insulation systems help builders and property owners meet
              these expectations more effectively.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              DESA Foam Insulation installs insulation systems with attention to
              detail, correct application, and long-term performance.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Where Modern Insulation Makes the Biggest Difference
            </h2>

            <ul className="space-y-4 text-lg leading-9 text-gray-700">
              <li>• Attics and rooflines</li>
              <li>• Exterior wall assemblies</li>
              <li>• Basements and rim joists</li>
              <li>• Crawlspaces</li>
              <li>• Commercial buildings</li>
              <li>• Renovation and retrofit projects</li>
              <li>• Custom homes and new construction</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Choosing the Right Insulation Strategy
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Every building is different. A proper insulation strategy should
              consider air leakage, moisture exposure, thermal bridging,
              ventilation, budget, and how the space will be used.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              DESA Foam Insulation helps homeowners, builders, and commercial
              clients choose the right solution for their specific project.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Layers size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Ready To Upgrade Your Insulation?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                DESA Foam Insulation can help improve comfort, reduce energy
                loss, and build a stronger envelope for your Ontario property.
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