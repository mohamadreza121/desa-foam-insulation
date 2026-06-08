export type GoogleReview = {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
};

export type GoogleReviewsData = {
  businessName: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  reviews: GoogleReview[];
};

type GooglePlaceResponse = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    text?: {
      text?: string;
      languageCode?: string;
    };
    originalText?: {
      text?: string;
      languageCode?: string;
    };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

const googleReviewLink =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_LINK ||
  "https://share.google/9l3EATQ6ZuIMwFmj9";

const fallbackReviews: GoogleReviewsData = {
  businessName: "DESA Foam Insulation",
  rating: 5,
  reviewCount: 0,
  googleMapsUrl: googleReviewLink,
  reviews: [],
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackReviews;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        next: {
          revalidate: 60 * 60 * 12,
        },
      }
    );

    if (!response.ok) {
      console.error("Google Reviews API error:", await response.text());
      return fallbackReviews;
    }

    const place = (await response.json()) as GooglePlaceResponse;

    return {
      businessName: place.displayName?.text || "DESA Foam Insulation",
      rating: place.rating || 5,
      reviewCount: place.userRatingCount || 0,
      googleMapsUrl: place.googleMapsUri || googleReviewLink,
      reviews:
        place.reviews
          ?.map((review) => ({
            authorName:
              review.authorAttribution?.displayName || "Google Reviewer",
            authorUrl: review.authorAttribution?.uri,
            profilePhotoUrl: review.authorAttribution?.photoUri,
            rating: review.rating || 5,
            text: review.text?.text || review.originalText?.text || "",
            relativeTime: review.relativePublishTimeDescription || "",
            publishTime: review.publishTime,
          }))
          .filter((review) => review.text.length > 0) || [],
    };
  } catch (error) {
    console.error("Google Reviews fetch failed:", error);
    return fallbackReviews;
  }
}