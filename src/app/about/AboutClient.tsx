"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Timer, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Trophy,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: Timer,
    value: "On-Time",
    label: "Project Delivery",
  },
  {
    icon: ShieldCheck,
    value: "Pro",
    label: "Professional Workmanship",
  },
];

const sections = [
  {
    eyebrow: "Who We Are",
    title: "Built on experience, precision, and reliable results.",
    text: "At DESA Foam Insulation, we bring more than 20 years of hands-on construction and insulation experience to residential, commercial, renovation, and new construction projects across Toronto and the GTA. Our work is focused on improving comfort, energy efficiency, safety, and long-term building performance.",
    image: "/images/about/about-1.png",
    alt: "DESA Foam Insulation construction and insulation project",
    reverse: false,
  },
  {
    eyebrow: "What We Do",
    title: "Complete insulation and construction support from one team.",
    text: "From spray foam and batt insulation to drywall, attic upgrades, steel framing, fireproofing, and foam slab jacking, our team supports projects from early construction through final finishing. Every service is completed with clean execution, accurate installation, and careful attention to detail.",
    image: "/images/about/about-2.png",
    alt: "Professional insulation and construction work by DESA Foam",
    reverse: true,
  },
  {
    eyebrow: "Our Promise",
    title: "Professional job sites. Better performance. Work that lasts.",
    text: "Every project is approached with the same commitment to quality, safety, communication, and performance. Whether the goal is reducing energy loss, improving indoor comfort, protecting structural components, or upgrading an outdated space, DESA Foam Insulation provides practical solutions based on the needs of the project.",
    image: "/images/about/about-3.png",
    alt: "Completed insulation and construction project in the GTA",
    reverse: false,
  },
];

const specialties = [
  {
    name: "Spray Foam Insulation",
    href: "/services/spray-foam-insulation",
  },
  {
    name: "Drywall Installation",
    href: "/services/drywall",
  },
  {
    name: "Batt Insulation",
    href: "/services/batt-insulation",
  },
  {
    name: "Attic Insulation",
    href: "/services/attic-insulation",
  },
  {
    name: "Attic Insulation Removal",
    href: "/services/attic-insulation-removal",
  },
  {
    name: "Steel Framing",
    href: "/services/steel-framing",
  },
  {
    name: "Fireproofing",
    href: "/services/fireproofing",
  },
  {
    name: "Foam Slab Jacking",
    href: "/services/foam-slab-jacking",
  },
];

export default function AboutClient() {
  return (
    <main className="bg-light">
      <section className="relative overflow-hidden bg-dark px-4 pb-24 pt-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,32,37,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(30,136,229,0.18),transparent_32%)]" />

        <div className="container-custom relative z-10 text-center">
          <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
            About DESA Foam Insulation
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Professional insulation solutions built for Toronto and GTA
            properties.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We help homeowners, contractors, property managers, and businesses
            improve comfort, efficiency, safety, and building performance with
            dependable workmanship.
          </p>
        </div>
      </section>

      <section className="container-custom relative z-20 -mt-12">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-3 md:p-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-5 rounded-2xl border border-black/10 bg-light p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-3xl font-black text-dark">{item.value}</p>
                  <p className="font-semibold text-gray-600">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-custom py-24">
        <div className="space-y-24">
          {sections.map((section) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
              }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                section.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
                  {section.eyebrow}
                </p>

                <h2 className="mb-6 text-4xl font-black leading-tight text-dark md:text-5xl">
                  {section.title}
                </h2>

                <p className="text-lg font-medium leading-9 text-gray-700">
                  {section.text}
                </p>
              </div>

              <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-xl md:h-[470px]">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
                Core Specialties
              </p>

              <h2 className="text-4xl font-black leading-tight text-dark md:text-5xl">
                One team for insulation, drywall, framing, fireproofing, and
                concrete leveling.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Explore our primary residential and commercial services across
                Toronto and the Greater Toronto Area.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {specialties.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-light p-5 font-bold text-dark transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />

                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
                  Ready to Start?
                </p>

                <h2 className="text-3xl font-black md:text-5xl">
                  Let&apos;s talk about your next insulation or construction
                  project.
                </h2>
              </div>

              <Link
                href="/project-assessment"
                className="rounded-xl bg-primary px-8 py-4 text-center font-black text-white transition hover:bg-red-700"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}