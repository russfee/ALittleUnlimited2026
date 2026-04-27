import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipientEmail = process.env.CONTACT_TO_EMAIL ?? "info@alittleunlimited.com";
const senderEmail =
  process.env.CONTACT_FROM_EMAIL ?? "A Little Unlimited Website <onboarding@resend.dev>";

type MailingListSubmission = {
  company?: string;
  email: string;
  name: string;
  phone?: string;
};

export async function POST(request: Request) {
  let body: MailingListSubmission;

  try {
    body = (await request.json()) as MailingListSubmission;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (body.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New ALU mailing list request from ${name}`,
      html: `
        <h1>New mailing list request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      `,
      text: [
        "New mailing list request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
      ].join("\n"),
    });
  } catch {
    return NextResponse.json(
      { error: "We could not add you right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
