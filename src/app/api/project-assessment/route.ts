import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 100_000;

type ProjectAssessmentRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  propertyType?: unknown;
  city?: unknown;
  address?: unknown;
  projectSize?: unknown;
  timeline?: unknown;
  budget?: unknown;
  photoLink?: unknown;
  message?: unknown;

  // Honeypot field. Real users should leave this empty.
  website?: unknown;
};

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeEmailMessage(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSafeHttpsUrl(value: string): string | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const contentLengthHeader = request.headers.get("content-length");
    const contentLength = Number(contentLengthHeader ?? "0");

    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_REQUEST_SIZE
    ) {
      return NextResponse.json(
        { error: "The submitted request is too large." },
        { status: 413 }
      );
    }

    let body: ProjectAssessmentRequest;

    try {
      body = (await request.json()) as ProjectAssessmentRequest;
    } catch {
      return NextResponse.json(
        { error: "Invalid request data." },
        { status: 400 }
      );
    }

    /*
     * Honeypot spam protection.
     * Normal users never fill in the website field.
     * Bots that automatically fill every input are silently rejected.
     */
    const honeypot = cleanText(body.website);

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const data = {
      name: cleanText(body.name),
      email: cleanText(body.email).toLowerCase(),
      phone: cleanText(body.phone),
      service: cleanText(body.service),
      propertyType: cleanText(body.propertyType),
      city: cleanText(body.city),
      address: cleanText(body.address),
      projectSize: cleanText(body.projectSize),
      timeline: cleanText(body.timeline),
      budget: cleanText(body.budget),
      photoLink: cleanText(body.photoLink),
      message: cleanText(body.message),
    };

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.service ||
      !data.propertyType ||
      !data.city ||
      !data.timeline ||
      !data.budget ||
      !data.message
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      data.name.length > 100 ||
      data.email.length > 254 ||
      data.phone.length > 40 ||
      data.service.length > 100 ||
      data.propertyType.length > 100 ||
      data.city.length > 100 ||
      data.address.length > 250 ||
      data.projectSize.length > 100 ||
      data.timeline.length > 100 ||
      data.budget.length > 100 ||
      data.photoLink.length > 2_000 ||
      data.message.length > 5_000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const safePhotoLink = getSafeHttpsUrl(data.photoLink);

    if (data.photoLink && !safePhotoLink) {
      return NextResponse.json(
        {
          error:
            "The photo or file link must be a valid HTTPS link.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const workEmail = process.env.WORK_EMAIL;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");

      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    if (!workEmail) {
      console.error("Missing WORK_EMAIL environment variable.");

      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { error: databaseError } = await supabaseAdmin
      .from("project_assessments")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        property_type: data.propertyType,
        city: data.city,
        address: data.address,
        project_size: data.projectSize,
        timeline: data.timeline,
        budget: data.budget,
        photo_link: safePhotoLink ?? "",
        message: data.message,
        status: "New",
      });

    if (databaseError) {
      console.error(
        "Supabase project assessment error:",
        databaseError
      );

      return NextResponse.json(
        {
          error:
            "We could not save your request. Please try again.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeService = escapeHtml(data.service);
    const safePropertyType = escapeHtml(data.propertyType);
    const safeCity = escapeHtml(data.city);
    const safeAddress = escapeHtml(
      data.address || "Not provided"
    );
    const safeProjectSize = escapeHtml(
      data.projectSize || "Not provided"
    );
    const safeTimeline = escapeHtml(data.timeline);
    const safeBudget = escapeHtml(data.budget);
    const safeMessage = escapeEmailMessage(data.message);

    const safePhotoLinkHtml = safePhotoLink
      ? `<a
          href="${escapeHtml(safePhotoLink)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(safePhotoLink)}
        </a>`
      : "Not provided";

    const safeSubjectService = data.service
      .replace(/[\r\n]+/g, " ")
      .slice(0, 100);

    try {
      const { error: emailError } = await resend.emails.send({
        from: "DESA Foam Insulation <onboarding@resend.dev>",
        to: workEmail,
        subject: `New Project Assessment - ${safeSubjectService}`,
        html: `
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              padding: 24px;
              font-family: Arial, Helvetica, sans-serif;
              color: #171717;
              line-height: 1.6;
            "
          >
            <h1
              style="
                margin-bottom: 24px;
                color: #b91c1c;
                font-size: 28px;
              "
            >
              New Project Assessment Request
            </h1>

            <h2
              style="
                margin-top: 28px;
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 8px;
                font-size: 20px;
              "
            >
              Customer Information
            </h2>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>

            <h2
              style="
                margin-top: 28px;
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 8px;
                font-size: 20px;
              "
            >
              Project Information
            </h2>

            <p><strong>Service:</strong> ${safeService}</p>
            <p>
              <strong>Property Type:</strong>
              ${safePropertyType}
            </p>
            <p><strong>City:</strong> ${safeCity}</p>
            <p><strong>Address:</strong> ${safeAddress}</p>
            <p>
              <strong>Project Size:</strong>
              ${safeProjectSize}
            </p>
            <p><strong>Timeline:</strong> ${safeTimeline}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>
            <p>
              <strong>Photos / File Link:</strong>
              ${safePhotoLinkHtml}
            </p>

            <h2
              style="
                margin-top: 28px;
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 8px;
                font-size: 20px;
              "
            >
              Project Details
            </h2>

            <div
              style="
                border-radius: 8px;
                background: #f5f5f5;
                padding: 16px;
              "
            >
              ${safeMessage}
            </div>
          </div>
        `,
      });

      if (emailError) {
        console.error(
          "Project assessment email failed:",
          emailError
        );
      }
    } catch (emailError) {
      console.error(
        "Project assessment email failed:",
        emailError
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Project assessment API error:", error);

    return NextResponse.json(
      {
        error:
          "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}