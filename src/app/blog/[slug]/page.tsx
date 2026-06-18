import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { blogs } from "@/data/blogs";

const siteUrl = "https://desafoaminsulation.com";
const businessName = "DESA Foam Insulation";
const businessLogo = "/images/desa-logo.png";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getIsoDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return undefined;
  }

  return parsedDate.toISOString();
}

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const pageSlug = `/blog/${post.slug}`;
  const pageUrl = `${siteUrl}${pageSlug}`;
  const socialTitle = `${post.title} | ${businessName}`;
  const publishedTime = getIsoDate(post.date);

  return {
    title: post.title,
    description: post.excerpt,

    alternates: {
      canonical: pageSlug,
    },

    openGraph: {
      title: socialTitle,
      description: post.excerpt,
      url: pageUrl,
      siteName: businessName,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      locale: "en_CA",
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
      authors: [businessName],
      section: post.category,
    },

    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: post.excerpt,
      images: [post.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const currentIndex = blogs.findIndex((post) => post.slug === slug);
  const post = blogs[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = blogs[currentIndex - 1] ?? null;
  const nextPost = blogs[currentIndex + 1] ?? null;

  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const absoluteImageUrl = getAbsoluteUrl(post.image);
  const absoluteLogoUrl = getAbsoluteUrl(businessLogo);
  const publishedTime = getIsoDate(post.date);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        name: post.title,
        description: post.excerpt,
        url: pageUrl,
        image: {
          "@type": "ImageObject",
          url: absoluteImageUrl,
        },
        articleSection: post.category,
        datePublished: publishedTime,
        dateModified: publishedTime,

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },

        author: {
          "@type": "Organization",
          name: businessName,
          url: siteUrl,
        },

        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#business`,
          name: businessName,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: absoluteLogoUrl,
          },
        },

        isPartOf: {
          "@type": "Blog",
          "@id": `${siteUrl}/blog#blog`,
          name: `${businessName} Blog`,
          url: `${siteUrl}/blog`,
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-light">
        <section className="bg-dark pb-20 pt-40 text-white">
          <div className="container-custom">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 font-bold text-gray-300 transition hover:text-primary"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Blog
            </Link>

            <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
              {post.category}
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3 text-gray-300">
              <CalendarDays size={20} aria-hidden="true" />

              <time
                dateTime={publishedTime}
                className="font-semibold"
              >
                {post.date}
              </time>
            </div>
          </div>
        </section>

        <section className="container-custom -mt-8 pb-24">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="relative h-[320px] md:h-[520px]">
              <Image
                src={post.image}
                alt={`${post.title} article by DESA Foam Insulation`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-primary">
                {post.category}
              </p>

              <p className="mb-10 text-xl font-semibold leading-9 text-gray-800">
                {post.excerpt}
              </p>

              {post.content.map((paragraph, index) => (
                <p
                  key={`${post.slug}-${index}`}
                  className="mb-7 text-lg font-medium leading-9 text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          <nav
            className="mt-10 grid gap-5 md:grid-cols-2"
            aria-label="Blog article navigation"
          >
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary">
                  <ArrowLeft size={16} aria-hidden="true" />
                  Previous Article
                </p>

                <h2 className="text-xl font-black text-dark">
                  {previousPost.title}
                </h2>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="rounded-2xl bg-white p-6 text-right shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-2 flex items-center justify-end gap-2 text-sm font-black uppercase tracking-widest text-primary">
                  Next Article
                  <ArrowRight size={16} aria-hidden="true" />
                </p>

                <h2 className="text-xl font-black text-dark">
                  {nextPost.title}
                </h2>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-12 rounded-3xl bg-dark p-8 text-white md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-primary">
                  Start Your Project
                </p>

                <h2 className="mt-4 text-3xl font-black md:text-4xl">
                  Need insulation or construction services in Toronto and the
                  GTA?
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                  Submit your project details and our team will review your
                  service needs, location, timeline, and scope.
                </p>
              </div>

              <Link
                href="/project-assessment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-black text-white transition hover:bg-red-700"
              >
                Start a Project
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}