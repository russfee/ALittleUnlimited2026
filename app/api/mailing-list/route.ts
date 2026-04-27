import { NextResponse } from "next/server";

type MailingListSubmission = {
  company?: string;
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
  } catch {
    return NextResponse.json(
      { error: "We could not add you right now. Please try again later." },
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
  const response = await fetch(
    `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      body: JSON.stringify({
        email_address: email,
        merge_fields: buildMergeFields({ mergeFields, name, phone }),
        status: mailchimpDoubleOptIn ? "pending" : "subscribed",
        tags: mailchimpTags,
        update_existing: true,
      }),
      headers: {
        Authorization: buildAuthHeader(),
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to create Mailchimp member.");
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
