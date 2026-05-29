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
    label: "Certified Workmanship",
  },
];

const sections = [
  {
    eyebrow: "Who We Are",
    title: "Built on experience, precision, and reliable results.",
    text: "At DESA Foam Insulation, we bring more than 20 years of hands-on construction and insulation experience to residential, commercial, and renovation projects across Toronto. Our work is focused on improving comfort, energy efficiency, safety, and long-term building performance.",
    image: "/images/about/about-1.png",
    reverse: false,
  },
  {
    eyebrow: "What We Do",
    title: "Complete insulation and construction support from one team.",
    text: "From spray foam and batt insulation to drywall, attic upgrades, steel framing, fireproofing, and foam slab jacking, our team supports projects from early construction to final finishing. Every service is delivered with clean execution, accurate installation, and careful attention to detail.",
    image: "/images/about/about-2.png",
    reverse: true,
  },
  {
    eyebrow: "Our Promise",
    title: "Professional job sites. Better performance. Work that lasts.",
    text: "Every project is approached with the same commitment to quality, safety, and performance. Whether the goal is reducing energy loss, improving indoor comfort, strengthening a structure, or upgrading an outdated space, DESA Foam Insulation delivers practical solutions built around your project needs.",
    image: "/images/about/about-3.png",
    reverse: false,
  },
];

const specialties = [
  "Spray Foam Insulation",
  "Drywall Installation",
  "Batt Insulation",
  "Attic Insulation",
  "Attic Insulation Removal",
  "Steel Framing",
  "Fireproofing",
  "Foam Slab Jacking",
];

export default function AboutPage() {
  return (
    <main className="bg-light">
      <section className="relative overflow-hidden bg-dark px-4 pb-24 pt-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,32,37,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(30,136,229,0.18),transparent_32%)]" />

        <div className="container-custom relative z-10 text-center">
          <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
            About DESA Foam Insulation
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Professional insulation solutions built for Toronto properties.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We help homeowners, contractors, and businesses improve comfort,
            efficiency, safety, and structural performance with dependable
            workmanship.
          </p>
        </div>
      </section>

      <section className="container-custom -mt-12 relative z-20">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-3 md:p-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-5 rounded-2xl border border-black/10 bg-light p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon size={28} />
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
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
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
                  alt={section.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </motion.div>
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
                One team for insulation, framing, fireproofing, and concrete
                leveling.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {specialties.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-light p-5 font-bold text-dark transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {item}
                </div>
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
                  Ready To Start?
                </p>

                <h2 className="text-3xl font-black md:text-5xl">
                  Let’s talk about your next insulation or construction project.
                </h2>
              </div>

              <Link
                href="/contact"
                className="rounded-xl bg-primary px-8 py-4 text-center font-black text-white transition hover:bg-red-700"
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