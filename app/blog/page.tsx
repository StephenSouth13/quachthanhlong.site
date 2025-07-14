import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFilter } from "@/components/blog/blog-filter"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Quách Thành Long | Tech Insights & Business Analysis",
  description:
    "Explore in-depth articles about technology, business analysis, game development, and investment strategies by Quách Thành Long - CTO and Business Analyst.",
  keywords: "tech blog, business analysis, game development, investment, web development, AI, startup, Vietnam tech",
  openGraph: {
    title: "Blog - Quách Thành Long | Tech Insights & Business Analysis",
    description:
      "Explore in-depth articles about technology, business analysis, game development, and investment strategies.",
    url: "https://quachthanhlong.com/blog",
    siteName: "Quách Thành Long",
    images: [
      {
        url: "https://quachthanhlong.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Quách Thành Long Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Quách Thành Long | Tech Insights & Business Analysis",
    description:
      "Explore in-depth articles about technology, business analysis, game development, and investment strategies.",
    images: ["https://quachthanhlong.com/og-blog.jpg"],
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogFilter />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
    </main>
  )
}
