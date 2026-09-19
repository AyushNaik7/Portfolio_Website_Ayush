// single source of truth. copy is researched against the real repos + live sites
// and fact-checked: portfolio voice, irrejectable, 100% true. no em dashes.

export const profile = {
  name: "Ayush Naik",
  role: "Engineering Student | Software Development",
  location: "Mumbai, India",
  email: "ayushnaik9898@gmail.com",
  phoneDisplay: "+91 7385327987",
  phoneHref: "+917385327987",
  resume: "/resume",
  resumeFile: "/Ayush_Naik - Resume.pdf",
  socials: {
    github: "https://github.com/AyushNaik7",
    linkedin: "https://www.linkedin.com/in/ayush-naik7/",
    website: "https://www.ayushnaik.dev/",
    instagram: "https://www.instagram.com/ayushcreates.0/",
  },
  status: {
    label: "B.Tech Student",
    org: "VESIT",
    note: "Completing Final Year",
    available: "Open to SDE roles",
  },
  headline: ["I bridge business and code,", "turning requirements into real software."],
  intro:
    "I build digital solutions that **solve real business problems**, translating client requirements into functional products. From leading **100+ brand partnerships** at instacollab.in to developing responsive web solutions, I **own the full pipeline** — client communication, technical execution, and delivery.",
} as const;

export const about = {
  lead: "I build digital solutions that bridge the gap between business requirements and technical execution, from client-facing communication to deployed products.",
  paragraphs: [
    "I'm the developer clients trust to **translate their vision into working software**. Whether it's managing a two-sided marketplace connecting 100+ brands and creators, or working directly with engineering clients to build specialized calculation tools, I've learned that great software starts with understanding the real problem. I don't just write code — I **own the entire pipeline**: gathering requirements, managing expectations, building the solution, and ensuring it delivers value.",
    "My journey spans both sides of the table. I've coordinated 30+ content campaigns that increased engagement by 25%, built company websites from scratch that boosted visitor engagement by 30%, and ran end-to-end transaction pipelines including negotiations and payment processing. This blend of **technical execution and business awareness** means I can speak both languages — explaining engineering constraints in business terms, and translating client needs into clean, functional code.",
  ],
  now: [
    "Managing instacollab.in, a B2B marketplace connecting brands and creators",
    "Building client-focused web solutions with React, Next.js, and modern tooling",
    "Completing B.Tech at VESIT (9.1 CGPA) with focus on Web Development and ML",
  ],
  facts: [
    { k: "Based in", v: "Mumbai, India" },
    { k: "Currently", v: "Final Year B.Tech Student at VESIT" },
    { k: "Studying", v: "B.Tech Computer Engineering" },
    { k: "Focus", v: "Full-stack development, client solutions, business-tech bridge" },
  ],
} as const;

export const capabilities = [
  {
    title: "Client-Focused Development",
    body: "Translating business requirements into functional web solutions across education, travel, and B2B platforms, managing the full cycle from requirement gathering to deployment.",
  },
  {
    title: "Full-Stack Web Development",
    body: "Building responsive, modern web applications with React, Next.js, and Node.js, backed by Firebase and Supabase, with a focus on user experience and accessibility.",
  },
  {
    title: "Business & Technical Bridge",
    body: "Combining technical execution with marketing insights and analytics, having coordinated 30+ campaigns and managed commercial pipelines including negotiations and payment processing.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  mode: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Digitaltycoontech",
    role: "SDE Intern",
    location: "Mumbai, India",
    mode: "Remote",
    start: "Jun 2026",
    end: "Jul 2026",
    current: false,
    summary: "Led end-to-end client communication and development for education and travel website projects.",
    bullets: [
      "Translated client requirements across 2+ education and travel projects into structured, functional website solutions, supporting the end-to-end process from requirement gathering to delivery.",
      "Led end-to-end client communication across website projects, translating business requirements into functional technical solutions and ensuring alignment from requirement gathering through final delivery.",
    ],
  },
  {
    company: "Navonex Tech",
    role: "Marketing And Sales Executive",
    location: "Mumbai, India",
    mode: "Remote",
    start: "Feb 2026",
    end: "May 2026",
    summary: "Coordinated multi-platform marketing campaigns and drove lead generation through data-driven strategies.",
    bullets: [
      "Coordinated 30+ content assets across social platforms, increasing engagement by 25% and strengthening brand awareness; used analytics and audience insights to optimize strategy, improving campaign reach by 20%.",
      "Supported 5+ campaigns through content distribution and consistent brand messaging, and drove lead generation and customer visibility by 15% through Meta Ads and Instagram Marketing, directly supporting business growth targets.",
    ],
  },
  {
    company: "Electrolyte Solutions",
    role: "Software Developer",
    location: "Mumbai, India",
    mode: "Remote",
    start: "Dec 2025",
    end: "Jan 2026",
    summary: "Designed and launched company website from scratch, improving online presence and user engagement.",
    bullets: [
      "Designed and launched the official company website from scratch, resulting in a 30% increase in visitor engagement and stronger online visibility through a clear, service-focused structure.",
      "Developed a responsive UI using HTML, CSS, and JavaScript, improving accessibility across 3+ device types and contributing to a 25% increase in user retention.",
    ],
  },
  {
    company: "Unicap",
    role: "Social Media Marketing Intern",
    location: "Mumbai, India",
    mode: "Remote",
    start: "Sep 2025",
    end: "Feb 2026",
    summary: "Analyzed audience insights and coordinated marketing deliverables for brand campaigns.",
    bullets: [
      "Analyzed audience insights and competitor trends across 3+ platforms, improving content performance and contributing to a 20% increase in engagement.",
      "Coordinated deliverables for 5+ marketing campaigns and brand collaborations, ensuring consistent messaging and timely execution.",
    ],
  },
];

