export type NavItem = {
  href: string;
  label: string;
};

export type MetaPage = {
  description: string;
  title: string;
};

export type Specialty = {
  bullets: string[];
  description: string[];
  id: string;
  intro: string;
  number: string;
  title: string;
};

export type PortfolioImage = {
  alt?: string;
  caption?: string;
  category?: string;
  heightClass: "medium" | "short" | "tall";
  kind: "image" | "placeholder";
  minHeight?: number;
  placeholderText?: string;
  src?: string;
};

export type PortfolioSale = {
  categories: string[];
  detailRows: Array<{ label: string; pills?: string[]; value?: string }>;
  eyebrow: string;
  gridClass: string;
  id: string;
  images: PortfolioImage[];
  location: string;
  narrative: string;
  title: string;
  year: string;
};

export const siteUrl = "https://alittleunlimited.com";
export const businessEmail = "info@alittleunlimited.com";
export const billEmail = "Bill@ALittleUnlimited.com";
export const billPhone = "(773) 771-2805";
export const siteName = "A Little Unlimited Estate Sale Services";

export const navigationItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/about#bill-bio", label: "Bill's Bio" },
  { href: "/specialties", label: "Specialties" },
  { href: "/professionals", label: "For Professionals" },
];

export const footerSpecialties: NavItem[] = [
  { href: "/specialties#jewelry", label: "Fine Jewelry" },
  { href: "/specialties#coins", label: "Rare Coins" },
  { href: "/specialties#antiques", label: "Antiques" },
  { href: "/specialties#artglass", label: "Art Glass" },
  { href: "/specialties#pottery", label: "Art Pottery" },
  { href: "/specialties#couture", label: "Vintage Couture" },
  { href: "/specialties#furnishings", label: "Designer Furnishings" },
  { href: "/specialties#collections", label: "Specialty Collections" },
];

export const socialLinks: NavItem[] = [
  { href: "https://www.facebook.com/ALittleUnlimitedLLC", label: "Facebook" },
  { href: "https://instagram.com/ALittleUnlimited", label: "Instagram" },
  { href: "https://www.tiktok.com/@alittleunlimitedllc", label: "TikTok" },
];

export const metaPages: Record<string, MetaPage> = {
  about: {
    title: "About",
    description:
      "Bill Little founded A Little Unlimited to specialize in complex, high-value estates with fine and antique jewelry, gemstones, rare coins, antiques, art glass, art pottery, vintage couture, designer furnishings, and specialty collections — led by a CAGA-credentialed Certified Personal Property Appraiser.",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Bill Little, CAGA — Certified Personal Property Appraiser and principal of A Little Unlimited Estate Sale Services in Chicago. Specialists in complex, high-value estates serving attorneys, fiduciaries, and families on the North Shore.",
  },
  home: {
    title:
      "A Little Unlimited Estate Sale Services — Chicago's Specialist in Complex, High-Value Estates",
    description:
      "A Little Unlimited Estate Sale Services specializes in complex, high-value estate sales in Chicago and the North Shore. Fine and antique jewelry, gemstones, rare coins, antiques, art glass, art pottery, vintage couture, designer furnishings, and specialty collections — led by a CAGA-credentialed Certified Personal Property Appraiser.",
  },
  portfolio: {
    title: "Past Sales",
    description:
      "Notable estates and items handled by A Little Unlimited — fine and antique jewelry, gemstones, rare coins, antiques, art glass, art pottery, vintage couture, designer furnishings, and specialty collections. Chicago and North Shore specialist led by Bill Little, CAGA.",
  },
  professionals: {
    title: "For Attorneys & Fiduciaries",
    description:
      "A specialized estate sale resource led by a CAGA-credentialed Certified Personal Property Appraiser, serving trust and estate attorneys, bank trust officers, and fiduciaries in Chicago and the North Shore. USPAP-compliant valuations, full settlement accounting, professional documentation, and discretion.",
  },
  specialties: {
    title: "Specialties",
    description:
      "Deep expertise in fine and antique jewelry, gemstones, rare coins, antiques, art glass, art pottery, vintage couture, designer furnishings, and the specialty collections that often define an estate — led by a CAGA-credentialed Certified Personal Property Appraiser. Chicago and North Shore estate sale specialists.",
  },
};

export const footerDescription =
  "Chicago's specialist in complex, high-value estate sales. We bring professional expertise to estates that deserve more than a price tag and a weekend sale.";

