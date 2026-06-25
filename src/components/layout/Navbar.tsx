"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="container-custom relative flex h-20 items-center justify-between gap-3 sm:h-24">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative h-12 w-36 shrink-0 sm:h-16 sm:w-52"
          aria-label="DESA Foam Insulation homepage"
        >
          <Image
            src="/images/desa-logo.png"
            alt="DESA Foam Insulation"
            fill
            sizes="(max-width: 640px) 144px, 208px"
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-semibold text-white transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/project-assessment"
          className="ml-auto hidden shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-5 py-3 font-bold text-white transition hover:bg-red-700 xl:inline-flex"
        >
          Start a Project
        </Link>

        {/* Tablet and mobile controls */}
        <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
          <Link
            href="/project-assessment"
            onClick={closeMenu}
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white transition hover:bg-red-700 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black px-6 py-7 xl:hidden"
          >
            <div className="container-custom flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-semibold text-white transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}