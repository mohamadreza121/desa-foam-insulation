import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, Phone } from "lucide-react";

export default function SteelFramingSolutionsPage() {
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
            Steel Framing
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Steel Framing Solutions Built for Strength, Precision, and Modern
            Construction
          </h1>

          <p className="mt-6 text-lg text-gray-300">Published Apr 30, 2025</p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] bg-white md:h-[650px]">
            <Image
              src="/images/blog/steel-framing.jpg"
              alt="Steel Framing Solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Steel framing has become a trusted choice for modern residential,
              commercial, and construction projects because it offers strength,
              precision, and long-term durability.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              At DESA Foam Insulation, we provide professional steel framing
              services designed to support clean construction, accurate layouts,
              and dependable structural performance.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Steel framing gives modern projects a strong, accurate, and
                durable foundation for clean construction and lasting results.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Steel Framing Is Growing in Modern Construction
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Steel framing is valued for its consistency, dimensional accuracy,
              and resistance to common issues that can affect traditional
              framing materials. It helps builders create straight walls,
              accurate openings, and stable assemblies.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Strength and Durability
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Steel provides excellent strength while maintaining a clean and
              lightweight framing system. It is commonly used in commercial
              spaces, basements, partitions, structural layouts, and modern
              interior construction.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Precision Installation Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Proper steel framing requires careful measurements, accurate
              alignment, and clean installation. Our team focuses on precision
              from layout to final fastening so each project is ready for the
              next stage of construction.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Better Support for Modern Building Systems
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Steel framing works well with drywall, insulation, fireproofing,
              mechanical systems, and commercial finishing requirements. This
              makes it a practical choice for projects that demand efficiency
              and professional coordination.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Common Steel Framing Applications
            </h2>

            <ul className="space-y-4 text-lg leading-9 text-gray-700">
              <li>• Commercial interior partitions</li>
              <li>• Basement framing</li>
              <li>• Residential renovation layouts</li>
              <li>• Office and retail build-outs</li>
              <li>• Framing for drywall systems</li>
              <li>• Construction and retrofit projects</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              DESA Foam’s Approach to Steel Framing
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              We approach every steel framing project with accuracy, clean
              execution, and professional workmanship. From planning to
              installation, our goal is to create framing systems that support
              the full performance of the finished space.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Building2 size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Need Professional Steel Framing?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                DESA Foam Insulation can help with precise steel framing for
                residential, commercial, and construction projects.
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