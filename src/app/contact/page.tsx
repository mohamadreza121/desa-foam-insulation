"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  SprayCan,
} from "lucide-react";

const services = [
  "Spray Foam Insulation",
  "Drywall",
  "Batt Insulation",
  "Attic Insulation",
  "Attic Insulation Removal",
  "Steel Framing",
  "Fireproofing",
  "Foam Slab Jacking",
];

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name"));
    const email = String(form.get("email"));
    const phone = String(form.get("phone"));
    const service = String(form.get("service"));
    const message = String(form.get("message"));

    const subject = encodeURIComponent(`Website Quote Request - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:dee@desafoaminsulation.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <main className="bg-light">
      <section className="relative overflow-hidden bg-dark pb-24 pt-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(179,32,37,0.35),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(30,136,229,0.2),transparent_30%)]" />

        <div className="container-custom relative z-10 text-center">
          <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
            Contact DESA Foam
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black md:text-7xl">
            Let’s talk about your next project.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Request a quote for insulation, drywall, framing, fireproofing, or
            foam slab jacking services in Toronto.
          </p>
        </div>
      </section>

      <section className="container-custom py-24">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-dark p-8 text-white md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary">
                <SprayCan size={38} />
              </div>

              <h2 className="mb-5 text-4xl font-black">
                Fast quotes. Clear communication. Professional work.
              </h2>

              <p className="mb-10 text-lg leading-8 text-gray-300">
                Tell us what service you need and our team will review your
                request. We’ll help you choose the right solution for your
                property.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-black">Address</p>
                    <p className="text-gray-300">
                      310 Millway Avenue #6,
                      <br />
                      Concord, ON, L4K 3W3
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-black">Phone</p>
                    <Link
                      href="tel:6479602090"
                      className="text-gray-300 hover:text-primary"
                    >
                      (647) 960-2090
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-black">Email</p>
                    <Link
                      href="mailto:dee@desafoaminsulation.com"
                      className="text-gray-300 hover:text-primary"
                    >
                      dee@desafoaminsulation.com
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-black">Business Hours</p>
                    <p className="text-gray-300">Mon - Sat: 7AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative p-8 md:p-12">
            <div className="pointer-events-none absolute right-8 top-8 flex gap-2 opacity-20">
              <span className="h-8 w-8 rounded-full bg-primary" />
              <span className="mt-8 h-5 w-5 rounded-full bg-accent" />
              <span className="h-12 w-12 rounded-full bg-primary" />
            </div>

            <h2 className="mb-2 text-3xl font-black text-dark">
              Request a Free Quote
            </h2>

            <p className="mb-8 text-gray-600">
              Fill out the form below and we’ll get back to you as soon as
              possible.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl border border-black/10 bg-light px-5 py-4 font-semibold outline-none transition focus:border-primary focus:bg-white"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="rounded-xl border border-black/10 bg-light px-5 py-4 font-semibold outline-none transition focus:border-primary focus:bg-white"
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="rounded-xl border border-black/10 bg-light px-5 py-4 font-semibold outline-none transition focus:border-primary focus:bg-white"
              />

              <select
                name="service"
                required
                className="rounded-xl border border-black/10 bg-light px-5 py-4 font-semibold text-gray-600 outline-none transition focus:border-primary focus:bg-white"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              required
              placeholder="Tell us about your project..."
              rows={7}
              className="mt-5 w-full rounded-xl border border-black/10 bg-light px-5 py-4 font-semibold outline-none transition focus:border-primary focus:bg-white"
            />

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-black text-white transition hover:bg-red-700"
            >
              Send Request
              <Send size={18} />
            </button>

            {status && (
              <p className="mt-5 flex items-center gap-2 font-bold text-green-700">
                <CheckCircle2 size={20} />
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}