import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ProjectAssessmentRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  city: string;
  address?: string;
  projectSize?: string;
  timeline: string;
  budget: string;
  photoLink?: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ProjectAssessmentRequest;

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

    const { error } = await supabase.from("project_assessments").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      property_type: data.propertyType,
      city: data.city,
      address: data.address || "",
      project_size: data.projectSize || "",
      timeline: data.timeline,
      budget: data.budget,
      photo_link: data.photoLink || "",
      message: data.message,
      status: "New",
    });

    if (error) {
      console.error("Supabase project assessment error:", error);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }

    try {
      await resend.emails.send({
        from: "DESA Foam Insulation <onboarding@resend.dev>",
        to: process.env.WORK_EMAIL!,
        subject: `New Project Assessment - ${data.service}`,
        html: `
          <h2>New Project Assessment Request</h2>

          <h3>Customer Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>

          <h3>Project Information</h3>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Property Type:</strong> ${data.propertyType}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Address:</strong> ${data.address || "Not provided"}</p>
          <p><strong>Project Size:</strong> ${data.projectSize || "Not provided"}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          <p><strong>Photos / File Link:</strong> ${
            data.photoLink
              ? `<a href="${data.photoLink}" target="_blank">${data.photoLink}</a>`
              : "Not provided"
          }</p>

          <h3>Project Details</h3>
          <p>${data.message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Project assessment email failed:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Project assessment API error:", error);

    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}