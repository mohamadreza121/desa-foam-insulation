"use client";

import { useState } from "react";
import Link from "next/link";
import Cal from "@calcom/embed-react";

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

export default function BookingPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Desa Foam Insulation
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Request a Free Estimate
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Tell us about your project and schedule a free consultation. Our
            team will review your request and contact you with the next steps.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-neutral-100 p-8">
            <h2 className="text-3xl font-bold text-neutral-950">
              How it works
            </h2>

            <div className="mt-8 space-y-6">
              {[
                [
                  "01",
                  "Submit your project details",
                  "Tell us what service you need, where the property is, and what you want done.",
                ],
                [
                  "02",
                  "Schedule a consultation",
                  "Choose a convenient time for a quick project review or estimate call.",
                ],
                [
                  "03",
                  "Get your quote",
                  "Our team reviews your project and follows up with pricing and availability.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-950">{title}</h3>
                    <p className="mt-1 text-neutral-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6">
              <p className="font-bold text-neutral-950">Need urgent help?</p>
              <p className="mt-2 text-neutral-600">
                Call us directly or send a request and we’ll contact you as soon
                as possible.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex font-bold text-red-600"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm md:p-8">
            {!showCalendar ? (
              <>
                <h2 className="text-3xl font-bold text-neutral-950">
                  Project Information
                </h2>

                <form
                    className="mt-8 space-y-5"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      setIsSubmitting(true);
                      setError("");

                      const formData = new FormData(event.currentTarget);

                      const payload = {
                        name: String(formData.get("name")),
                        email: String(formData.get("email")),
                        phone: String(formData.get("phone")),
                        service: String(formData.get("service")),
                        address: String(formData.get("address")),
                        message: String(formData.get("message")),
                      };

                      const response = await fetch("/api/booking", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload),
                      });

                      setIsSubmitting(false);

                      if (!response.ok) {
                        const result = await response.json();
                        setError(result.error || "Something went wrong. Please try again.");
                        return;
                      }
                      setSuccess(true);
                      setShowCalendar(true);
                    }}
                  >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-bold text-neutral-700">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-neutral-700">
                        Phone Number
                      </label>
                      <input
                        required
                        name="phone"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                        placeholder="416-000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-bold text-neutral-700">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-neutral-700">
                        Service Needed
                      </label>
                      <select
                        required
                        name="service"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-neutral-700">
                      Property Address
                    </label>
                    <input
                      name="address"
                      className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                      placeholder="Project address"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-neutral-700">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                      placeholder="Tell us about the project..."
                    />
                  </div>

                  {success && (
                    <p className="rounded-2xl bg-green-50 p-4 font-semibold text-green-700">
                      Request received. Please choose a consultation time.
                    </p>
                  )}

                  {error && (
                    <p className="rounded-2xl bg-red-50 p-4 font-semibold text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700 disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request & Schedule"}
                  </button>
                </form>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="mb-6 font-bold text-red-600"
                >
                  ← Back to form
                </button>

                <h2 className="mb-6 text-3xl font-bold text-neutral-950">
                  Choose a Consultation Time
                </h2>

                <div className="overflow-hidden rounded-3xl border border-neutral-200">
                  <Cal
                    calLink="mohammadreza-heidarpoor-er3ddu/30min"
                    style={{ width: "100%", height: "700px" }}
                    config={{
                      layout: "month_view",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}