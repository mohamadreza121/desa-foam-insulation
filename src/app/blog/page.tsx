import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <main className="bg-light">
      <section className="bg-dark pt-40 pb-24 text-white">
        <div className="container-custom text-center">
          <p className="mb-4 font-bold uppercase tracking-[0.25em] text-primary">
            DESA Foam Blog
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Insights, Tips & Project Knowledge
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Learn more about insulation, fireproofing, drywall, framing, attic
            upgrades, and building performance.
          </p>
        </div>
      </section>

      <section className="container-custom py-24">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2"
        >
          <div className="relative min-h-[500px] bg-white p-6">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
              Featured Article
            </p>

            <div
              className="
                mb-6
                h-1
                w-16
                rounded-full
                bg-primary
                transition-all
                duration-500
                ease-out
                group-hover:w-40
                group-hover:shadow-[0_0_20px_rgba(179,32,37,0.6)]
              "
            ></div>

            <h2 className="mb-5 text-3xl font-black text-dark md:text-5xl">
              {featured.title}
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              {featured.excerpt}
            </p>

            <div className="flex items-center gap-3 font-bold text-gray-500">
              <CalendarDays size={20} />
              {featured.date}
            </div>

            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-black text-white">
              Read Article <ArrowRight size={18} />
            </span>
          </div>
        </Link>

        <div className="mt-28 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </p>

                <div
                  className="
                    mb-4
                    h-1
                    w-12
                    rounded-full
                    bg-primary
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-24
                    group-hover:shadow-[0_0_15px_rgba(179,32,37,0.5)]
                  "
                ></div>

                <h2 className="mb-4 text-2xl font-black leading-tight text-dark">
                  {post.title}
                </h2>

                <p className="mb-6 leading-7 text-gray-600">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-500">
                    {post.date}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-white transition group-hover:bg-primary">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}