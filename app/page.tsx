import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { ProjectsPreview } from "@/components/projects-preview"
import { GamesPreview } from "@/components/games-preview"
import { BlogPreview } from "@/components/blog-preview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <GamesPreview />
      <BlogPreview />
      <Footer />
    </main>
  )
}
