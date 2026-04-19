"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <nav aria-label="Main navigation" className="site-nav" role="navigation">
      <Link className="nav-logo" href="/" onClick={closeNav}>
        A Little Unlimited
        <span>Estate Sale Services</span>
      </Link>
      <ul className={`nav-links${isOpen ? " nav-links-open" : ""}`}>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                className={isActive ? "nav-link-active" : undefined}
                href={item.href}
                onClick={closeNav}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            className={`nav-cta${pathname === "/contact" ? " nav-link-active" : ""}`}
            href="/contact"
            onClick={closeNav}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="nav-toggle"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

