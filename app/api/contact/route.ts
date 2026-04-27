import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactSubmission, validateContactSubmission } from "@/lib/contact";

const recipientEmail = process.env.CONTACT_TO_EMAIL ?? "info@alittleunlimited.com";
const senderEmail =
  process.env.CONTACT_FROM_EMAIL ?? "A Little Unlimited Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: ContactSubmission;

  try {
    body = (await request.json()) as ContactSubmission;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const result = validateContactSubmission(body);

  if (result.isSpam) {
    return NextResponse.json({ ok: true });
  }

  if (result.error || !result.data) {
    return NextResponse.json({ error: result.error }, { status: 400 });
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
      replyTo: result.data.email,
      subject: `New ALU inquiry from ${result.data.name}`,
      html: renderHtml(result.data),
      text: renderText(result.data),
    });
  } catch {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function renderHtml(data: ContactSubmission) {
  const categories = data.categories?.length ? data.categories.join(", ") : "Not specified";

  return `
    <h1>New A Little Unlimited consultation request</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
    <p><strong>Role:</strong> ${escapeHtml(data.role || "Not provided")}</p>
    <p><strong>Estate location:</strong> ${escapeHtml(data.location || "Not provided")}</p>
    <p><strong>Categories:</strong> ${escapeHtml(categories)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;
}

function renderText(data: ContactSubmission) {
  const categories = data.categories?.length ? data.categories.join(", ") : "Not specified";

  return [
    "New A Little Unlimited consultation request",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Role: ${data.role || "Not provided"}`,
    `Estate location: ${data.location || "Not provided"}`,
    `Categories: ${categories}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
