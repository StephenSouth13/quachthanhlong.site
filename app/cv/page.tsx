import { CVHero } from "@/components/cv/cv-hero"
import { CVSidebar } from "@/components/cv/cv-sidebar"
import { CVTimeline } from "@/components/cv/cv-timeline"
import { CVActions } from "@/components/cv/cv-actions"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CVPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CVHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <CVSidebar />
          <div className="lg:col-span-3">
            <CVTimeline />
          </div>
        </div>
      </div>
      <CVActions />
      <Footer />
    </main>
  )
}
