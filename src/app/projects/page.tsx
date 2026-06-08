"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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

const projects = [
  {
    title: "Drywall Installation",
    category: "Drywall",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Spray Foam Roof Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "Spray Foam Ceiling Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Spray Foam Wall Insulation",
    category: "Spray Foam",
    image: "/images/projects/project-04.jpg",
  },
  {
    title: "Blown-In Attic Insulation",
    category: "Attic",
    image: "/images/projects/project-05.jpg",
  },
  {
    title: "Batt Insulation Materials",
    category: "Batt",
    image: "/images/projects/project-06.jpg",
  },
  {
    title: "Drywall Ceiling Installation",
    category: "Drywall",
    image: "/images/projects/project-07.jpg",
  },
  {
    title: "Spray Foam Framing Project",
    category: "Spray Foam",
    image: "/images/projects/project-08.jpg",
  },
  {
    title: "Cementitious Fireproofing",
    category: "Fireproofing",
    image: "/images/projects/project-09.jpg",
  },
  {
    title: "Spray-Applied Fireproofing",
    category: "Fireproofing",
    image: "/images/projects/project-10.jpg",
  },
  {
    title: "Batt Insulation Installation",
    category: "Batt",
    image: "/images/projects/project-11.jpg",
  },
  {
    title: "Concrete Slab Jacking",
    category: "Slab Jacking",
    image: "/images/projects/project-12.jpg",
  },
  {
    title: "Polyurethane Foam Slab Lifting",
    category: "Slab Jacking",
    image: "/images/projects/project-13.jpg",
  },
  {
    title: "Steel Ceiling Framing",
    category: "Steel Framing",
    image: "/images/projects/project-14.jpg",
  },
  {
    title: "Concrete Leveling Repair",
    category: "Slab Jacking",
    image: "/images/projects/project-15.jpg",
  },
  {
    title: "Attic Preparation",
    category: "Attic",
    image: "/images/projects/project-16.jpg",
  },
  {
    title: "Ceiling Steel Stud Framing",
    category: "Steel Framing",
    image: "/images/projects/project-17.jpg",
  },
  {
    title: "Steel Framing Installation",
    category: "Steel Framing",
    image: "/images/projects/project-18.jpg",
  },
  {
    title: "Spray Foam Around Steel Framing",
    category: "Spray Foam",
    image: "/images/projects/project-19.jpg",
  },
  {
    title: "Spray Foam Wall Application",
    category: "Spray Foam",
    image: "/images/projects/project-20.jpg",
  },
  {
    title: "Spray Fireproofing Application",
    category: "Fireproofing",
    image: "/images/projects/project-21.jpg",
  },
  {
    title: "Structural Fireproofing",
    category: "Fireproofing",
    image: "/images/projects/project-22.jpg",
  },
  {
    title: "Cementitious Fireproofing Close-Up",
    category: "Fireproofing",
    image: "/images/projects/project-23.jpg",
  },
  {
    title: "Attic Air Sealing Preparation",
    category: "Attic",
    image: "/images/projects/project-24.jpg",
  },
  {
    title: "Attic Framing Preparation",
    category: "Attic",
    image: "/images/projects/project-25.jpg",
  },
  {
    title: "Blown-In Attic Insulation",
    category: "Attic",
    image: "/images/projects/project-26.jpg",
  },
  {
    title: "Finished Attic Insulation",
    category: "Attic",
    image: "/images/projects/project-27.jpg",
  },
  {
    title: "Attic Loose-Fill Insulation",
    category: "Attic",
    image: "/images/projects/project-28.jpg",
  },
  {
    title: "Fiberglass Batt Insulation",
    category: "Batt",
    image: "/images/projects/project-29.jpg",
  },
  {
    title: "Batt Insulation Wall Cavity",
    category: "Batt",
    image: "/images/projects/project-30.jpg",
  },
  {
    title: "Drywall Finishing Preparation",
    category: "Drywall",
    image: "/images/projects/project-31.jpg",
  },
  {
    title: "Drywall Taping and Finishing",
    category: "Drywall",
    image: "/images/projects/project-32.jpg",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof projects)[0] | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
                href="/project-assessment"
                className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {mounted &&
        selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 rounded-full bg-white p-3 text-black shadow-lg transition hover:bg-red-600 hover:text-white"
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            <div
              className="relative flex max-h-[88vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-3xl bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1400}
                height={900}
                className="max-h-[88vh] w-auto max-w-full object-contain"
                priority
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-red-300">
                  {selectedImage.category}
                </p>
                <h3 className="mt-1 text-2xl font-bold">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>,
          document.body
        )}
    </main>
  );
}