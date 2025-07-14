import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsFilter } from "@/components/projects/projects-filter"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}
