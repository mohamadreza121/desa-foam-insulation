import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/DESA-FOAM-Insulation/100066913128972/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/desafoaminsulation/",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com/Desa_Foam",
    icon: FaXTwitter,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/DESA_Foam_Insulation/",
    icon: FaPinterestP,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/desa-foam-insulation-97667b135/",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@desafoaminsulation7205",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white">
      <div className="container-custom grid gap-12 pb-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-2xl font-bold">DESA Foam Insulation</h3>

          <p className="text-gray-400">
            Professional insulation, drywall, steel framing, fireproofing, and
            foam slab jacking services throughout Toronto and the GTA.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/project-assessment">Start a Project</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">Contact</h4>

          <div className="space-y-3 text-gray-400">
            <p>310 Millway Avenue #6, Concord, ON</p>
            <p>(647) 960-2090</p>
            <p>dee@desafoaminsulation.com</p>
            <p>Mon - Sat: 7AM - 5PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="mt-6">
            <h5 className="mb-3 font-semibold text-white">Follow Us</h5>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom border-t border-white/10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} DESA Foam Insulation. All rights reserved.
      </div>
    </footer>
  );
}