export const homepageExpertise = [
  {
    title: "Designer & Antique Furnishings",
    description:
      "Provenance research, period identification, and high-end resale routing. Not every fine piece belongs in a weekend sale — we know the difference.",
  },
  {
    title: "Fine & Antique Jewelry",
    description:
      "All valuations performed by a CAGA-credentialed Certified Personal Property Appraiser. Signed pieces, Georgian, Victorian, Art Deco, mid-century modern. Research-based pricing using current auction records and dealer data. GIA gemological credentials in progress.",
  },
  {
    title: "Rare Coins & Numismatics",
    description:
      "Identification, grading references, lot structuring, and routing analysis — auction versus private sale. Among the most commonly undervalued assets in estate sales.",
  },
  {
    title: "Vintage Couture & Designer Apparel",
    description:
      "Chanel, Balenciaga, Halston, Pucci, and beyond. Authentication, condition expertise, and access to the buyer networks these pieces deserve.",
  },
  {
    title: "Art Glass",
    description:
      "Tiffany Studios, Steuben, Lalique, Murano, and mid-century studio glass. Proper attribution before pricing — always.",
  },
  {
    title: "Art Pottery",
    description:
      "Rookwood, Weller, Roseville, Newcomb, Van Briggle, Grueby, majolica, and mid-century studio pottery. A distinct collector market handled with care.",
  },
  {
    title: "Precious Metals",
    description:
      "Melt value analysis, maker identification, sterling versus silver-plate, gold alloy assessment. Accuracy that protects families and estate records.",
  },
  {
    title: "Chinese Antiques & Asian Decorative Arts",
    description:
      "Porcelain, jade carvings, bronzes, lacquerware, hardwood furniture. Dynasty identification, attribution research, and current collector market valuation.",
  },
  {
    title: "Fine Art & Works on Paper",
    description:
      "Artist identification, signature verification, market research, and auction referral when appropriate. Your estate's art handled with the gravity it deserves.",
  },
];

export const homepageTestimonials = [
  {
    quote:
      '"This is a man who KNOWS what he\'s looking at. His knowledge of antiques, art and valuables is mind blowing. He\'s a tremendous salesman whose goal is to maximize the return."',
    cite: "— Google Reviews, April 2025",
  },
  {
    quote:
      '"Amazing person, just as amazing crew — creative and an eye for detail and VALUATION that blew me away. A big-time estate lawyer was on his reference list and gave a glowing review."',
    cite: "— Mark Thomas, Yelp",
  },
  {
    quote:
      '"As a realtor, I found that Bill was always open to communication regarding the timeline. Together we coordinated a massive estate sale and home sale with complete ease for the owner."',
    cite: "— Danielle Addante, Realtor",
  },
];

export const processSteps = [
  {
    title: "Consultation & Assessment",
    description:
      "We begin with a comprehensive walkthrough. Domain knowledge informs the initial assessment — not a clipboard.",
  },
  {
    title: "Research & Lot Organization",
    description:
      "Pre-sale research using current auction records, dealer data, and live spot prices. Every category organized by value tier.",
  },
  {
    title: "Professional Staging",
    description:
      "Presentation reflects the quality of the estate — not a generic sale layout. Photography and display that attract the right buyers.",
  },
  {
    title: "Vetted Buyer Network",
    description:
      "Collectors, dealers, and auction specialists — the right buyers for each category. High-value pieces routed appropriately.",
  },
  {
    title: "Settlement & Reporting",
    description:
      "Full post-sale settlement accounting, itemized and organized — suitable for estate records, probate filings, and fiduciary documentation.",
  },
];

export const geoTags = [
  "Chicago",
  "Winnetka",
  "Kenilworth",
  "Glencoe",
  "Lake Forest",
  "Wilmette",
  "Evanston",
  "Highland Park",
  "Northbrook",
  "Glenview",
  "Lincoln Park",
  "Gold Coast",
];

