import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Quách Thành Long | Get In Touch",
  description:
    "Contact Quách Thành Long for web development, business analysis, game development projects, or investment opportunities. Based in Ho Chi Minh City, Vietnam.",
  keywords: "contact, web development, business analysis, game development, investment, Ho Chi Minh City, Vietnam",
  openGraph: {
    title: "Contact - Quách Thành Long | Get In Touch",
    description:
      "Contact Quách Thành Long for web development, business analysis, game development projects, or investment opportunities.",
    url: "https://qtl.dev/contact",
    siteName: "Quách Thành Long",
    images: [
      {
        url: "https://qtl.dev/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Quách Thành Long",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Quách Thành Long | Get In Touch",
    description:
      "Contact Quách Thành Long for web development, business analysis, game development projects, or investment opportunities.",
    images: ["https://qtl.dev/og-contact.jpg"],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
      <Footer />
    </main>
  )
}
