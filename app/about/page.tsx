import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="My work starts where theirs ends."
        eyebrow="The Specialist Behind the Practice"
        title={
          <>
            Most Estate Sale Companies
            <br />
            Can Handle a House Full
            <br />
            of Furniture.
          </>
        }
      />

      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="about-two-column">
            <div>
              <span className="eyebrow">Bill Little · Founder &amp; Principal</span>
              <div className="rule" />
              <h2>A Specialty Practice, By Design</h2>
              <p className="body-copy body-copy-spaced">
                I founded A Little Unlimited to specialize in the estates that require genuine
                expertise — collections of antique and fine jewelry, rare coins, vintage couture,
                Chinese antiques, art glass, and luxury collectibles. I work closely with
                attorneys, trust officers, and fiduciaries who need a vendor they can trust with
                complex and high-value estates.
              </p>
              <p className="body-copy">
                The general estate sale market is well-served by general estate sale companies. What
                it lacks is a specialist — a company with the category knowledge to walk into a
                complex estate and actually understand what it contains, what it is worth, and who
                should be buying it.
              </p>
              <p className="body-copy">
                That is the company I have built. Every decision about who we work with, how we
                price, and how we present is guided by a single principle: the estate deserves
                expertise, not guesswork.
              </p>
            </div>
            <div>
              <div className="gold-panel">
                <span className="eyebrow gold-panel-label">Areas of Personal Expertise</span>
                <ul className="gold-panel-list">
                  <li>Fine &amp; antique jewelry — identification, grading, market pricing</li>
                  <li>Gemstones — GIA gemological credentials in progress</li>
                  <li>Precious metals — melt analysis, maker identification</li>
                  <li>Rare coins &amp; numismatics — grading reference, lot structuring</li>
                  <li>Chinese antiques — porcelain, jade, bronzes, hardwood furniture</li>
                  <li>Art glass &amp; American pottery — Tiffany, Steuben, Rookwood</li>
                  <li>Vintage couture — designer identification, authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="centered-copy">
            <span className="eyebrow">Our Research Methodology</span>
            <div className="rule rule--center" />
            <h2>
              Auction Records. Dealer Data. Live Pricing.
              <br />
              Not Guesswork.
            </h2>
            <p className="body-copy centered-body-copy">
              Every item we price is informed by current market data — live auction results from
              major houses, active dealer pricing, and spot market prices for precious metals. We do
              not rely on general price guides or intuition when current data is available. This is
              not incidental to our process. It is the entire point.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark)" }}>
        <div className="container">
          <div className="about-values-grid">
            <div className="about-value-card">
              <span className="eyebrow about-value-label">Expertise</span>
              <p className="about-value-copy">
                Deep category knowledge across eight specialty areas — built through years of
                hands-on research, market study, and professional credential pursuit. We bring the
                knowledge; the estate provides the collection.
              </p>
            </div>
            <div className="about-value-card">
              <span className="eyebrow about-value-label">Selectivity</span>
              <p className="about-value-copy">
                We do not take every estate. We take the ones where our expertise creates real value
                — where the collection requires knowledge, not just effort. That selectivity is not
                a limitation. It is what makes the work meaningful.
              </p>
            </div>
            <div className="about-value-card">
              <span className="eyebrow about-value-label">Accountability</span>
              <p className="about-value-copy">
                Full settlement accounting. Documentation suitable for estate records. Direct
                communication throughout the process. We operate with the accountability that
                professionals and fiduciaries expect — because they should.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="geography">
        <div className="container">
          <h2>Have a Complex Estate?</h2>
          <p>
            A brief conversation costs nothing. We welcome inquiries from attorneys, fiduciaries,
            and families managing significant estates.
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

