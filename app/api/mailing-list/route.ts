import { createHash } from "node:crypto";

import { NextResponse } from "next/server";

type MailingListSubmission = {
  email: string;
  name: string;
  phone?: string;
};

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const mailchimpDoubleOptIn = process.env.MAILCHIMP_DOUBLE_OPT_IN === "true";
const mailchimpTags = (process.env.MAILCHIMP_TAGS ?? "website,homepage")
  .split(",")
  .map((tag) => tag.trim())
  .filter(Boolean);

export async function POST(request: Request) {
  let body: MailingListSubmission;

  try {
    body = (await request.json()) as MailingListSubmission;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
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

  if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServerPrefix) {
    return NextResponse.json(
      { error: "Mailing list signup is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const audienceId = await resolveAudienceId(mailchimpAudienceId);
    const mergeFields = await getAudienceMergeFields(audienceId);
    await upsertAudienceMember({ audienceId, email, mergeFields, name, phone });
  } catch (error) {
    const detail = getErrorDetail(error);
    console.error("Mailchimp signup failed", {
      audienceId: mailchimpAudienceId,
      detail,
      email,
    });

    return NextResponse.json(
      { error: detail },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

type MailchimpMergeField = {
  tag: string;
};

async function getAudienceMergeFields(audienceId: string) {
  const response = await fetch(
    `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/merge-fields`,
    {
      headers: {
        Authorization: buildAuthHeader(),
        "Content-Type": "application/json",
      },
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to load Mailchimp merge fields.");
  }

  const payload = (await response.json()) as { merge_fields?: MailchimpMergeField[] };

  return new Set((payload.merge_fields ?? []).map((field) => field.tag));
}

async function upsertAudienceMember({
  audienceId,
  email,
  mergeFields,
  name,
  phone,
}: {
  audienceId: string;
  email: string;
  mergeFields: Set<string>;
  name: string;
  phone?: string;
}) {
  const subscriberHash = hashSubscriberEmail(email);
  const response = await fetch(
    `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
    {
      body: JSON.stringify({
        email_address: email,
        merge_fields: buildMergeFields({ mergeFields, name, phone }),
        status_if_new: mailchimpDoubleOptIn ? "pending" : "subscribed",
      }),
      headers: {
        Authorization: buildAuthHeader(),
        "Content-Type": "application/json",
      },
      method: "PUT",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to upsert Mailchimp member: ${await response.text()}`);
  }

  if (!mailchimpTags.length) {
    return;
  }

  const tagsResponse = await fetch(
    `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`,
    {
      body: JSON.stringify({
        tags: mailchimpTags.map((name) => ({ name, status: "active" })),
      }),
      headers: {
        Authorization: buildAuthHeader(),
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  if (!tagsResponse.ok) {
    throw new Error(`Failed to tag Mailchimp member: ${await tagsResponse.text()}`);
  }
}

function buildMergeFields({
  mergeFields,
  name,
  phone,
}: {
  mergeFields: Set<string>;
  name: string;
  phone?: string;
}) {
  const fields: Record<string, string> = {};
  const [firstName, ...rest] = name.split(/\s+/).filter(Boolean);
  const lastName = rest.join(" ");

  if (firstName && mergeFields.has("FNAME")) {
    fields.FNAME = firstName;
  }

  if (lastName && mergeFields.has("LNAME")) {
    fields.LNAME = lastName;
  }

  if (phone && mergeFields.has("PHONE")) {
    fields.PHONE = phone;
  }

  return fields;
}

function buildAuthHeader() {
  return `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`;
}

function hashSubscriberEmail(email: string) {
  return createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

function getErrorDetail(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "We could not add you right now. Please try again later.";
}

async function resolveAudienceId(configuredId: string) {
  if (!/^\d+$/.test(configuredId)) {
    return configuredId;
  }

  const response = await fetch(`https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists?count=100`, {
    headers: {
      Authorization: buildAuthHeader(),
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to load Mailchimp audiences.");
  }

  const payload = (await response.json()) as {
    lists?: Array<{ id: string; web_id: number }>;
  };

  const match = payload.lists?.find((list) => String(list.web_id) === configuredId);

  if (!match) {
    throw new Error("Configured Mailchimp audience was not found.");
  }

  return match.id;
}
