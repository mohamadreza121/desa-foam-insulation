import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container-custom grid gap-12 pb-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-2xl font-bold">
            DESA Foam Insulation
          </h3>

          <p className="text-gray-400">
            Professional insulation, drywall, steel framing, and fireproofing
            services throughout Toronto.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">
            Contact
          </h4>

          <div className="space-y-3 text-gray-400">
            <p>310 Millway Avenue #6, Concord, ON</p>
            <p>(647) 960-2090</p>
            <p>dee@desafoaminsulation.com</p>
            <p>Mon - Fri: 8AM - 6PM</p>
          </div>
        </div>
      </div>

      <div className="container-custom border-t border-white/10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} DESA Foam Insulation. All rights reserved.
      </div>
    </footer>
  );
}