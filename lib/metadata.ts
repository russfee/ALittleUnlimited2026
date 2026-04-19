import type { Metadata } from "next";

import { metaPages, siteName, siteUrl } from "@/lib/site-data";

export function buildMetadata(page: keyof typeof metaPages): Metadata {
  const meta = metaPages[page];
  const title = page === "home" ? meta.title : `${meta.title} — ${siteName}`;
  const url = page === "home" ? siteUrl : `${siteUrl}/${page}`;

  return {
    title,
    description: meta.description,
    alternates: {
      canonical: page === "home" ? "/" : `/${page}`,
    },
    openGraph: {
      title,
      description: meta.description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
    },
  };
}

