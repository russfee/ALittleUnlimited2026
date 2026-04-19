import { PageHero } from "@/components/page-hero";
import { PortfolioPage } from "@/components/portfolio-page";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("portfolio");

export default function PortfolioRoute() {
  return (
    <>
      <PageHero
        description="The best argument for expertise is the work itself. Selected items and estates from our portfolio — each one handled with the knowledge it deserved."
        eyebrow="A Record of the Work"
        title={
          <>
            Past Sales &amp;
            <br />
            Notable Collections
          </>
        }
      />
      <PortfolioPage />
      <SiteFooter />
    </>
  );
}

