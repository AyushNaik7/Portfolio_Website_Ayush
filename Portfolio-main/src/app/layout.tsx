import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/content/site";
import "./globals.css";

// geist for display + mono, hanken for body warmth
const display = Geist({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.ayushnaik.dev";
const description =
  "Ayush Naik is an engineering student and software developer who bridges business and code, translating client requirements into functional web solutions. B.Tech at VESIT Mumbai.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Naik · Software Developer",
    template: "%s · Ayush Naik",
  },
  description,
  keywords: [
    "Ayush Naik",
    "Software Developer",
    "Engineering Student",
    "Full-stack Developer",
    "Client Solutions",
    "React",
    "Next.js",
    "VESIT",
    "Mumbai",
    "Web Development",
  ],
  authors: [{ name: "Ayush Naik", url: siteUrl }],
  creator: "Ayush Naik",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: "Ayush Naik · Software Developer",
    description:
      "Engineering student bridging business and code, translating requirements into real software solutions.",
    siteName: "Ayush Naik",
    images: [
      {
        url: "/og-image.png",
        width: 2560,
        height: 1280,
        alt: "Ayush Naik, I bridge business and code, turning requirements into real software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Naik · Software Developer",
    description:
      "Engineering student bridging business and code, translating requirements into real software solutions.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

// structured data so an already-indexed personal brand can surface a rich result
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ayush Naik",
      alternateName: ["Ayush Naik"],
      url: siteUrl,
      jobTitle: "Software Developer & Engineering Student",
      email: profile.email,
      description,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Vivekanand Education Society's Institute of Technology",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      image: `${siteUrl}/assets/portrait.jpeg`,
      sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ayush Naik",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "#0b0d0f" }}
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body className="min-h-dvh font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        {/* paused while over the hobby quota; uncomment to resume collection */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
