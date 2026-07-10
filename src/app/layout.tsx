import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabsfolio.me"),
  title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
  description: "Faisal Ahmad Bhat is the best Full Stack Developer and AI Engineer in Jammu and Kashmir (Srinagar). Expert in Generative AI, SaaS, LLM integrations, and custom E-commerce web applications.",
  applicationName: "Faisal Ahmad Bhat Portfolio",
  keywords: [
    "Faisal Ahmad Bhat",
    "Faisal Bhat",
    "Faisal Ahmad",
    "Fabsfolio",
    "fabsfolio.me",
    "fab",
    "fabfolio",
    "faisal ahmad bhat fab",
    "fab developer",
    "Faisal Ahmad Bhat Portfolio",
    "Faisal Ahmad Bhat pricing",
    "Faisal Ahmad Bhat services",
    "Web Developer pricing packages",
    "Freelance Web Development costs",
    "SaaS Developer packages",
    "Best Web Developer in Jammu and Kashmir", 
    "Best Web Developer in Srinagar", 
    "Best Developer in Srinagar, J&K", 
    "Full Stack Developer Jammu and Kashmir", 
    "AI Engineer Jammu and Kashmir", 
    "Generative AI Developer Srinagar", 
    "SaaS Developer Srinagar",
    "Next.js Developer Srinagar",
    "Freelance Web Developer Jammu and Kashmir"
  ],
  authors: [{ name: "Faisal Ahmad Bhat", url: "https://www.fabsfolio.me" }],
  creator: "Faisal Ahmad Bhat",
  publisher: "Faisal Ahmad Bhat",
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://www.fabsfolio.me",
    title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
    description: "Top-rated Full Stack Developer & AI Engineer based in Srinagar, Jammu and Kashmir. Building high-performance, secure, and scalable web applications.",
    siteName: "Faisal Ahmad Bhat Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://www.fabsfolio.me/profile.png",
        width: 1200,
        height: 630,
        alt: "Faisal Ahmad Bhat - Full Stack Developer & AI Engineer",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
    description: "Top-rated Full Stack Developer & AI Engineer based in Jammu & Kashmir. Specialized in Gen AI, custom LLMs, SaaS, and E-commerce.",
    creator: "@fab_c14",
    images: ["https://www.fabsfolio.me/profile.png"],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Fabsfolio",
      "alternateName": ["fabsfolio", "Faisal Ahmad Bhat Portfolio"],
      "url": "https://www.fabsfolio.me"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Faisal Ahmad Bhat",
      "alternateName": ["Faisal Ahmad", "Faisal Bhat", "Fabsfolio", "fab", "fabfolio", "faisal ahmad bhat fab", "fab-c14", "Faisal Ahmad Bhat Developer", "Faisal Ahmad Bhat Portfolio"],
      "url": "https://www.fabsfolio.me",
      "jobTitle": "Full Stack Web Developer & AI Engineer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Srinagar",
        "addressRegion": "Jammu and Kashmir",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "Full Stack Web Development",
        "Artificial Intelligence",
        "Generative AI",
        "LLM Integration",
        "SaaS Development",
        "E-commerce Development",
        "Next.js",
        "React",
        "Node.js",
        "Search Engine Optimization (SEO)"
      ],
      "description": "Faisal Ahmad Bhat is the premier Full Stack Developer and AI Engineer in Srinagar, Jammu and Kashmir. He specializes in SaaS development, generative AI integrations, LLM workflows, and custom e-commerce sites.",
      "sameAs": [
        "https://github.com/fab-c14",
        "https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229",
        "https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ=="
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Faisal Ahmad Bhat - Freelance Web Developer & AI Engineer",
      "image": "https://www.fabsfolio.me/profile.png",
      "@id": "https://www.fabsfolio.me/#service",
      "url": "https://www.fabsfolio.me",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Srinagar",
        "addressRegion": "Jammu and Kashmir",
        "postalCode": "190001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.0837",
        "longitude": "74.7973"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://github.com/fab-c14",
        "https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Jammu and Kashmir"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Srinagar"
        }
      ],
      "description": "Faisal Ahmad Bhat offers the best freelance full stack web development and AI engineering services in Jammu and Kashmir. Specialized in Next.js, Gen AI integration, custom LLM solutions, SaaS, and E-commerce websites.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Freelance Web Development & Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Basic Portfolio Package",
              "description": "Custom single-page landing website built with Next.js, optimized for high speed, Core Web Vitals, and local SEO."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "1000",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced SaaS Package",
              "description": "Full-stack multi-page application featuring secure user auth, database integrations, dashboard, and customized VPS deployment."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "2500",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise AI & Growth Suite",
              "description": "Premium full-stack software integrated with custom LLMs, RAG pipelines, advanced tracking analytics, conversion copywriting, and Cloudflare DDoS shielding."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "5000",
              "priceCurrency": "USD"
            }
          }
        ]
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Slf9UPbkkYdYz3P775gHAVNfyPNEoo_cXoYeS0LB_bU" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