export const specialties: Specialty[] = [
  {
    id: "jewelry",
    number: "01",
    title: "Fine & Antique Jewelry",
    intro:
      "All jewelry valuations are performed by a CAGA-credentialed Certified Personal Property Appraiser using current auction comparables and live spot pricing for precious metals.",
    description: [
      "From signed Cartier and Van Cleef to Georgian mourning jewelry and Art Deco platinum, fine jewelry requires a level of expertise that general estate sale companies rarely bring.",
      "A signed piece from a notable maker and an unsigned piece of similar appearance can differ by thousands of dollars in value. Period attribution matters. Metal content matters. Stone quality, cutting style, and hallmarks all matter. We research maker, period, condition, and current market before pricing anything — using live auction comparables and active dealer data, not price guides from three years ago.",
      "Bill is actively pursuing GIA gemological credentials. Gemstone identification, grading assessment, and market pricing are conducted with reference to current professional standards.",
    ],
    bullets: [
      "Signed and maker-identified pieces: Cartier, Van Cleef, Tiffany, Georg Jensen, and others",
      "Period jewelry: Georgian, Victorian, Edwardian, Art Nouveau, Art Deco, Retro, Mid-Century",
      "Gemstone identification and assessment against current market pricing",
      "Precious metal identification and melt analysis",
      "Lot organization by period, maker, and value tier",
      "Routing to appropriate buyers: collectors, dealers, auction specialists",
    ],
  },
  {
    id: "coins",
    number: "02",
    title: "Rare Coins & Numismatics",
    intro:
      "Coin collections are among the most commonly undervalued assets in estate sales. What appears to be a jar of old coins can contain pieces worth hundreds — or thousands — of dollars each.",
    description: [
      "General estate sale companies frequently price coin collections by face value, or hand the entire collection to a single buyer at a fraction of its actual worth. We approach numismatic collections as specialists: identifying individual coins, referencing grading standards, and structuring lots to maximize recovery for the estate.",
      "High-value pieces are routed appropriately — to auction, to specialty dealers, or to collectors — rather than sold in a single weekend sale at a fraction of their value.",
    ],
    bullets: [
      "U.S. and world coin identification by series, date, and mint mark",
      "Grading reference and condition assessment",
      "Key date identification and error coin recognition",
      "Precious metal content identification (gold, silver, platinum coins)",
      "Lot structuring by value tier for appropriate routing",
      "Auction versus private sale analysis for high-value pieces",
    ],
  },
  {
    id: "antiques",
    number: "03",
    title: "Antiques",
    intro:
      "American, English, and Continental period antiques — furniture, decorative arts, folk art, and the longstanding collections that often anchor an estate.",
    description: [
      "We identify period, attribute makers, research provenance, and price using current market data before recommending the right sales path for the estate.",
    ],
    bullets: [
      "American period furniture: Federal, Empire, Eastlake, Mission, Arts & Crafts",
      "English and Continental antiques: Georgian, Victorian, Louis XV/XVI, Biedermeier",
      "Folk art and primitives: regional attribution and provenance research",
      "Scientific instruments, barometers, automata, music boxes",
      "Early American glass, transferware, pressed glass, flow blue",
      "Clocks, watches, and horological collections",
    ],
  },
  {
    id: "chinese",
    number: "04",
    title: "Chinese Antiques & Asian Decorative Arts",
    intro:
      "Porcelain, jade carvings, bronzes, lacquerware, hardwood furniture, and Asian decorative arts require period identification, attribution research, and an understanding of current collector market dynamics.",
    description: [
      "Chinese antiques are among the most technically demanding categories in estate sales. Period attribution — distinguishing a Ming period piece from a later reproduction, or identifying the dynasty of a porcelain form — requires specialized knowledge that most estate sale companies do not possess. We bring that knowledge, along with an understanding of the current global collector market for Chinese and Asian works of art.",
    ],
    bullets: [
      "Porcelain: period identification, reign mark research, glaze and form attribution",
      "Jade: nephrite versus jadeite, carving period, quality assessment",
      "Bronzes: vessel forms, casting period, patina assessment",
      "Lacquerware: dynasty attribution, technique identification",
      "Hardwood furniture: period, regional style, construction method",
      "Snuff bottles, scholar's objects, and decorative arts",
    ],
  },
  {
    id: "couture",
    number: "05",
    title: "Vintage Couture & Designer Apparel",
    intro:
      "Chanel, Balenciaga, Halston, Pucci — vintage couture demands authentication, condition expertise, and access to the right buyer network. It deserves more than a rack and a price tag.",
    description: [
      "The vintage luxury apparel market has matured significantly. Serious collectors and dealers are actively seeking authenticated, well-documented pieces from notable houses. Condition, label attribution, period, and provenance all affect value materially. We handle designer apparel with the care and knowledge it deserves — identifying, documenting, and presenting each piece appropriately.",
    ],
    bullets: [
      "Designer identification: Chanel, Halston, Balenciaga, Pucci, Bill Blass, Valentino, and others",
      "Label and construction authentication",
      "Period attribution and dating",
      "Condition assessment and appropriate disclosure",
      "Access to collector and dealer buyers for authenticated luxury pieces",
      "Handbags, accessories, and shoes: Hermès, Louis Vuitton, Gucci",
    ],
  },
  {
    id: "artglass",
    number: "06",
    title: "Art Glass",
    intro:
      "Tiffany Studios, Steuben, Lalique, Murano — the art glass market rewards proper attribution.",
    description: [
      "We identify maker, period, and condition grade before pricing, and connect significant pieces with serious collectors and dealers.",
    ],
    bullets: [
      "Tiffany Studios: lamp bases, shades, metalwork, and favrile glass",
      "Steuben: Carder-era attribution and form identification",
      "Lalique, Daum, Gallé: French art glass identification and attribution",
      "Murano: studio identification and period assessment",
      "American art glass: Quezal, Durand, Kew Blas",
      "Mid-century and contemporary studio glass",
    ],
  },
  {
    id: "pottery",
    number: "07",
    title: "Art Pottery",
    intro:
      "Rookwood, Weller, Roseville, Newcomb, Van Briggle, Grueby — American and European art pottery is a distinct collector market that rewards careful attribution.",
    description: ["We identify artist marks, glaze periods, and forms before pricing."],
    bullets: [
      "Rookwood: artist marks, glaze periods, form identification",
      "Ohio art pottery: Weller, Roseville, Owens, McCoy",
      "Arts & Crafts pottery: Newcomb, Van Briggle, Grueby, Marblehead, Teco",
      "Majolica: maker identification, period, and condition",
      "Mid-century studio pottery: Natzler, Voulkos, regional studio",
      "European pottery: Rörstrand, Meissen, Royal Doulton, Wedgwood",
    ],
  },
  {
    id: "metals",
    number: "08",
    title: "Precious Metals",
    intro:
      "Sterling versus silver-plate. Gold alloy identification. Maker marks and hallmarks. Melt value versus collector value. Accuracy here protects families and estate records.",
    description: [
      "Precious metal holdings in estates are frequently misidentified or mispriced — silver-plate mistaken for sterling, gold-filled pieces confused with solid gold, and unmarked items dismissed without analysis. We conduct thorough identification and melt value analysis, distinguishing between melt value and collector value for maker-identified and period pieces.",
    ],
    bullets: [
      "Sterling versus silver-plate identification and testing",
      "Gold alloy karat assessment (10K, 14K, 18K, 22K, 24K)",
      "Maker mark and hallmark research",
      "Live spot price integration for melt value calculation",
      "Flatware, hollowware, and decorative silver identification",
      "Gold-filled, vermeil, and platinum identification",
    ],
  },
  {
    id: "art",
    number: "09",
    title: "Fine Art & Works on Paper",
    intro:
      "Artist identification, signature verification, market research, and auction referral when appropriate. Your estate's art handled with the gravity it deserves.",
    description: [
      "Fine art in estates ranges from regional works of modest value to signed prints, works on paper, and original paintings of significant collector interest. We approach each piece with research — identifying artists, verifying signatures, and researching auction records — before determining the appropriate venue and pricing strategy. High-value works are referred to auction specialists when that path serves the estate best.",
    ],
    bullets: [
      "Artist identification and signature research",
      "Print attribution: original versus reproduction, edition research",
      "Works on paper: drawings, watercolors, pastels",
      "Market research using auction record databases",
      "Auction referral for significant works where appropriate",
      "Framing and condition assessment",
    ],
  },
  {
    id: "furnishings",
    number: "10",
    title: "Designer & Antique Furnishings",
    intro:
      "Provenance research, period identification, and high-end resale routing. Not every fine piece belongs in a weekend sale — we know the difference.",
    description: [
      "Designer and antique furnishings require period identification, construction analysis, and an understanding of the current resale market to price correctly. We identify period American and European furniture, designer pieces, and architectural antiques — and route high-value furnishings to the appropriate buyers: dealers, decorators, and auction houses capable of realizing full value.",
    ],
    bullets: [
      "Period furniture identification: American, English, French, Continental",
      "Designer furniture: Knoll, Herman Miller, Dunbar, Widdicomb, and others",
      "Construction analysis and condition assessment",
      "Architectural antiques: mantels, hardware, lighting",
      "Oriental and antique rugs: attribution and condition",
      "Dealer and auction routing for high-value pieces",
    ],
  },
  {
    id: "collections",
    number: "11",
    title: "Specialty Collections",
    intro:
      "The specialty collections that often define an estate — assembled over decades, sometimes overlooked by general estate sale companies, and frequently the highest-value component of what we are asked to handle.",
    description: ["We research, attribute, and route significant collections in virtually any field."],
    bullets: [
      "Numismatic collections beyond U.S. coinage: world coins, ancients, paper currency, medals",
      "Philatelic collections: U.S. and worldwide stamps, postal history, first-day covers",
      "Militaria: edged weapons, medals, uniforms, insignia, ephemera",
      "Vintage fountain pens: Parker, Sheaffer, Waterman, Montblanc, Pelikan",
      "Vintage cameras and photographic equipment",
      "Native American and tribal art: pottery, baskets, weavings, beadwork",
      "Sports memorabilia, advertising, and Americana",
      "Whatever category was assembled with care — we welcome the conversation",
    ],
  },
];

