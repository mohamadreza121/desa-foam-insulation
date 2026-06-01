import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Desa Foam Insulation <onboarding@resend.dev>",
      to: process.env.WORK_EMAIL!,
      subject: "Resend Test Email",
      html: `
        <h2>Resend is working</h2>
        <p>This is a test email from Desa Foam Insulation website.</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}