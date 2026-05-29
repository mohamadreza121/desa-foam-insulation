import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Flame, Phone } from "lucide-react";

export default function FireproofingSolutionsPage() {
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
            Fireproofing
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Fireproofing Solutions That Strengthen Safety, Compliance, and
            Structural Protection
          </h1>

          <p className="mt-6 text-lg text-gray-300">Published May 14, 2025</p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] bg-white md:h-[650px]">
            <Image
              src="/images/blog/fireproofing.jpg"
              alt="Fireproofing Solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Fire safety is one of the most important parts of any residential,
              commercial, or construction project. Proper fireproofing helps
              protect structural components, improve building safety, and support
              code compliance.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              At DESA Foam Insulation, we provide professional fireproofing
              services designed to strengthen building protection and improve
              long-term performance.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Professional fireproofing is not just about meeting code — it is
                about protecting people, property, and structural integrity.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Fireproofing Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Fireproofing helps slow the spread of heat and flame, giving
              structures more time to withstand fire exposure. This added layer
              of protection can make a major difference in safety planning and
              emergency response.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Supporting Building Code Compliance
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Many commercial, industrial, and multi-unit residential projects
              require fire-resistant applications to meet local building
              requirements. Professional installation helps ensure the material
              is applied correctly and performs as intended.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Protecting Structural Components
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Fireproofing can help protect steel, framing, assemblies, and
              other critical building components from heat damage. This improves
              the resilience of the structure and helps reduce risk during fire
              events.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Professional Application Makes the Difference
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              The effectiveness of fireproofing depends heavily on proper
              preparation, coverage, thickness, and application technique. Our
              team works carefully to deliver clean, consistent, and reliable
              results.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Common Fireproofing Applications
            </h2>

            <ul className="space-y-4 text-lg leading-9 text-gray-700">
              <li>• Commercial construction projects</li>
              <li>• Residential building upgrades</li>
              <li>• Steel framing protection</li>
              <li>• Mechanical and service areas</li>
              <li>• Renovation and retrofit projects</li>
              <li>• Code-compliance improvements</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              DESA Foam’s Approach
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              We approach every fireproofing project with attention to safety,
              accuracy, and long-term performance. From preparation to final
              application, our team focuses on clean execution and dependable
              results.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Flame size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Need Professional Fireproofing?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Our team can help improve safety, protection, and code
                compliance for your next project.
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