import type { ReactNode } from "react";

type PageHeroProps = {
  description: string;
  eyebrow: string;
  title: ReactNode;
};

export function PageHero({ description, eyebrow, title }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <div className="rule" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
