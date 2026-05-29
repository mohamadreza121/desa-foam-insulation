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

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/75 backdrop-blur-md">
      <div className="container-custom flex h-24 items-center justify-between">
        <Link href="/" className="relative h-16 w-52">
          <Image
            src="/images/desa-logo.png"
            alt="DESA Foam Insulation"
            fill
            sizes="208px"
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-white transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          className="hidden rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-red-700 lg:inline-flex"
        >
          Book Online
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Open menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="bg-black px-6 py-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/booking"
                className="rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Book Online
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}