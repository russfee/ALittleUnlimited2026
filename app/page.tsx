import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";
import { geoTags, homepageExpertise, homepageTestimonials, processSteps } from "@/lib/site-data";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow">Chicago &amp; North Shore</span>
            <div className="rule" />
            <h1>
              When the Estate Requires <em>Expertise</em>,
              <br />
              Not Just Effort
            </h1>
            <p className="hero-sub">
              A Little Unlimited specializes in complex, collection-rich estates — fine jewelry,
              rare coins, vintage couture, Chinese antiques, art glass, and luxury collectibles. We
              bring professional knowledge to estates that deserve more than a price tag.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" href="/professionals">
                For Attorneys &amp; Fiduciaries
              </Link>
              <Link className="btn-ghost" href="/contact">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="hero-scroll">
          Scroll
        </div>
      </section>

      <div className="positioning">
        <div className="container">
          <div className="positioning-inner">
            <blockquote>
              &quot;Not every estate sale company is equipped to handle every estate. Some estates
              require professional identification, market research, and domain expertise before a
              single item is priced. A Little Unlimited was built for exactly those estates.&quot;
            </blockquote>
            <cite>— Bill, Founder &amp; Principal</cite>
          </div>
        </div>
      </div>

      <section className="expertise">
        <div className="container">
          <span className="eyebrow">Areas of Deep Expertise</span>
          <div className="rule" />
          <h2>
            We Handle What Others
            <br />
            Are Not Equipped to Touch
          </h2>
          <p style={{ maxWidth: 560, color: "var(--slate)", marginTop: 16 }}>
            A specialty practice built around the categories that demand genuine knowledge — not
            guesswork, not clipboard pricing.
          </p>

          <div className="expertise-grid">
            {homepageExpertise.map((item) => (
              <div className="expertise-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link className="btn-primary" href="/specialties">
              View All Specialties
            </Link>
          </div>
        </div>
      </section>

      <section className="professionals">
        <div className="container">
          <div className="professionals-grid">
            <div className="professionals-left">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                For Attorneys &amp; Fiduciaries
              </span>
              <div className="rule" />
              <h2>
                Built for the <em>Professional</em> Referral Relationship
              </h2>
              <p
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginTop: 20 }}
              >
                We understand that your referral is a reflection of your professional judgment. We
                work with the accountability, documentation, and discretion that fiduciary contexts
                require.
              </p>

              <ul className="professionals-list">
                <li>Pre-sale inventory consultation and categorization by value tier</li>
                <li>Market-informed pricing using current auction data and dealer comparables</li>
                <li>Full post-sale settlement accounting suitable for estate records</li>
                <li>Direct communication throughout the entire process</li>
                <li>Discretion — always</li>
                <li>Selectivity — we take on estates where expertise creates real value</li>
              </ul>
            </div>
            <div className="professionals-right">
              <span className="eyebrow">Who We Work With</span>
              <p>
                Trust &amp; estate attorneys managing probate or trust administration where the
                estate includes significant personal property.
              </p>
              <p style={{ marginTop: 16 }}>
                Bank trust departments and wealth management fiduciaries at institutions including
                Northern Trust, BMO, and Wintrust.
              </p>
              <p style={{ marginTop: 16 }}>
                High-end residential real estate professionals on the North Shore and in Chicago who
                need a trusted vendor for complex estates.
              </p>
              <p style={{ marginTop: 16 }}>
                CPAs and financial planners with high-net-worth clients facing estate liquidation
                decisions.
              </p>
              <Link className="btn-primary" href="/professionals">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <span className="eyebrow">Client &amp; Referral Source Feedback</span>
          <div className="rule" />
          <h2>Words From Those We&apos;ve Served</h2>

          <div className="testimonials-grid">
            {homepageTestimonials.map((item) => (
              <div className="testimonial-card" key={item.cite}>
                <blockquote>{item.quote}</blockquote>
                <cite>{item.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <span className="eyebrow">Our Process</span>
          <div className="rule" />
          <h2>
            Professional Methodology,
            <br />
            Every Engagement
          </h2>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="geography">
        <div className="container">
          <h2>Chicago &amp; the North Shore Corridor</h2>
          <p>
            Serving the communities where complex, high-value estates are most concentrated — with
            the discretion and expertise those communities deserve.
          </p>
          <div className="geo-tags">
            {geoTags.map((tag) => (
              <span className="geo-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter showSeoTagline />
    </>
  );
}

