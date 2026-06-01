"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const categories = [
  "All",
  "Spray Foam",
  "Drywall",
  "Batt",
  "Attic",
  "Steel Framing",
  "Fireproofing",
  "Slab Jacking",
];

const projects = Array.from({ length: 32 }, (_, index) => {
  const serviceGroups = [
    "Spray Foam",
    "Drywall",
    "Batt",
    "Attic",
    "Steel Framing",
    "Fireproofing",
    "Slab Jacking",
  ];

  const category = serviceGroups[index % serviceGroups.length];

  return {
    title: `${category} Project`,
    category,
    image: `/images/projects/project-${String(index + 1).padStart(2, "0")}.jpg`,
  };
});

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof projects)[0] | null>(
    null
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Desa Foam Insulation
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Real Projects.
                <br />
                Real Workmanship.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                Explore our insulation, drywall, steel framing, fireproofing,
                attic, and concrete lifting work across residential and
                commercial projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["20+", "Years Experience"],
                  ["32", "Project Photos"],
                  ["8", "Core Services"],
                  ["100%", "Professional Finish"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <p className="text-4xl font-bold text-white">{number}</p>
                    <p className="mt-1 text-sm text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={`${project.image}-${activeCategory}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setSelectedImage(project)}
              className="group mb-6 block w-full overflow-hidden rounded-3xl bg-neutral-100 text-left shadow-sm"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-red-300">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {[
            ["01", "Preparation", "We inspect the space, plan the work, and prepare the area for clean installation."],
            ["02", "Installation", "Our team completes the service with professional tools, materials, and attention to detail."],
            ["03", "Final Finish", "We check the work, clean the area, and leave the project ready for the next stage."],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-red-600">{step}</p>
              <h3 className="mt-4 text-2xl font-bold text-neutral-950">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-950 p-10 text-white md:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Want results like these?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Contact Desa Foam Insulation today for a free quote on your
                next insulation, drywall, framing, fireproofing, or slab lifting
                project.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-black"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1400}
              height={900}
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}