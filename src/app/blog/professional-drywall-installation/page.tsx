import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Hammer, Phone } from "lucide-react";

export default function DrywallInstallationPage() {
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
            Drywall Installation
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Professional Drywall Installation and Finishing That Elevates Every
            Space
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Published Mar 06, 2025
          </p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] bg-white md:h-[650px]">
            <Image
              src="/images/blog/drywall-installation.jpg"
              alt="Professional Drywall Installation"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Drywall is one of the most visible and important components of any
              interior space. It influences appearance, durability, comfort, and
              the overall quality of the finished project.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              Poor drywall work often leads to visible seams, uneven surfaces,
              cracking, and expensive repairs. Professional installation and
              finishing create smooth walls, clean lines, and a polished look
              that lasts for years.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Great drywall work is invisible. Smooth surfaces, flawless
                joints, and precise finishing create the foundation for every
                beautiful interior.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              More Than Just Hanging Drywall
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Professional drywall installation involves much more than mounting
              sheets to walls and ceilings. Every stage requires planning,
              coordination, and attention to detail.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              From framing preparation to final sanding, every step affects the
              appearance and performance of the finished space.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Complete Drywall Services
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              DESA Foam Insulation provides complete drywall solutions for
              residential and commercial projects.
            </p>

            <ul className="mt-6 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Drywall installation</li>
              <li>• Taping and mudding</li>
              <li>• Sanding and finishing</li>
              <li>• Ceiling systems</li>
              <li>• Renovation drywall repairs</li>
              <li>• New construction drywall work</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Supporting New Construction Projects
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              In new construction, drywall installation must align perfectly
              with framing, insulation, electrical systems, and mechanical
              components.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Our team works closely with builders and project managers to
              ensure proper sequencing, efficient installation, and consistent
              quality throughout the project.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Renovation and Repair Expertise
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Renovation projects require a different level of craftsmanship.
              Matching existing textures, correcting imperfections, and blending
              repairs seamlessly into existing surfaces takes experience and
              precision.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              DESA Foam Insulation delivers clean, professional results that
              restore the appearance and integrity of interior spaces.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              The Importance of Professional Finishing
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Finishing is where drywall craftsmanship becomes most visible.
              Poor taping and mudding often result in noticeable seams and
              imperfections once paint is applied.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Our finishing process focuses on smooth joint treatment, proper
              compound application, and meticulous sanding to create surfaces
              ready for premium paint finishes and modern interior designs.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Long-Term Durability and Performance
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Quality drywall installation helps prevent common issues such as
              cracking, nail pops, and surface movement over time.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              By using proven installation techniques and quality materials, we
              create wall systems that maintain their appearance and performance
              for years to come.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why Builders and Homeowners Choose DESA
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Reliability, efficiency, and clean workmanship are at the core of
              every project we complete. We understand construction schedules,
              coordinate with other trades, and consistently deliver
              professional results on time.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Hammer size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Need Professional Drywall Installation?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                From new construction to renovations and repairs, DESA Foam
                Insulation delivers drywall solutions built on precision,
                craftsmanship, and dependable execution.
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