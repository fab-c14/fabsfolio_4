import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabsfolio.me"),
  title: "Faisal Ahmad - Full Stack Developer",
  description: "Faisal Ahmad is a Full Stack Developer specializing in building high-performance, secure, and scalable web applications.",
  applicationName: "Faisal Ahmad Portfolio",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Faisal Ahmad", "Portfolio"],
  authors: [{ name: "Faisal Ahmad", url: "https://fabsfolio.me" }],
  creator: "Faisal Ahmad",
  publisher: "Faisal Ahmad",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://fabsfolio.me",
    title: "Faisal Ahmad - Full Stack Developer",
    description: "Building high-performance, secure, and scalable web applications.",
    siteName: "Faisal Ahmad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Ahmad - Full Stack Developer",
    description: "Building high-performance, secure, and scalable web applications.",
    creator: "@yourtwitterhandle", // You can update this
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Slf9UPbkkYdYz3P775gHAVNfyPNEoo_cXoYeS0LB_bU" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
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
