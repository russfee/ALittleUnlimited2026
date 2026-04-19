"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { portfolioFilters, portfolioSales } from "@/lib/site-data";

type LightboxState = {
  alt: string;
  caption: string;
  src: string;
} | null;

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    if (!lightbox) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [lightbox]);

  const visibleSales =
    activeFilter === "all"
      ? portfolioSales
      : portfolioSales.filter((sale) => sale.categories.includes(activeFilter));

  return (
    <>
      <div className="portfolio-intro">
        <div className="container">
          <div className="portfolio-intro-inner">
            <div>
              <span className="eyebrow">Why This Matters</span>
              <div className="rule" />
              <h2>
                Every Item Here
                <br />
                Required More Than
                <br />a Price Tag
              </h2>
            </div>
            <div>
              <p style={{ color: "var(--slate)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                The estates we handle contain things that most estate sale companies are not
                equipped to price, present, or sell correctly. What you see here represents a
                fraction of what we have handled — pieces of jewelry, coins, porcelain, and couture
                that required research, expertise, and the right buyer to realize their actual
                value.
              </p>
              <p style={{ color: "var(--slate)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                If you are a professional evaluating whether we are the right firm for a complex
                estate, this page is for you. If you are a family wondering whether your estate
                qualifies, it is likely to give you a sense of the answer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-inner">
            {portfolioFilters.map((filter) => (
              <button
                className={`filter-btn${activeFilter === filter.value ? " active" : ""}`}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sales-list">
        <div className="container">
          {visibleSales.map((sale) => (
            <div className="sale-entry" key={sale.id}>
              <div className="sale-header">
                <div>
                  <span className="eyebrow">{sale.eyebrow}</span>
                  <h2>{sale.title}</h2>
                </div>
                <div className="sale-meta">
                  <span className="location">{sale.location}</span>
                  <span>{sale.year}</span>
                </div>
              </div>

              <div className={`photo-grid ${sale.gridClass}`}>
                {sale.images.map((image, index) => (
                  <div
                    className={`photo-item ${image.heightClass}`}
                    key={`${sale.id}-${index}`}
                    style={image.kind === "placeholder" ? { background: "var(--charcoal)" } : undefined}
                  >
                    {image.kind === "image" && image.src && image.alt ? (
                      <button
                        className="photo-open"
                        onClick={() =>
                          setLightbox({
                            src: image.src ?? "",
                            alt: image.alt ?? "",
                            caption: image.category
                              ? `${image.category} — ${image.caption ?? ""}`
                              : (image.caption ?? ""),
                          })
                        }
                        type="button"
                      >
                        <img alt={image.alt} loading="lazy" src={image.src} />
                        <div className="photo-caption">
                          <span className="category-tag">{image.category}</span>
                          <p>{image.caption}</p>
                        </div>
                      </button>
                    ) : (
                      <div
                        className="photo-placeholder"
                        style={image.minHeight ? { minHeight: image.minHeight } : undefined}
                      >
                        <p>{image.placeholderText}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="sale-description">
                <div className="sale-narrative">{sale.narrative}</div>
                <div className="sale-details">
                  {sale.detailRows.map((row) => (
                    <div className="detail-row" key={`${sale.id}-${row.label}`}>
                      <span className="detail-label">{row.label}</span>
                      <div className="detail-value">
                        {row.pills ? (
                          <div className="category-pills">
                            {row.pills.map((pill) => (
                              <span className="pill" key={pill}>
                                {pill}
                              </span>
                            ))}
                          </div>
                        ) : (
                          row.value
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-cta">
        <div className="container">
          <h2>Have a Complex Estate?</h2>
          <p>
            If what you&apos;ve seen here reflects the kind of estate you&apos;re working with, we
            would welcome a conversation.
          </p>
          <div className="portfolio-cta-actions">
            <Link className="btn-primary" href="/professionals">
              For Attorneys &amp; Fiduciaries
            </Link>
            <Link className="btn-ghost" href="/contact">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-label="Photo viewer"
        aria-modal="true"
        className={`lightbox${lightbox ? " open" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setLightbox(null);
          }
        }}
        role="dialog"
      >
        <button
          aria-label="Close"
          className="lightbox-close"
          onClick={() => setLightbox(null)}
          type="button"
        >
          &times;
        </button>
        {lightbox ? <img alt={lightbox.alt} src={lightbox.src} /> : null}
        {lightbox ? <div className="lightbox-caption">{lightbox.caption}</div> : null}
      </div>
    </>
  );
}
