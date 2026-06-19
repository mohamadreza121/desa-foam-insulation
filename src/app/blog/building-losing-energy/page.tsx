import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Zap, Phone } from "lucide-react";

export default function BuildingLosingEnergyPage() {
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
            Energy Efficiency
          </p>

          <h1 className="max-w-6xl text-5xl font-black leading-tight md:text-7xl">
            From Attic to Basement: Where Your Building Is Losing Energy and How
            DESA Foam Insulation Fixes It
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Published Jan 4, 2025
          </p>
        </div>
      </section>

      <section className="container-custom -mt-10 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[350px] md:h-[650px]">
            <Image
              src="/images/blog/energy-loss.jpg"
              alt="Building Energy Loss"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            <p className="text-xl leading-9 text-gray-700">
              Energy loss is not always obvious. Many homeowners simply notice
              cold floors in winter, hot upstairs rooms in summer, or utility
              bills that seem far too high for the size of their property.
            </p>

            <p className="mt-6 text-xl leading-9 text-gray-700">
              The reality is that most buildings lose energy through multiple
              areas at the same time. The good news is that a strategic
              insulation and air-sealing plan can address those weak points and
              dramatically improve comfort, efficiency, and long-term
              performance.
            </p>

            <div className="my-14 rounded-2xl border-l-4 border-primary bg-red-50 p-8">
              <p className="text-xl font-bold text-dark">
                Most buildings don't have one energy leak — they have several.
                Solving them together delivers the biggest improvement in
                comfort and energy savings.
              </p>
            </div>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              The Attic: Your Biggest Opportunity
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Since warm air naturally rises, the attic is often the largest
              source of heat loss in a building. Many older Ontario homes still
              have insulation levels below modern recommendations.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Common attic issues include insufficient insulation depth, air
              leaks around penetrations, old settled insulation, and poor
              sealing around attic hatches and roof transitions.
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Insufficient insulation levels</li>
              <li>• Air leakage around penetrations</li>
              <li>• Old or contaminated insulation</li>
              <li>• Poor attic ventilation and airflow control</li>
            </ul>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              DESA Foam Insulation can remove old material, improve air sealing,
              and install new blown-in attic insulation or spray foam systems
              where appropriate.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Exterior Walls: Hidden Energy Loss
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Even when wall cavities contain insulation, energy can still
              escape through framing members, gaps, cracks, and poorly sealed
              penetrations.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Spray foam insulation helps address these challenges by combining
              insulation and air sealing into a single system.
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Air leaks around windows and doors</li>
              <li>• Poorly installed batt insulation</li>
              <li>• Thermal bridging through framing</li>
              <li>• Gaps and cracks in older structures</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Basements and Foundations
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Cold foundation walls and slab edges often create uncomfortable
              living conditions while increasing heating costs.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Foam insulation systems installed along rim joists, foundation
              walls, and slab edges can significantly improve comfort while
              helping reduce moisture and condensation risks.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Air Leakage: The Invisible Energy Thief
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Insulation alone cannot solve energy problems if air moves freely
              through the building envelope.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Air leakage can account for a surprisingly large percentage of
              total heat loss. Strategic spray foam applications help seal
              cracks, penetrations, transitions, and difficult-to-reach areas
              where traditional insulation struggles.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              The result is a tighter building envelope, improved comfort, and
              lower energy consumption year-round.
            </p>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Concrete Slabs and Exterior Hardscapes
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Energy efficiency is not the only concern. Sunken concrete,
              settlement issues, and voids beneath slabs can create safety
              hazards and long-term structural concerns.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Foam slab jacking uses expanding polyurethane foam to lift and
              stabilize settled concrete without the cost and disruption of full
              replacement.
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Lift sunken driveways and walkways</li>
              <li>• Fill hidden voids beneath slabs</li>
              <li>• Improve drainage around structures</li>
              <li>• Restore safety and appearance</li>
              <li>• Avoid expensive concrete replacement</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Why One Integrated Contractor Matters
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Many building performance issues overlap. An attic upgrade may
              require air sealing. A basement renovation may need insulation,
              framing, and fireproofing. Exterior improvements may benefit from
              slab stabilization and moisture control.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Because DESA Foam Insulation provides multiple specialized
              services, projects can be coordinated as complete building
              solutions rather than isolated repairs.
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
              <li>• Spray Foam Insulation</li>
              <li>• Batt Insulation</li>
              <li>• Attic Insulation</li>
              <li>• Attic Insulation Removal</li>
              <li>• Drywall Installation</li>
              <li>• Steel Framing</li>
              <li>• Fireproofing</li>
              <li>• Foam Slab Jacking</li>
            </ul>

            <h2 className="mb-6 mt-14 text-4xl font-black text-dark">
              Turning Energy Loss Into Long-Term Savings
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Every improvement to the building envelope reduces the workload on
              heating and cooling systems while improving comfort and lowering
              monthly energy costs.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              If your property suffers from cold rooms, high utility bills,
              drafts, moisture concerns, or visible settlement issues, now is
              the perfect time to evaluate where energy is escaping and how it
              can be corrected.
            </p>

            <div className="mt-20 rounded-3xl bg-dark p-10 text-center text-white">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Zap size={34} />
              </div>

              <h3 className="mb-4 text-4xl font-black">
                Ready To Stop Energy Loss?
              </h3>

              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                DESA Foam Insulation can evaluate your property from attic to
                slab and create a customized plan that improves comfort, reduces
                energy costs, and protects your investment.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-black text-white transition hover:bg-red-700"
              >
                <Phone size={18} />
                Request A Free Evaluation
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}