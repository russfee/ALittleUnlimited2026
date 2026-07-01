import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";
import { specialties } from "@/lib/site-data";

export const metadata = buildMetadata("specialties");

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        description="Categories of deep expertise, anchored by formal credentialing as a CAGA-certified Personal Property Appraiser — not clipboard pricing. Each category handled with the research and market knowledge the estate deserves."
        eyebrow="Deep Category Knowledge"
        title={
          <>
            Where Others Guess,
            <br />
            We Research
          </>
        }
      />

      <div style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="specialties-credential">
            <p>
              Every category below is approached the same way — research first, attribution before
              pricing, and market data informing every valuation decision. As a CAGA-credentialed
              Certified Personal Property Appraiser through the Certified Appraisers Guild of
              America, Bill applies USPAP-compliant methodology to the estate&apos;s significant
              categories — producing documentation suitable for IRS Form 706, equitable
              distribution, insurance scheduling, and estate records.
            </p>
          </div>
          {specialties.map((specialty) => (
            <div className="specialty-section" id={specialty.id} key={specialty.id}>
              <div className="specialty-inner">
                <div className="specialty-label">
                  <span className="eyebrow">{specialty.number}</span>
                  <div className="rule" />
                  <h2>{specialty.title}</h2>
                </div>
                <div>
                  <p className="specialty-intro">{specialty.intro}</p>
                  {specialty.description.map((paragraph) => (
                    <p className="body-copy" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <ul className="specialty-bullets">
                    {specialty.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="geography">
        <div className="container">
          <h2>Have a Complex Estate in Mind?</h2>
          <p>
            A brief consultation costs nothing. If your estate includes any of these categories, we
            would welcome a conversation.
          </p>
          <Link className="btn-primary" href="/contact">
            Request a Consultation
          </Link>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
