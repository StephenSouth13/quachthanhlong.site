import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { AudioProvider } from "@/components/audio-provider"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingChatbot } from "@/components/floating-chatbot"
import { AudioControls } from "@/components/audio-controls"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://qtl.dev"),
  title: {
    default: "Quách Thành Long - CTO | Investor | Web/Game Developer | Business Analyst",
    template: "%s | Quách Thành Long",
  },
  description:
    "Quách Thành Long - CTO-level talent, Investor, Web/Game Developer, and Business Analyst. Specializing in React/Next.js, Unity game development, business analysis, and tech startup investments in Vietnam.",
  keywords: [
    "Quách Thành Long",
    "CTO Vietnam",
    "Web Developer Ho Chi Minh City",
    "Game Developer Unity",
    "Business Analyst",
    "Tech Investor Vietnam",
    "React Developer",
    "Next.js Expert",
    "Startup Consultant",
    "VTC Academy",
    "UEH Graduate",
  ],
  authors: [{ name: "Quách Thành Long", url: "https://qtl.dev" }],
  creator: "Quách Thành Long",
  publisher: "Quách Thành Long",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
    url: "https://qtl.dev",
    siteName: "Quách Thành Long",
    title: "Quách Thành Long - CTO | Investor | Web/Game Developer | Business Analyst",
    description:
      "CTO-level talent passionate about technology, economics, and creating innovative solutions. Specializing in web development, game development, business analysis, and investment consulting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quách Thành Long - Technology Expert & Business Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quách Thành Long - CTO | Investor | Web/Game Developer | Business Analyst",
    description: "CTO-level talent passionate about technology, economics, and creating innovative solutions.",
    images: ["/og-image.jpg"],
    creator: "@qtl_dev",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://qtl.dev",
    languages: {
      "en-US": "https://qtl.dev/en",
      "vi-VN": "https://qtl.dev/vi",
    },
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Quách Thành Long",
              url: "https://qtl.dev",
              image: "https://qtl.dev/profile-image.jpg",
              sameAs: ["https://linkedin.com/in/qtl-dev", "https://github.com/qtl-dev", "https://facebook.com/qtl.dev"],
              jobTitle: "CTO & Business Analyst",
              worksFor: {
                "@type": "Organization",
                name: "MSC Center",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of Economics Ho Chi Minh City",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "VTC Academy",
                },
              ],
              knowsAbout: [
                "Web Development",
                "Game Development",
                "Business Analysis",
                "Investment Analysis",
                "React",
                "Next.js",
                "Unity",
                "JavaScript",
                "TypeScript",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ho Chi Minh City",
                addressCountry: "Vietnam",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${sora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AudioProvider>
              <div className="relative min-h-screen">
                <ParticleBackground />
                <div className="relative z-10">{children}</div>
                <FloatingChatbot />
                <AudioControls />
                <CustomCursor />
              </div>
            </AudioProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
