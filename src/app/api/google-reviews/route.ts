import { NextResponse } from "next/server";
import { getGoogleReviews } from "@/lib/googleReviews";

export async function GET() {
  const data = await getGoogleReviews();

  return NextResponse.json(data);
}