export const portfolioFilters = [
  { value: "all", label: "All Estates" },
  { value: "jewelry", label: "Fine Jewelry" },
  { value: "coins", label: "Rare Coins" },
  { value: "chinese", label: "Chinese & Asian Decorative Arts" },
  { value: "couture", label: "Couture" },
  { value: "artglass", label: "Art Glass" },
  { value: "furnishings", label: "Furnishings" },
];

export const portfolioSales: PortfolioSale[] = [
  {
    id: "glenview-estate",
    categories: ["jewelry", "coins"],
    eyebrow: "Glenview, IL",
    title: "North Shore Estate — Fine Jewelry & Numismatic Collection",
    location: "Glenview",
    year: "2023",
    gridClass: "layout-hero",
    images: [
      {
        kind: "image",
        heightClass: "tall",
        category: "Fine Jewelry",
        caption:
          "Georgian-era garnet parure — brooch, earrings, and bracelet, c. 1820–1840",
        src: "https://alittleunlimited.com/wp-content/uploads/2024/12/2023-12-01_SawtellGlenviewWarehouse_GemstoneRings-1024x390.jpg",
        alt: "Gemstone rings from Glenview estate sale",
      },
      {
        kind: "image",
        heightClass: "medium",
        category: "Chinese & Asian Decorative Arts",
        caption: "Chinese porcelain collection — dynasty-identified prior to pricing",
        src: "https://alittleunlimited.com/wp-content/uploads/2024/11/2024-10-21_ChinesePorcelainCoins.jpg",
        alt: "Chinese porcelain and coins",
      },
      {
        kind: "placeholder",
        heightClass: "short",
        placeholderText: "+ Photo",
      },
    ],
    narrative:
      '"What appeared on initial walkthrough to be a well-appointed mid-century household contained, in a single study, a numismatic collection spanning six decades and an art deco jewelry grouping that had never been appraised. Every coin was identified and graded before the sale opened. Every piece of jewelry was priced to current market."',
    detailRows: [
      { label: "Location", value: "Glenview, IL" },
      {
        label: "Categories",
        pills: [
          "Fine Jewelry",
          "Rare Coins",
          "Chinese & Asian Decorative Arts",
          "Precious Metals",
        ],
      },
      {
        label: "Notable",
        value:
          "Art Deco platinum and diamond grouping; pre-1933 U.S. gold coin set; Chinese export porcelain grouping",
      },
      { label: "Referred By", value: "Trust & estate attorney, Cook County" },
    ],
  },
  {
    id: "wilmette-prairie",
    categories: ["artglass", "furnishings"],
    eyebrow: "Wilmette, IL",
    title: "Prairie Style Estate — Art Glass & Architectural Antiques",
    location: "Wilmette",
    year: "2023",
    gridClass: "layout-3b",
    images: [
      {
        kind: "image",
        heightClass: "medium",
        category: "Art Glass",
        caption: "Prairie-style leaded glass windows — attributed and priced by period",
        src: "https://alittleunlimited.com/wp-content/uploads/2023/09/2023-09-22_PrairieWillmette_PrairieStyleLeadedGlassWindows.jpg",
        alt: "Prairie style leaded glass windows",
      },
      { kind: "placeholder", heightClass: "medium", placeholderText: "+ Photo" },
      { kind: "placeholder", heightClass: "medium", placeholderText: "+ Photo" },
    ],
    narrative:
      '"A 1912 Prairie-style home whose contents matched its architecture — leaded art glass windows, period American furniture, and a collection of Arts & Crafts pottery that most buyers in an ordinary sale would never have recognized for what it was."',
    detailRows: [
      { label: "Location", value: "Wilmette, IL" },
      {
        label: "Categories",
        pills: ["Art Glass", "Antique Furnishings", "American Pottery", "Architectural Antiques"],
      },
      {
        label: "Notable",
        value:
          "Prairie-style leaded glass windows; Arts & Crafts period pottery; period American Mission furniture",
      },
    ],
  },
  {
    id: "lincoln-park-cameras",
    categories: ["furnishings"],
    eyebrow: "Lincoln Park, Chicago",
    title: "Lincoln Park Estate — Vintage Collectibles & Photography Equipment",
    location: "Lincoln Park",
    year: "2024",
    gridClass: "layout-2",
    images: [
      {
        kind: "image",
        heightClass: "medium",
        category: "Vintage Collectibles",
        caption: "Vintage camera collection — Leica, Rolleiflex, and medium format cameras",
        src: "https://alittleunlimited.com/wp-content/uploads/2024/12/2024-10-04_WehrleLincolnPark_VintageCameras.jpg",
        alt: "Vintage cameras from Lincoln Park estate",
      },
      { kind: "placeholder", heightClass: "medium", placeholderText: "+ Photo" },
    ],
    narrative:
      '"Decades of accumulated collecting — vintage cameras, optical equipment, and associated collectibles that required individual identification and model-by-model pricing to recover actual market value."',
    detailRows: [
      { label: "Location", value: "Lincoln Park, Chicago" },
      {
        label: "Categories",
        pills: ["Vintage Collectibles", "Photography Equipment", "Mid-Century Furnishings"],
      },
      {
        label: "Notable",
        value:
          "Leica, Rolleiflex, and medium format camera collection; vintage optical equipment",
      },
    ],
  },
  {
    id: "north-shore-placeholder",
    categories: ["jewelry", "couture"],
    eyebrow: "Kenilworth / Lake Forest",
    title: "North Shore Estate — Couture & Fine Jewelry",
    location: "North Shore",
    year: "2024–2025",
    gridClass: "layout-mosaic",
    images: [
      {
        kind: "placeholder",
        heightClass: "tall",
        placeholderText: "Add estate photo",
        minHeight: 360,
      },
      { kind: "placeholder", heightClass: "medium", placeholderText: "Add photo" },
      { kind: "placeholder", heightClass: "medium", placeholderText: "Add photo" },
    ],
    narrative:
      '"Add your estate narrative here — one or two sentences describing what made this estate notable and what expertise it required. Written in first person, past tense, as if explaining the work to a professional referral source."',
    detailRows: [
      { label: "Location", value: "Kenilworth / Lake Forest, IL" },
      {
        label: "Categories",
        pills: ["Vintage Couture", "Fine Jewelry", "Designer Accessories"],
      },
      {
        label: "Notable",
        value:
          "Add notable items here — signed pieces, significant finds, anything that demonstrates the expertise required",
      },
      {
        label: "Referred By",
        value:
          "Add referral source type (attorney, bank trust, family) — specific names are optional",
      },
    ],
  },
];

export const contactRoleOptions = [
  "Trust & Estate Attorney",
  "Bank Trust Officer",
  "Wealth Manager / Financial Advisor",
  "CPA / Tax Professional",
  "Senior Move Manager",
  "Real Estate Professional",
  "Estate Appraiser",
  "Family Member / Personal Representative",
  "Other",
];

export const contactCategoryOptions = [
  { label: "Fine & Antique Jewelry", value: "jewelry" },
  { label: "Gemstones (loose or set)", value: "gemstones" },
  { label: "Rare Coins & Numismatics", value: "coins" },
  { label: "Antiques (American, English, Continental)", value: "antiques" },
  { label: "Chinese Antiques & Asian Decorative Arts", value: "chinese" },
  { label: "Art Glass (Tiffany, Steuben, Lalique, Murano, etc.)", value: "artglass" },
  { label: "Art Pottery (Rookwood, Weller, Roseville, etc.)", value: "pottery" },
  { label: "Vintage Couture", value: "couture" },
  { label: "Fine Art & Works on Paper", value: "art" },
  { label: "Precious Metals (silver, gold, platinum)", value: "metals" },
  { label: "Designer & Antique Furnishings", value: "furnishings" },
  { label: "Specialty Collections (please describe below)", value: "collections" },
];
