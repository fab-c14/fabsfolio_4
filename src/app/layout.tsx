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
  metadataBase: new URL("https://fabsfolio.me"),
  title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
  description: "Faisal Ahmad Bhat is the best Full Stack Developer and AI Engineer in Jammu and Kashmir (Srinagar & Anantnag). Expert in Generative AI, SaaS, LLM integrations, and custom E-commerce web applications.",
  applicationName: "Faisal Ahmad Bhat Portfolio",
  keywords: [
    "Faisal Ahmad Bhat", 
    "Best Web Developer in Jammu and Kashmir", 
    "Best Web Developer in Srinagar", 
    "Best Developer in Anantnag", 
    "Full Stack Developer Jammu and Kashmir", 
    "AI Engineer Jammu and Kashmir", 
    "Generative AI Developer Srinagar", 
    "SaaS Developer Anantnag",
    "Next.js Developer Srinagar",
    "Freelance Web Developer Jammu and Kashmir"
  ],
  authors: [{ name: "Faisal Ahmad Bhat", url: "https://fabsfolio.me" }],
  creator: "Faisal Ahmad Bhat",
  publisher: "Faisal Ahmad Bhat",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://fabsfolio.me",
    title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
    description: "Top-rated Full Stack Developer & AI Engineer based in Jammu and Kashmir, Srinagar, and Anantnag. Building high-performance, secure, and scalable web applications.",
    siteName: "Faisal Ahmad Bhat Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Ahmad Bhat | Best Full Stack Developer & AI Engineer in Jammu and Kashmir",
    description: "Top-rated Full Stack Developer & AI Engineer based in Jammu & Kashmir. Specialized in Gen AI, custom LLMs, SaaS, and E-commerce.",
    creator: "@fab_c14",
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
      "@type": "Person",
      "name": "Faisal Ahmad Bhat",
      "alternateName": "Faisal Ahmad",
      "url": "https://fabsfolio.me",
      "jobTitle": "Full Stack Web Developer & AI Engineer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Anantnag",
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
      "description": "Faisal Ahmad Bhat is the premier Full Stack Developer and AI Engineer in Jammu and Kashmir, Srinagar, and Anantnag. He specializes in SaaS development, generative AI integrations, LLM workflows, and custom e-commerce sites.",
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
      "image": "https://fabsfolio.me/profile.png",
      "@id": "https://fabsfolio.me/#service",
      "url": "https://fabsfolio.me",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Anantnag",
        "addressRegion": "Jammu and Kashmir",
        "postalCode": "192101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.7297",
        "longitude": "75.1498"
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
        },
        {
          "@type": "AdministrativeArea",
          "name": "Anantnag"
        }
      ],
      "description": "Faisal Ahmad Bhat offers the best freelance full stack web development and AI engineering services in Jammu and Kashmir. Specialized in Next.js, Gen AI integration, custom LLM solutions, SaaS, and E-commerce websites."
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
