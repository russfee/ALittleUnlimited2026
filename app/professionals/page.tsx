import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("professionals");

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        description="If you are a trust and estate attorney, bank trust officer, or fiduciary responsible for an estate with significant personal property, A Little Unlimited was built with you in mind."
        eyebrow="Trust & Estate Attorneys · Bank Fiduciaries · Wealth Managers"
        title={
          <>
            Built for the Professional
            <br />
            Referral Relationship
          </>
        }
      />

      <section style={{ background: "var(--white)", padding: "80px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 780 }}>
            <span className="eyebrow">Our Commitment to Referral Partners</span>
            <div className="rule" />
            <h2>Your Referral Is a Reflection of Your Professional Judgment</h2>
            <p className="professionals-lead-copy">
              We understand what is at stake when you recommend a vendor to a client or a court.
              Our practice has been built from the ground up to operate with the accountability,
              documentation, and discretion that fiduciary contexts demand. We do not take on every
              estate. We take on the ones where our expertise creates real value — and where the
              stakes of handling it correctly are highest.
            </p>
          </div>
        </div>
      </section>

      <section className="pro-credentials">
        <div className="container">
          <span className="eyebrow">What We Provide to Professional Referral Partners</span>
          <div className="rule" />

          <div className="credential-grid">
            <div className="credential-item">
              <h3>Pre-Sale Inventory Consultation</h3>
              <p>
                Every engagement begins with a comprehensive walkthrough and categorization by value
                tier. We document what is present before a single item is priced, giving you and
                your client a clear picture of what the estate contains.
              </p>
            </div>
            <div className="credential-item">
              <h3>Market-Informed Pricing</h3>
              <p>
                We price using current auction records, active dealer data, and live spot prices —
                not guesswork. For jewelry, coins, couture, Chinese antiques, and art glass, that
                research methodology makes a material difference in recovery value.
              </p>
            </div>
            <div className="credential-item">
              <h3>Full Settlement Accounting</h3>
              <p>
                We produce complete post-sale settlement accounting — itemized, organized, and
                formatted for estate records and probate filings. You will have documentation of how
                value was assessed and realized, not just a check at the end of the sale.
              </p>
            </div>
            <div className="credential-item">
              <h3>Direct Communication Throughout</h3>
              <p>
                You will hear from us directly at every meaningful milestone. No intermediaries, no
                chasing. We understand that professionals managing complex estates need clear, timely
                information — and we provide it.
              </p>
            </div>
            <div className="credential-item">
              <h3>Professional Staging &amp; Presentation</h3>
              <p>
                The way an estate is presented affects what it recovers. We stage and present with
                the same care as a high-quality auction preview — attracting vetted buyers,
                collectors, and dealers who can pay market prices.
              </p>
            </div>
            <div className="credential-item">
              <h3>Discretion — Always</h3>
              <p>
                We serve families during some of the most sensitive transitions of their lives. Our
                team operates with the same discretion you would expect of any professional working
                in a fiduciary context. Client privacy is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--off-white)", padding: "80px 0" }}>
        <div className="container">
          <div className="professionals-two-column">
            <div>
              <span className="eyebrow">Our Referral Partners</span>
              <div className="rule" />
              <h2>The Professionals Who Send Us the Right Estates</h2>
              <p className="body-copy body-copy-spaced">
                We work closely with a defined set of professional referral partners in the Chicago
                and North Shore markets — professionals who understand that the right estate sale
                company makes a meaningful difference to their clients and to the administration of
                the estate.
              </p>
            </div>
            <div>
              <div className="left-border-note">
                <h4 className="serif-note-heading">Trust &amp; Estate Attorneys</h4>
                <p className="note-copy">
                  Managing probate or trust administration where the estate includes jewelry
                  collections, antiques, art, coins, or specialty categories. Chicago and Cook,
                  Lake, and DuPage County practitioners.
                </p>
              </div>
              <div className="left-border-note">
                <h4 className="serif-note-heading">Bank Trust Officers &amp; Wealth Managers</h4>
                <p className="note-copy">
                  Trust departments and private banking teams at Northern Trust, BMO Private Bank,
                  Wintrust Wealth, and similar institutions facing estate liquidation decisions for
                  trust clients.
                </p>
              </div>
              <div className="left-border-note">
                <h4 className="serif-note-heading">
                  High-End Residential Real Estate Professionals
                </h4>
                <p className="note-copy">
                  North Shore and Chicago luxury real estate agents who need a vetted, reliable
                  estate sale specialist for clients with complex personal property — coordinating
                  estate and property timelines seamlessly.
                </p>
              </div>
              <div className="left-border-note left-border-note-last">
                <h4 className="serif-note-heading">CPAs, Financial Planners &amp; Appraisers</h4>
                <p className="note-copy">
                  Fiduciaries and advisors managing high-net-worth client transitions — estate
                  appraisers and insurance appraisers who need a reliable execution partner for
                  complex personal property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pro-statement">
        <div className="container">
          <div className="pro-statement-inner">
            <span className="eyebrow" style={{ color: "var(--gold)", marginBottom: 16, display: "block" }}>
              Our Practice Philosophy
            </span>
            <div className="rule rule--center" />
            <p>
              &quot;We are selective about the engagements we accept. We focus on estates where our
              expertise creates real value — and where the estate deserves to be handled with the
              care and knowledge it requires. This is not a limitation. It is what makes us the
              right choice when the estate demands it.&quot;
            </p>
            <Link className="btn-primary" href="/contact">
              Begin a Conversation
            </Link>
          </div>
        </div>
      </div>

      <section style={{ background: "var(--white)", padding: "80px 0" }}>
        <div className="container">
          <span className="eyebrow">Why Our Expertise Matters to You</span>
          <div className="rule" />
          <div style={{ maxWidth: 760 }}>
            <h2>The Difference Between Guesswork and Knowledge Is Measurable</h2>
            <p className="body-copy body-copy-spaced">
              When a general estate sale company prices a jewelry collection, a coin accumulation,
              or a group of Chinese antiques, they are often working from assumption. The result is
              either underpricing — which fails the family and the estate — or overpricing, which
              means items don&apos;t sell and recovery is delayed.
            </p>
            <p className="body-copy">
              We bring category expertise across fine and antique jewelry, rare coins, vintage
              couture, Chinese antiques, art glass, and precious metals. Bill is pursuing GIA
              gemological credentials and conducts his own market research using live auction data
              and active dealer pricing. That expertise is not incidental to what we do — it is the
              entire point.
            </p>
            <p className="body-copy">
              For a fiduciary, that difference is not abstract. It is the difference between a
              settlement that reflects what the estate actually held — and one that doesn&apos;t.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link className="btn-primary" href="/specialties">
                View Our Category Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark)", padding: "80px 0" }}>
        <div className="container">
          <div className="professionals-contact-grid">
            <div>
              <span className="eyebrow">Start a Conversation</span>
              <div className="rule" />
              <h2 style={{ color: "var(--white)" }}>
                When the Right Estate Comes Across Your Desk
              </h2>
              <p className="professionals-contact-copy">
                We are not looking for a referral today. We are simply asking to be a resource you
                know about when an estate requires a specialist. A brief conversation is always
                welcome.
              </p>
            </div>
            <div className="professionals-contact-card">
              <span className="eyebrow" style={{ color: "var(--gold)", display: "block", marginBottom: 20 }}>
                Direct Contact
              </span>
              <div style={{ marginBottom: 28 }}>
                <div className="contact-detail">
                  <span className="label">Email</span>
                  <span className="value" style={{ color: "var(--white)" }}>
                    <a href="mailto:Bill@ALittleUnlimited.com" style={{ color: "var(--white)" }}>
                      Bill@ALittleUnlimited.com
                    </a>
                  </span>
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <div className="contact-detail">
                  <span className="label">Service Area</span>
                  <span className="value" style={{ color: "var(--white)", fontSize: "1rem" }}>
                    Chicago, IL &amp; North Shore Corridor
                  </span>
                </div>
              </div>
              <Link className="btn-primary" href="/contact" style={{ display: "inline-block" }}>
                Request a Capabilities Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

