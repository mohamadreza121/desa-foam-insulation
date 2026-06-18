import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const googleMapsEmbedKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

const googlePlaceId = "ChIJ__9zphbFKogRJfrRJzIsA04";

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
    <footer className="bg-dark pb-10 pt-20 text-white">
      <div className="container-custom">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 — Company and logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="DESA Foam Insulation"
                width={210}
                height={90}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <h3 className="mt-6 text-2xl font-bold">
              DESA Foam Insulation
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Professional insulation, drywall, steel framing, fireproofing,
              and foam slab jacking services throughout Toronto and the GTA.
            </p>
          </div>

          {/* Row 1 — Navigation */}
          <div>
            <h4 className="mb-5 text-xl font-semibold">Quick Links</h4>

            <nav className="flex flex-col items-start gap-3">
              <Link
                href="/"
                className="transition hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="transition hover:text-primary"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="transition hover:text-primary"
              >
                Projects
              </Link>

              <Link
                href="/project-assessment"
                className="transition hover:text-primary"
              >
                Start a Project
              </Link>

              <Link
                href="/blog"
                className="transition hover:text-primary"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Row 1 — Contact information */}
          <div>
            <h4 className="mb-5 text-xl font-semibold">Contact</h4>

            <div className="space-y-4 leading-7 text-gray-400">
              <a
                href="https://share.google/9l3EATQ6ZuIMwFmj9"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-primary"
              >
                310 Millway Avenue #6
                <br />
                Concord, ON L4K 3W3
              </a>

              <a
                href="tel:+16479602090"
                className="block transition hover:text-primary"
              >
                (647) 960-2090
              </a>

              <a
                href="mailto:dee@desafoaminsulation.com"
                className="block break-words transition hover:text-primary"
              >
                dee@desafoaminsulation.com
              </a>

              <div>
                <p>Monday – Saturday: 7:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Row 2 — Google map */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Find Us
                </p>

                <h3 className="mt-2 text-2xl font-bold">Our Location</h3>
              </div>

              <a
                href="https://share.google/9l3EATQ6ZuIMwFmj9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary transition hover:text-red-400"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
              {googleMapsEmbedKey ? (
                <iframe
                  title="DESA Foam Insulation location on Google Maps"
                  src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedKey}&q=place_id:${googlePlaceId}`}
                  width="100%"
                  height="320"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0"
                />
              ) : (
                <div className="flex h-[320px] items-center justify-center px-6 text-center text-sm text-gray-400">
                  Google Maps is temporarily unavailable.
                </div>
              )}
            </div>
          </div>

          {/* Row 2 — Social links */}
          <div>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Stay Connected
              </p>

              <h3 className="mt-2 text-2xl font-bold">Follow Us</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Follow DESA Foam Insulation for recent projects, insulation
                work, construction updates, and company news.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow DESA Foam Insulation on ${social.name}`}
                      title={social.name}
                      className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-1 hover:border-primary hover:bg-primary"
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DESA Foam Insulation. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}