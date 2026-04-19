# A Little Unlimited — Website Rebuild
## README & Implementation Guide

---

## WHAT'S IN THIS PACKAGE

You have received **two separate, complete outputs**:

### 1. `alu-html/` — Standalone HTML/CSS Version
A fully self-contained website with no server-side dependencies.
Hand directly to any web developer or upload to any static host.

| File | Purpose |
|---|---|
| `style.css` | Shared stylesheet — all pages reference this |
| `index.html` | Homepage |
| `about.html` | About page |
| `specialties.html` | Specialties — all 8 categories |
| `professionals.html` | For Professionals page (your most important page) |
| `contact.html` | Contact with inquiry form |

**To use:** Open `index.html` in any browser. For production, upload all files to your hosting provider in the same folder. No server required — pure HTML/CSS.

---

### 2. `alu-wordpress/` — WordPress Theme
A complete custom WordPress theme to replace or augment your existing ALittleUnlimited.com WordPress site.

| File | Purpose |
|---|---|
| `style.css` | Theme stylesheet + theme metadata header (required by WordPress) |
| `functions.php` | Theme setup, menus, custom post types |
| `header.php` | Site header / navigation (included by all templates) |
| `footer.php` | Site footer (included by all templates) |
| `front-page.php` | Homepage template (WordPress uses this for static front page) |
| `page-professionals.php` | "For Professionals" page template |
| `assets/main.js` | Mobile nav, scroll behavior, smooth anchors |

---

## WORDPRESS INSTALLATION

### Step 1 — Upload the theme
1. Go to your WordPress admin: `yourdomain.com/wp-admin`
2. Navigate to **Appearance > Themes**
3. Click **Add New > Upload Theme**
4. Zip the `alu-wordpress` folder and upload it
5. **Activate** the theme

### Step 2 — Set up your site settings
- **Settings > Reading:** Set "Your homepage displays" to "A static page"
- Create a blank page called **Home** and set it as the Homepage
- Create blank pages for: **About, Specialties, For Professionals, Past Sales, Contact**

### Step 3 — Set up Navigation Menus
- Go to **Appearance > Menus**
- Create a menu called **Primary Navigation**
- Add pages: About, Specialties, For Professionals, Past Sales, Contact
- Add the Contact page item and give it the CSS class `nav-cta` (enables gold border button styling)
- Assign to location: **Primary Navigation**
- Create a **Footer Navigation** menu and assign it to **Footer**

### Step 4 — Assign Page Templates
For each page, open it in the editor and set the **Page Template** (right sidebar):
- "For Professionals" page → select template: **For Professionals**

### Step 5 — Site Identity
- **Appearance > Customize > Site Identity**
- Site Name: `A Little Unlimited`
- Tagline: `Estate Sale Services`

### Step 6 — Add Testimonials
Testimonials are managed via a custom post type (registered in functions.php):
- Go to **Testimonials > Add New**
- Title: reviewer name / source
- Content: the quote text
- Custom Field: `testimonial_source` = citation text (e.g., "Google Reviews, April 2025")
- The homepage pulls the 3 most recent automatically

### Step 7 — Add Past Sales (Portfolio)
- Go to **Past Sales > Add New**
- Add title, featured image, and description
- These will populate the Past Sales page (build that template next or use a page builder)

---

## PAGES STILL TO BUILD

These pages were designed in the HTML version but not yet templated in WordPress.
Build them next, drawing from the HTML files:

- `specialties.html` → create `page-specialties.php` (or build in Gutenberg)
- `about.html` → create `page-about.php` (or build in Gutenberg)  
- `contact.html` → create `page-contact.php` + install a form plugin

**Recommended form plugins for Contact page:**
- **WPForms** (easiest, beginner-friendly) — the stylesheet has WPForms compatibility built in
- **Gravity Forms** (most powerful, professional) — the stylesheet has Gravity Forms overrides built in

---

## HOSTING OPTIONS (for HTML version)

If you want to go static instead of WordPress:

| Option | Cost | Notes |
|---|---|---|
| **Netlify** | Free tier available | Drag-and-drop deploy, custom domain, SSL |
| **Vercel** | Free tier available | Fast, global CDN |
| **GitHub Pages** | Free | Requires GitHub account |
| **Namecheap hosting** | ~$30/year | If you already have hosting |
| **WP Engine** (current) | Keep existing | Continue with WordPress theme |

---

## DESIGN SYSTEM

### Colors
| Variable | Hex | Usage |
|---|---|---|
| `--gold` | `#B8992C` | Primary accent, rules, eyebrows |
| `--gold-light` | `#D4B84A` | Button hover states |
| `--gold-pale` | `#F5EDD6` | Card hover, callout backgrounds |
| `--charcoal` | `#1A1A1A` | Main body text, positioning band |
| `--dark` | `#0F0F0F` | Hero, footer, dark sections |
| `--slate` | `#6B6B6B` | Secondary body text |
| `--off-white` | `#FAFAF8` | Page background |

### Typography
| Variable | Font | Usage |
|---|---|---|
| `--font-serif` | Cormorant Garamond | Headlines, blockquotes, display |
| `--font-sans` | Jost | Body, navigation, labels, buttons |

Both loaded from Google Fonts — no licensing cost.

### Key Design Decisions
- **Selectivity signals** are built into every page: "we don't take every estate" appears in the hero, professional page, and footer
- **No language about speed, convenience, or affordability** — all removed from current site copy
- **Fiduciary language** throughout the Professionals page: settlement accounting, discretion, documentation, accountability
- **Geography specificity** is prominent — North Shore community names appear on homepage to signal local expertise
- **Contact form** asks about estate categories and the visitor's professional role — this pre-qualifies inquiries and signals the right clientele

---

## NEXT STEPS

1. **Photography** — Replace placeholder descriptions with actual photos from your past sales. The current site at ALittleUnlimited.com has excellent photography (gemstone rings, Chinese porcelain, art glass). Reuse those.

2. **Past Sales / Portfolio page** — The most powerful credibility tool. Build this with 6-12 featured items per sale, with short descriptions explaining what made each notable.

3. **Google Search Console** — Submit the new sitemap after launch. The SEO keywords from the Marketing Toolkit are woven into the page copy.

4. **LinkedIn** — The Marketing Toolkit has a complete LinkedIn strategy. Start posting once the site is live so the referral audience has somewhere to land.

5. **Capabilities One-Pager** — Convert Section 1 of the Marketing Toolkit to a downloadable PDF and link it from the Professionals page.

---

## CONTACT

Bill@ALittleUnlimited.com
A Little Unlimited Estate Sale Services
Chicago, IL & North Shore Corridor
