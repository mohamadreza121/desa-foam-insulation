import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { blogs } from "@/data/blogs";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const currentIndex = blogs.findIndex((post) => post.slug === params.slug);
  const post = blogs[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = blogs[currentIndex - 1] ?? null;
  const nextPost = blogs[currentIndex + 1] ?? null;

  return (
    <main className="bg-light">
      <section className="bg-dark pt-40 pb-20 text-white">
        <div className="container-custom">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-bold text-gray-300 transition hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
            {post.category}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 text-gray-300">
            <CalendarDays size={20} />
            <span className="font-semibold">{post.date}</span>
          </div>
        </div>
      </section>

      <section className="container-custom -mt-8 pb-24">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[320px] md:h-[520px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 py-12 md:px-10">
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-7 text-lg font-medium leading-9 text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </article>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary">
                <ArrowLeft size={16} />
                Previous Article
              </p>
              <h3 className="text-xl font-black text-dark">
                {previousPost.title}
              </h3>
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
                <ArrowRight size={16} />
              </p>
              <h3 className="text-xl font-black text-dark">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
}