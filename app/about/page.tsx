import { AboutHero } from "@/components/about/about-hero"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutSkills } from "@/components/about/about-skills"
import { AboutExperience } from "@/components/about/about-experience"
import { AboutCTA } from "@/components/about/about-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutTimeline />
      <AboutSkills />
      <AboutExperience />
      <AboutCTA />
      <Footer />
    </main>
  )
}
