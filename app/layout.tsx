import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { metaPages, siteName, siteUrl } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metaPages.home.title,
  description: metaPages.home.description,
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: metaPages.home.title,
    description: metaPages.home.description,
    siteName,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: metaPages.home.title,
    description: metaPages.home.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
