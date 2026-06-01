import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type BookingRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address?: string;
  message: string;
};

async function sendOwnerEmail(data: BookingRequest) {
  try {
    await resend.emails.send({
      from: "Desa Foam Insulation <onboarding@resend.dev>",
      to: process.env.WORK_EMAIL!,
      subject: `New Estimate Request - ${data.service}`,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Address:</strong> ${data.address || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
  } catch (error) {
    console.error("Owner email failed:", error);
  }
}

async function createHubSpotContact(data: BookingRequest) {
  try {
    if (!process.env.HUBSPOT_ACCESS_TOKEN) return;

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          email: data.email,
          firstname: data.name,
          phone: data.phone,
          address: data.address || "",
        },
      }),
    });

    if (!response.ok) {
      console.error("HubSpot failed:", await response.text());
    }
  } catch (error) {
    console.error("HubSpot error:", error);
  }
}

async function sendTwilioSms(data: BookingRequest) {
  try {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_PHONE_NUMBER;
    const ownerPhone = process.env.OWNER_PHONE_NUMBER;

    if (!sid || !token || !from || !ownerPhone) return;

    const auth = Buffer.from(`${sid}:${token}`).toString("base64");

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          From: from,
          To: ownerPhone,
          Body: `New Desa Foam lead: ${data.name}, ${data.service}, ${data.phone}`,
        }),
      }
    );

    if (!response.ok) {
      console.error("Twilio failed:", await response.text());
    }
  } catch (error) {
    console.error("Twilio error:", error);
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as BookingRequest;

    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      address: data.address || "",
      message: data.message,
      status: "New",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: `Supabase error: ${error.message}` },
        { status: 500 }
      );
    }

    await sendOwnerEmail(data);
    await createHubSpotContact(data);
    await sendTwilioSms(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      { error: "Server error. Check terminal logs." },
      { status: 500 }
    );
  }
}