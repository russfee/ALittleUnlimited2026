import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="An initial consultation is always confidential and carries no obligation. We will tell you honestly whether the estate is one we can serve well."
        eyebrow="Begin the Conversation"
        title={
          <>
            If Your Estate Requires
            <br />
            Expertise, We&apos;d Like to Know
          </>
        }
      />

      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Direct Contact</span>
              <div className="rule" />
              <h3>
                Bill Little
                <br />
                Founder &amp; Principal
              </h3>
              <p style={{ color: "var(--slate)", marginTop: 16, fontSize: "0.9rem", lineHeight: 1.8 }}>
                The best way to start is a direct email. Describe the estate briefly — the
                location, the categories you believe are present, and the timeline you are working
                with. We will respond promptly and personally.
              </p>

              <div className="contact-detail" style={{ marginTop: 40 }}>
                <span className="label">Email</span>
                <span className="value">
                  <a href="mailto:Bill@ALittleUnlimited.com">Bill@ALittleUnlimited.com</a>
                </span>
              </div>

              <div className="contact-detail">
                <span className="label">Service Area</span>
                <span className="value" style={{ fontSize: "1rem", fontFamily: "var(--font-sans)" }}>
                  Chicago, IL &amp; North Shore Corridor
                </span>
              </div>

              <div className="contact-detail">
                <span className="label">Communities Served</span>
                <span
                  className="value"
                  style={{
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-sans)",
                    color: "var(--slate)",
                    lineHeight: 1.7,
                  }}
                >
                  Chicago · Winnetka · Kenilworth · Glencoe · Lake Forest · Wilmette · Evanston ·
                  Highland Park · Northbrook · Glenview · Lincoln Park · Gold Coast
                </span>
              </div>

              <div className="contact-callout">
                <span className="eyebrow" style={{ color: "var(--gold)", display: "block", marginBottom: 12 }}>
                  For Attorneys &amp; Fiduciaries
                </span>
                <p style={{ fontSize: "0.88rem", color: "var(--mid)", lineHeight: 1.75 }}>
                  If you represent a trust or estate with significant personal property, we are
                  happy to provide a capabilities overview and discuss how we work. We understand
                  the documentation and accountability standards your context requires.
                </p>
              </div>
            </div>

            <div className="contact-form">
              <span className="eyebrow">Consultation Request</span>
              <div className="rule" />
              <p style={{ color: "var(--slate)", fontSize: "0.88rem", marginBottom: 32 }}>
                Please provide a brief overview of the estate. We will respond directly — no
                automated replies, no sales calls.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

