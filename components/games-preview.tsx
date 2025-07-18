"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CursorWrapper } from "@/components/cursor-wrapper"

const games = [
 {
  id: 1,
  title: "Dragon Keeper",
  description: "Game nuôi rồng fantasy với PvP, tiến hóa & giao diện đẹp mắt. Built with Next.js + Tailwind.",
  image: "/game/dragon-keeper-preview.png",
  tags: ["Next.js", "Fantasy", "Game UI", "PvP", "Tailwind"],
  playUrl: "https://dragon-keeper-game.vercel.app/",
  target: "_blank", // 👈 thêm dòng này
},

  {
  id: 2,
  title: "Cosmic Emotion Letter",
  description: "Emotional space-themed letter writing game with beautiful UI and healing gameplay.",
  image: "/game/cosmic-emotion-letter-preview.png", // bạn nhớ tạo hình preview ở đúng path này
  tags: ["Next.js", "Emotional", "Cosmic", "Letter", "Game"],
  playUrl: "https://cosmic-emotion-letter-game.vercel.app/play",
},

]

export function GamesPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold font-sora">{t("games.title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive experiences crafted with Unity and modern game development techniques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CursorWrapper variant="card">
                <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                        <Play className="w-5 h-5 mr-2" />
                        Play Now
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{game.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Link href={game.playUrl} className="flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        Play Game
                      </Link>
                    </Button>
                  </div>
                </Card>
              </CursorWrapper>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-2 hover:bg-accent bg-transparent">
            <Link href="/games" className="flex items-center gap-2">
              {t("games.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
