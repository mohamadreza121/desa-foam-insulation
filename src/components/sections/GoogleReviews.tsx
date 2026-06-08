import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/googleReviews";

function StarRating({ rating, size = 22 }: { rating: number; size?: number }) {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill={star <= roundedRating ? "currentColor" : "none"}
          className={star <= roundedRating ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();
  const reviewsToShow = data.reviews.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-100 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-primary">
            Google Reviews
          </p>

          <h2 className="text-4xl font-black text-dark md:text-5xl">
            Customer Reviews
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            See what customers are saying about DESA Foam Insulation’s
            workmanship, communication, and project results.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-5 rounded-3xl border border-black/5 bg-light p-8 shadow-sm md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-6xl font-black text-dark">
                {data.rating.toFixed(1)}
              </p>

              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-gray-500">
                Google Rating
              </p>
            </div>

            <div className="hidden h-16 w-px bg-black/10 md:block" />

            <div className="flex flex-col items-center md:items-start">
              <StarRating rating={data.rating} size={30} />

              <p className="mt-3 text-lg font-bold text-dark">
                {data.reviewCount > 0
                  ? `Based on ${data.reviewCount} Google Reviews`
                  : "Google Reviews"}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                Reviews from DESA Foam Insulation’s Google Profile
              </p>
            </div>
          </div>
        </div>

        {reviewsToShow.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            {reviewsToShow.map((review, index) => (
              <article
                key={`${review.authorName}-${index}`}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-light p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <StarRating rating={review.rating} size={20} />

                <p className="mt-6 flex-1 text-base leading-8 text-gray-700">
                  “{review.text}”
                </p>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/10 pt-6">
                  <div className="flex items-center gap-3">
                    {review.profilePhotoUrl ? (
                      <Image
                        src={review.profilePhotoUrl}
                        alt={review.authorName}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-black text-primary shadow-sm">
                        G
                      </div>
                    )}

                    <div>
                      {review.authorUrl ? (
                        <a
                          href={review.authorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-black text-dark hover:text-primary"
                        >
                          {review.authorName}
                        </a>
                      ) : (
                        <p className="font-black text-dark">
                          {review.authorName}
                        </p>
                      )}

                      <p className="mt-1 text-sm font-semibold text-gray-500">
                        {review.relativeTime || "Google Review"}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-white px-3 py-1 text-xs font-black text-primary shadow-sm">
                    Google
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-red-50 p-8 text-center shadow-sm">
            <h3 className="text-2xl font-black text-dark">
              Google reviews are connected, but no review text loaded yet.
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Check the API test route and make sure your Google Places API key,
              billing, and Place ID are working correctly.
            </p>
          </div>
        )}

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
          >
            View Our Work
            <ArrowRight size={20} />
          </Link>

          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-8 py-4 font-bold text-dark transition hover:bg-dark hover:text-white"
          >
            Read All Reviews
          </a>
        </div>

        <p className="mt-8 text-center text-sm font-semibold text-gray-400">
          Reviews powered by Google
        </p>
      </div>
    </section>
  );
}