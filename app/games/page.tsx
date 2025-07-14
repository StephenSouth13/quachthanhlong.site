import { GamesHero } from "@/components/games/games-hero"
import { GamesFilter } from "@/components/games/games-filter"
import { GamesGrid } from "@/components/games/games-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GamesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GamesHero />
      <GamesFilter />
      <GamesGrid />
      <Footer />
    </main>
  )
}
