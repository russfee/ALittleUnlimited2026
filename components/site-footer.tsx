import Link from "next/link";

import {
  businessEmail,
  footerDescription,
  footerSpecialties,
  navigationItems,
} from "@/lib/site-data";

type SiteFooterProps = {
  showSeoTagline?: boolean;
};

export function SiteFooter({ showSeoTagline = false }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              A Little Unlimited
              <span>Estate Sale Services</span>
            </div>
            <p>{footerDescription}</p>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Specialties</h5>
            <ul>
              {footerSpecialties.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
              </li>
              <li>
                <Link href="/contact">Request a Consultation</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 A Little Unlimited Estate Sale Services. Chicago, IL &amp; North Shore Corridor.</p>
          {showSeoTagline ? <p>Complex estate sales Chicago &amp; North Shore</p> : null}
        </div>
      </div>
    </footer>
  );
}

