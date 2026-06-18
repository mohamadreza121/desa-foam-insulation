"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Spray Foam Insulation",
    kicker: "Energy Efficiency",
    text: "High-performance spray foam insulation that seals gaps, improves comfort, and helps reduce heating and cooling loss.",
    image: "/images/services/spray-foam.png",
    href: "/services/spray-foam-insulation",
  },
  {
    title: "Drywall",
    kicker: "Clean Finishing",
    text: "Professional drywall installation and finishing for residential and commercial construction projects.",
    image: "/images/services/drywall.png",
    href: "/services/drywall",
  },
  {
    title: "Batt Insulation",
    kicker: "Reliable Coverage",
    text: "Cost-effective batt insulation installed with care to improve comfort, thermal control, and sound reduction.",
    image: "/images/services/batt-insulation.png",
    href: "/services/batt-insulation",
  },
  {
    title: "Attic Insulation",
    kicker: "Comfort Upgrade",
    text: "Complete attic insulation installations and top-ups designed to reduce energy waste and improve indoor comfort.",
    image: "/images/services/attic-insulation.png",
    href: "/services/attic-insulation",
  },
  {
    title: "Attic Insulation Removal",
    kicker: "Safe Removal",
    text: "Clean and efficient removal of old, damaged, or underperforming attic insulation before upgrading your space.",
    image: "/images/services/attic-removal.png",
    href: "/services/attic-insulation-removal",
  },
  {
    title: "Steel Framing",
    kicker: "Structural Support",
    text: "Precise steel framing services for durable, accurate, and professional construction builds.",
    image: "/images/services/steel-framing.png",
    href: "/services/steel-framing",
  },
  {
    title: "Fireproofing",
    kicker: "Code & Safety",
    text: "Fireproofing solutions that help protect buildings, improve safety, and support code compliance.",
    image: "/images/services/fireproofing.png",
    href: "/services/fireproofing",
  },
  {
    title: "Foam Slab Jacking",
    kicker: "Concrete Leveling",
    text: "High-density polyurethane foam slab jacking to lift and stabilize sunken concrete surfaces quickly.",
    image: "/images/services/slab-jacking.png",
    href: "/services/foam-slab-jacking",
  },
];

const benefits = [
  "Commercial & residential service",
  "Toronto-based team",
  "20+ years of experience",
  "Clean, professional job sites",
];

export default function ServicesClient() {
  return (
    <main className="bg-[#f5f7fa]">
      <section className="relative overflow-hidden bg-dark pt-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,32,37,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(30,136,229,0.22),transparent_30%)]" />

        <div className="container-custom relative z-10 pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white">
                DESA Foam Insulation Services
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                Built for comfort, safety, and performance.
              </h1>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                DESA Foam Insulation provides professional insulation,
                drywall, framing, fireproofing, and slab jacking services for
                residential and commercial projects across Toronto and the GTA.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom pb-24 pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className={`group relative min-h-[370px] overflow-hidden rounded-3xl bg-black shadow-xl ${
                  isLarge ? "lg:col-span-6" : "lg:col-span-3"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} service by DESA Foam Insulation`}
                  fill
                  sizes={
                    isLarge
                      ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-primary">
                    {service.kicker}
                  </p>

                  <h2 className="mb-4 text-3xl font-black text-white">
                    {service.title}
                  </h2>

                  <p className="mb-6 max-w-xl text-sm font-medium leading-7 text-gray-200">
                    {service.text}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-dark transition hover:bg-primary hover:text-white"
                  >
                    View Service
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-dark p-8 text-white md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
                  Need Help Choosing?
                </p>

                <h2 className="text-3xl font-black md:text-5xl">
                  Tell us about your project. We’ll recommend the right service.
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