export const education = {
  school: "Vivekanand Education Society's Institute of Technology (VESIT)",
  program: "Bachelor of Technology (B.Tech), Computer Engineering",
  location: "Chembur, Mumbai",
  start: "2023",
  end: "2027",
  points: [
    "CGPA: 9.1/10",
    "Relevant Coursework: Web Development, Machine Learning, IoT Systems, VLSI Design, Computer Communication Networks",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  summary: string;
  detail: string;
  highlights: string[];
  stack: string[];
  links: { live?: string; repo?: string; docs?: string };
  image: string;
  featured: boolean;
  year: string;
  team?: string; // shown when the build was genuinely shared. solo projects omit it.
  active?: boolean; // still shipping releases / commits today
  metrics?: { value: string; label: string; href?: string; live?: boolean }[]; // durable traction stats; live pulls the real number
  badges?: { src: string; alt: string; href: string }[]; // live shields.io badges
  // set only when the work is archived with a DOI. renders the same "cite this
  // work" block the paper gets, because a citable artifact is citable whether it
  // is a pdf or a piece of software.
  cite?: {
    doi: string;
    doiLabel: string;
    orcid: string;
    apa: string;
    bibtex: string;
  };
};

export const projects: Project[] = [
  {
    slug: "instacollab",
    name: "instacollab.in",
    tagline: "B2B marketplace connecting brands and creators",
    oneLiner:
      "A production marketplace platform managing 100+ brand-creator partnerships with integrated payment processing, negotiation workflows, and real revenue generation.",
    summary:
      "Built and actively manage a two-sided B2B marketplace that solves the influencer marketing coordination problem. Handle the complete commercial pipeline from initial outreach to payment collection, with integrated Razorpay processing and custom negotiation workflows.",
    detail: `instacollab.in started as a solution to a real market problem: brands struggle to find quality creators, and creators struggle to find consistent brand partnerships. I built this platform from the ground up and now manage both the technical infrastructure and the entire business operation.

The technical architecture handles concurrent brand-creator interactions with real-time messaging, automated quotation generation, and seamless payment processing through Razorpay integration. But the real challenge was solving the classic marketplace chicken-and-egg problem of supply and demand.

I ran multiple iterations of outreach campaigns, testing different messaging strategies and positioning approaches to build both sides of the marketplace simultaneously. The platform now connects over 100 brands and creators, with actual revenue flowing through the system every month.

This isn't just a portfolio project — it's a real business solving a genuine market need, with measurable traction and sustainable revenue streams.`,
    highlights: [
      "Built and manage complete B2B marketplace connecting 100+ brands and creators",
      "Own full commercial pipeline: outreach, negotiations, quotations, payment collection", 
      "Integrated Razorpay payment processing for seamless transaction handling",
      "Solved marketplace supply-demand challenges through iterative outreach campaigns",
      "Active revenue-generating platform with measurable business traction",
    ],
    stack: ["React", "Next.js", "Node.js", "Firebase", "Razorpay", "REST APIs"],
    links: {
      live: "https://instacollab.in",
    },
    image: "/assets/shots/instacollab.in.png",
    featured: true,
    year: "2025",
    active: true,
    metrics: [
      { value: "100+", label: "active partnerships" },
      { value: "Live", label: "revenue generation" },
    ],
  },
  {
    slug: "volfram-systems", 
    name: "Volfram Systems",
    tagline: "Engineering calculation tool for steam table analysis",
    oneLiner:
      "A specialized web application translating complex steam table engineering requirements into functional software, managing direct client communication and technical delivery.",
    summary:
      "Worked directly with engineering clients to build a custom calculation tool for steam table analysis. Managed the complete project lifecycle from requirement gathering to technical delivery, bridging the gap between complex engineering needs and functional software solutions.",
    detail: `Volfram Systems represents the kind of client work that goes beyond just writing code — it required understanding a specialized engineering domain and translating complex requirements into intuitive software.

The client needed a tool for steam table calculations, a highly technical domain requiring both computational accuracy and clear user experience. The challenge wasn't just implementing the math correctly, but ensuring the interface made sense to engineers who think in terms of pressure, temperature, and thermodynamic properties.

I handled all aspects of the client relationship: requirement gathering sessions, progress updates, scope management, and technical delivery. This meant explaining engineering constraints in business terms while ensuring the technical implementation remained mathematically sound and performant.

The project taught me that great client work isn't just about technical execution — it's about becoming a trusted technical partner who can navigate between business needs and engineering realities.`,
    highlights: [
      "Managed direct client relationship from requirements to technical delivery",
      "Translated complex engineering requirements (steam tables) into functional software",
      "Handled complete project lifecycle including scope and expectation management", 
      "Bridged technical implementation with business stakeholder communication",
      "Delivered mathematically accurate tool with intuitive user experience",
    ],
    stack: ["JavaScript", "Python", "Web Development", "Engineering Calculations"],
    links: {},
    image: "/assets/shots/volfram.in.png",
    featured: true,
    year: "2025", 
    team: "Client project",
  },
  {
    slug: "electrolyte-solutions",
    name: "Electrolyte Solutions",
    tagline: "Complete company website from concept to deployment",
    oneLiner:
      "Designed and launched a comprehensive company website from scratch, delivering 30% increased visitor engagement and establishing strong online presence for engineering services.",
    summary:
      "Built the complete digital presence for Electrolyte Solutions, an engineering services company. Managed the entire project lifecycle from design concept to deployment, resulting in measurable improvements in visitor engagement and business visibility.",
    detail: `Electrolyte Solutions needed more than just a website — they needed a complete digital transformation that would establish their credibility in the competitive engineering services market. I took on this project as the sole developer and designer, handling everything from initial concept to final deployment.

The technical challenge was creating a responsive, professional website that could effectively communicate complex engineering services to both technical and non-technical audiences. I built a custom solution using modern web technologies, ensuring fast loading times, mobile responsiveness, and accessibility compliance across all device types.

The real success metric wasn't just building a website — it was driving business results. The new site delivered a 30% increase in visitor engagement and significantly improved the company's online visibility. More importantly, it became a sales tool that effectively converts technical inquiries into business opportunities.

This project demonstrated that effective web development isn't just about clean code — it's about understanding business goals and translating them into digital solutions that drive measurable results.`,
    highlights: [
      "Designed and launched complete company website from initial concept to deployment",
      "Achieved 30% increase in visitor engagement and improved online business visibility", 
      "Built responsive UI ensuring accessibility compliance across 3+ device categories",
      "Delivered 25% improvement in user retention through optimized user experience",
      "Established comprehensive digital presence for engineering services company",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development", "UI/UX"],
    links: {},
    image: "/assets/shots/electrolytesoln.in.png",
    featured: true,
    year: "2026",
    team: "Solo project",
    active: false,
  },
];

export const WEB_PROJECTS = ["instacollab", "volfram-systems"];
export const FEATURED_ORDER = ["instacollab", "volfram-systems", "electrolyte-solutions"];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    group: "Web Development",
    items: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    group: "Database & Backend",
    items: ["MySQL", "Firebase", "Supabase", "REST APIs"],
  },
  {
    group: "Business & Tools",
    items: ["Power BI", "Excel", "MS Office", "Google Analytics", "Git", "GitHub", "Vercel", "Clerk"],
  },
];

export const certifications = [
  {
    name: "Deloitte Australia - Technology Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    url: "",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    url: "",
  },
];

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

// Placeholder research object for compatibility (user can add research later)
export const research = {
  title: "Research Paper Placeholder",
  subtitle: "This section is ready for future research publications.",
  year: "2025",
  byline: "Independent Research",
  pages: "0",
  image: "/assets/research-teaser.webp",
  summary: "Research section placeholder - ready for future publications.",
  note: "This section can be populated when research papers are available.",
  findings: ["Placeholder finding 1", "Placeholder finding 2"],
  citation: "Naik, A. (2025). Research placeholder.",
  bibtex: "@article{naik2025research,\n  author={Naik, Ayush},\n  title={Research placeholder},\n  year={2025}\n}",
  pdf: "#",
  repo: "#",
  doi: "#",
  orcid: "#",
} as const;
