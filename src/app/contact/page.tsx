import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const siteUrl = "https://desafoaminsulation.com";

export const metadata: Metadata = {
  title: "Contact DESA Foam Insulation | Toronto & GTA",
  description:
    "Contact DESA Foam Insulation for insulation and construction services in Toronto and the GTA. Call, email, or submit a project assessment.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact DESA Foam Insulation | Toronto & GTA",
    description:
      "Contact DESA Foam Insulation or submit a project assessment for insulation and construction services in Toronto and the GTA.",
    url: `${siteUrl}/contact`,
    siteName: "DESA Foam Insulation",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DESA Foam Insulation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DESA Foam Insulation | Toronto & GTA",
    description:
      "Contact DESA Foam Insulation or submit a project assessment for service in Toronto and the GTA.",
    images: ["/images/logo.png"],
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak directly with our team about your property, service needs, or project timeline.",
    label: "(647) 960-2090",
    href: "tel:+16479602090",
  },
  {
    icon: Mail,
    title: "Email Us",
    description:
      "Send us a general question or contact our team regarding an existing project.",
    label: "dee@desafoaminsulation.com",
    href: "mailto:dee@desafoaminsulation.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    description:
      "DESA Foam Insulation serves residential and commercial properties throughout Toronto and the GTA.",
    label: "310 Millway Avenue #6, Concord, ON L4K 3W3",
    href: "https://www.google.com/maps/place/Desa+Foam+Insulation/@43.8015398,-79.5322563,17z/data=!3m1!4b1!4m6!3m5!1s0x882ac516a673ffff:0x4e032c3227d1fa25!8m2!3d43.8015398!4d-79.5296814!16s%2Fg%2F11p5rmly5l?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact DESA Foam Insulation",
    url: `${siteUrl}/contact`,
    description:
      "Contact DESA Foam Insulation for insulation and construction services in Toronto and the GTA.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "DESA Foam Insulation",
      url: siteUrl,
      telephone: "+16479602090",
      email: "dee@desafoaminsulation.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "310 Millway Avenue #6",
        addressLocality: "Concord",
        addressRegion: "ON",
        postalCode: "L4K 3W3",
        addressCountry: "CA",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "17:00",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <main className="bg-light">
        <section className="relative overflow-hidden bg-dark pb-24 pt-40 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(179,32,37,0.35),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(30,136,229,0.2),transparent_30%)]" />

          <div className="container-custom relative z-10 text-center">
            <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
              Contact DESA Foam
            </p>

            <h1 className="mx-auto max-w-5xl text-5xl font-black md:text-7xl">
              Get in touch with our team.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Contact us with general questions, or complete our project
              assessment so our team can review your service needs, location,
              timeline, and project details.
            </p>
          </div>
        </section>

        <section className="container-custom py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith("http");

              return (
                <article
                  key={method.title}
                  className="flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-2xl font-black text-dark">
                    {method.title}
                  </h2>

                  <p className="mt-4 flex-1 leading-7 text-gray-600">
                    {method.description}
                  </p>

                  <Link
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-6 break-words font-bold text-primary transition hover:text-red-700"
                  >
                    {method.label}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-4 py-20 md:py-28">
          <div className="container-custom">
            <div className="grid overflow-hidden rounded-3xl bg-dark text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden p-8 md:p-12">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary">
                    <ClipboardList size={38} />
                  </div>

                  <h2 className="text-4xl font-black">
                    Have a project in mind?
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-300">
                    Complete the project assessment with details about your
                    property, requested service, project size, location,
                    timeline, and budget.
                  </p>

                  <Link
                    href="/project-assessment"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-black text-white transition hover:bg-red-700"
                  >
                    Start Project Assessment
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 md:p-12">
                <p className="font-bold uppercase tracking-[0.25em] text-primary">
                  What Happens Next
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  A clearer way to start your project.
                </h2>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-black">
                      1
                    </span>

                    <div>
                      <h3 className="text-xl font-black">
                        Submit your project details
                      </h3>

                      <p className="mt-2 leading-7 text-gray-300">
                        Tell us which service you need and provide the key
                        information about your property and project.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-black">
                      2
                    </span>

                    <div>
                      <h3 className="text-xl font-black">
                        Our team reviews the request
                      </h3>

                      <p className="mt-2 leading-7 text-gray-300">
                        We review the project scope, location, timeline, budget,
                        and any photos or supporting information.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-black">
                      3
                    </span>

                    <div>
                      <h3 className="text-xl font-black">
                        We contact you about the next step
                      </h3>

                      <p className="mt-2 leading-7 text-gray-300">
                        A member of our team will follow up based on the project
                        details and current availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom py-20 md:py-28">
          <div className="grid items-center gap-10 rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-primary">
                Business Hours
              </p>

              <h2 className="mt-4 text-4xl font-black text-dark">
                Available six days a week.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                Contact our team during regular business hours for general
                questions and existing project inquiries.
              </p>
            </div>

            <div className="rounded-2xl bg-light p-8">
              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-primary" size={28} />

                <div>
                  <p className="text-xl font-black text-dark">
                    Monday – Saturday
                  </p>
                  <p className="mt-1 text-lg text-gray-600">
                    7:00 AM – 5:00 PM
                  </p>

                  <p className="mt-5 text-xl font-black text-dark">Sunday</p>
                  <p className="mt-1 text-lg text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}