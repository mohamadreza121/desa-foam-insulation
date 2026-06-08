"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  ImagePlus,
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

const propertyTypes = [
  "Residential Home",
  "Commercial Building",
  "New Construction",
  "Renovation",
  "Industrial / Warehouse",
  "Other",
];

const timelines = [
  "As soon as possible",
  "Within 1-2 weeks",
  "Within 1 month",
  "1-3 months",
  "Planning for later",
];

const budgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,500",
  "$7,500 - $15,000",
  "$15,000+",
  "Not sure yet",
];

export default function ProjectAssessmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950 opacity-95" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Start A Project
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Request a Project Assessment
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Tell us about your project. Our team reviews each request and
              follows up with suitable projects based on scope, location,
              timeline, and availability.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#assessment-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Start Assessment
                <ArrowRight size={20} />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-black">What Happens Next?</h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Submit Details",
                  text: "Send your project type, location, budget, timeline, and scope.",
                },
                {
                  icon: ImagePlus,
                  title: "Add Photos",
                  text: "Include a Google Drive, iCloud, Dropbox, or photo link if available.",
                },
                {
                  icon: Hammer,
                  title: "We Review",
                  text: "Our team reviews the request and contacts suitable projects.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            "Serious project requests only",
            "Reviewed based on scope and availability",
            "Best for residential and commercial work",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white p-6 shadow-sm"
            >
              <CheckCircle2 className="shrink-0 text-red-600" size={24} />
              <p className="font-bold text-neutral-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="assessment-form" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-red-600">
              Project Details
            </p>

            <h2 className="mt-4 text-4xl font-black text-neutral-950 md:text-5xl">
              Help us understand the project before we contact you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              This form helps us filter requests properly and focus on projects
              that match our services, location, and schedule.
            </p>

            <div className="mt-8 rounded-3xl bg-neutral-950 p-8 text-white">
              <h3 className="text-2xl font-black">Tip</h3>
              <p className="mt-4 leading-8 text-neutral-300">
                For faster review, include clear photos of the attic, walls,
                ceiling, concrete, or job site using a shareable photo link.
              </p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
           onSubmit={async (event) => {
            event.preventDefault();

            const form = event.currentTarget;

            setIsSubmitting(true);
            setSuccess(false);
            setError("");

            const formData = new FormData(form);

            const payload = {
              name: String(formData.get("name")),
              email: String(formData.get("email")),
              phone: String(formData.get("phone")),
              service: String(formData.get("service")),
              propertyType: String(formData.get("propertyType")),
              city: String(formData.get("city")),
              address: String(formData.get("address")),
              projectSize: String(formData.get("projectSize")),
              timeline: String(formData.get("timeline")),
              budget: String(formData.get("budget")),
              photoLink: String(formData.get("photoLink")),
              message: String(formData.get("message")),
            };

            const response = await fetch("/api/project-assessment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });

            setIsSubmitting(false);

            if (!response.ok) {
              const result = await response.json();
              setError(result.error || "Something went wrong.");
              return;
            }

            form.reset();
            setSuccess(true);
          }}  
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Full Name *
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
                  Phone Number *
                </label>
                <input
                  required
                  name="phone"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                  placeholder="416-000-0000"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-neutral-700">
                Email *
              </label>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                placeholder="you@email.com"
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Service Needed *
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

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Property Type *
                </label>
                <select
                  required
                  name="propertyType"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-neutral-700">
                  City *
                </label>
                <input
                  required
                  name="city"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                  placeholder="Toronto, Vaughan, Concord..."
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Address
                </label>
                <input
                  name="address"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                  placeholder="Project address"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Project Size
                </label>
                <input
                  name="projectSize"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                  placeholder="sq ft / rooms"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Timeline *
                </label>
                <select
                  required
                  name="timeline"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Budget *
                </label>
                <select
                  required
                  name="budget"
                  className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                >
                  <option value="">Select budget</option>
                  {budgets.map((budget) => (
                    <option key={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-neutral-700">
                Photo / File Link
              </label>
              <input
                name="photoLink"
                className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                placeholder="Google Drive, iCloud, Dropbox, or image link"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-neutral-700">
                Project Details *
              </label>
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-red-600"
                placeholder="Describe the project, current issue, preferred timing, and anything important we should know..."
              />
            </div>

            {success && (
              <div className="mt-5 rounded-2xl bg-green-50 p-5 font-semibold text-green-700">
                Project assessment received. Our team will review the details
                and contact suitable projects based on scope and availability.
              </div>
            )}

            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 p-5 font-semibold text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Project Assessment"}
              {!isSubmitting && <ArrowRight size={20} />}
            </button>

            <p className="mt-4 text-center text-sm text-neutral-500">
              Submitting this form does not guarantee project acceptance. DESA
              Foam reviews requests based on project fit and availability.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}