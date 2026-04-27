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
                What started as a penny collection has grown into my life's work.
              </p>
              <p className="body-copy">
                I was born in Chicago, but when I was five, my family moved to a small town in
                Western Michigan. My parents gave me their penny collections, and that's where my
                interest in collecting first began. When I was 12 and old enough to get a job, I
                worked summers on local farms. I spent my earnings at auctions, accumulating a
                collection mostly of depression glass, primitives, and small pieces of furniture. A
                special gift at that time was meeting a local antique dealer who became my mentor
                and shared with me her knowledge, experience, and reference library.
              </p>
              <p className="body-copy">
                In 1983, just after I turned 16, I borrowed my Boy Scout troop leader's van and set
                up and sold at my first antique show. I continued to sell at shows through high
                school and college, using my hard-earned money to pay for my tuition at Michigan
                State University.
              </p>
              <p className="body-copy">
                Now armed with a Bachelor of Arts Degree in Business, I left the world of
                entrepreneurship and entered the corporate scene. In the following years, I held a
                variety of positions in accounting, real estate sales, management, and as executive
                assistant to a high-net-worth individual. All were enlightening, but I was always
                drawn back to the more interesting world of buying and selling antiques.
              </p>
              <p className="body-copy">
                In 2005, I said goodbye to the corporate world to concentrate on what I loved:
                buying and selling higher-end items in various genres. My focus now was buying and
                selling Chinese porcelains and other antiques, fine and costume jewelry, antique
                silver, coins, and rarer pieces of porcelain, crystal, and other art.
              </p>
              <p className="body-copy">
                Finally, in 2018, I made the decision to stop buying and selling antiques and to
                launch my own estate sale company. I assembled a team of professionals that I both
                trust and respect. And together, we provide the best service possible to both the
                clients who hire us to sell their cherished belongings and to the customers who buy
                them. We take great pride in the quality of our work and the success of every sale.
                A Little Unlimited Estate Sales is licensed, insured, and bonded in the State of
                Illinois, and I am a Certified Personal Property Appraiser through the Certified
                Appraisers Guild of America.
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
