"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Maximize, Users, Clock, Star } from "lucide-react"
import Image from "next/image"

export function GamesGrid() {
  const { language } = useLanguage()
  const [selectedGame, setSelectedGame] = useState<number | null>(null)

  const games = [
    {
      id: 1,
      title: "FLAPPY EVOLUTION: Space Shooter",
      description:
        language === "vi"
          ? "Tựa game web siêu gây nghiện hàng đầu kết hợp giữa Flappy Bird, bắn đĩa bay, và hành trình xuyên thời không!"
          : "The most addictive web game, combining Flappy Bird, UFO shooting, and a time-traveling adventure!",
      image: "/game/flappy_evolution.png",
      category: "strategy,jump",
      tags: ["Nextjs", "WebGL", "Strategy", ],
      playUrl: "https://flappy-evolution-game.vercel.app/",
      players: "1-4",
      duration: "30-60s",
      rating: 4.8,
      plays: 2150,
      featured: true,
    },
    {
      id: 2,
      title: "Puzzle Adventure Quest",
      description:
        language === "vi"
          ? "Game giải đố phiêu lưu với đồ họa đẹp mắt và gameplay cuốn hút. Khám phá thế giới bí ẩn!"
          : "Mind-bending puzzle adventure game with beautiful graphics and immersive gameplay. Explore mysterious worlds!",
      image: "/placeholder.svg?height=300&width=400",
      category: "casual",
      tags: ["Unity", "Mobile", "Puzzle", "Adventure"],
      playUrl: "#",
      players: "1",
      duration: "15-30 min",
      rating: 4.6,
      plays: 1890,
      featured: true,
    },
    {
      id: 3,
      title: "Math Learning Fun",
      description:
        language === "vi"
          ? "Game giáo dục toán học cho trẻ em với mini-games vui nhộn và hệ thống phần thưởng hấp dẫn."
          : "Educational math game for children with fun mini-games and engaging reward system.",
      image: "/placeholder.svg?height=300&width=400",
      category: "education",
      tags: ["Unity", "WebGL", "Education", "Kids"],
      playUrl: "#",
      players: "1",
      duration: "10-20 min",
      rating: 4.9,
      plays: 3200,
      featured: false,
    },
    {
      id: 4,
      title: "Neon Racing Circuit",
      description:
        language === "vi"
          ? "Game đua xe futuristic với hiệu ứng neon tuyệt đẹp, tốc độ cao và nhiều track thử thách."
          : "Futuristic racing game with stunning neon effects, high speed action and challenging tracks.",
      image: "/placeholder.svg?height=300&width=400",
      category: "casual",
      tags: ["Unity", "WebGL", "Racing", "Arcade"],
      playUrl: "#",
      players: "1-2",
      duration: "5-15 min",
      rating: 4.4,
      plays: 1650,
      featured: false,
    },
    {
      id: 5,
      title: "Tower Defense Ultimate",
      description:
        language === "vi"
          ? "Game phòng thủ tháp với nhiều loại tháp, quái vật và chiến lược đa dạng. Bảo vệ căn cứ của bạn!"
          : "Tower defense game with multiple tower types, monsters and diverse strategies. Defend your base!",
      image: "/placeholder.svg?height=300&width=400",
      category: "strategy",
      tags: ["Unity", "WebGL", "Tower Defense", "Strategy"],
      playUrl: "#",
      players: "1",
      duration: "20-40 min",
      rating: 4.7,
      plays: 2800,
      featured: true,
    },
    {
      id: 6,
      title: "Word Builder Academy",
      description:
        language === "vi"
          ? "Game học từ vựng tiếng Anh với gameplay thú vị, phù hợp cho mọi lứa tuổi học tập."
          : "English vocabulary learning game with engaging gameplay, suitable for all learning ages.",
      image: "/placeholder.svg?height=300&width=400",
      category: "education",
      tags: ["Unity", "WebGL", "Education", "Language"],
      playUrl: "#",
      players: "1",
      duration: "15-25 min",
      rating: 4.5,
      plays: 1420,
      featured: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Game Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {game.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                          onClick={() => setSelectedGame(game.id)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          {language === "vi" ? "Chơi ngay" : "Play Now"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center justify-between">
                            <span>{game.title}</span>
                            <Button variant="ghost" size="icon">
                              <Maximize className="w-4 h-4" />
                            </Button>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 bg-black rounded-lg flex items-center justify-center">
                          <div className="text-center text-white">
                            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-lg mb-2">Game Loading...</p>
                            <p className="text-sm opacity-70">
                              {language === "vi"
                                ? "Game sẽ được tải trong iframe WebGL"
                                : "Game will be loaded in WebGL iframe"}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-200">
                      {game.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{game.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{game.description}</p>

                  {/* Game Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {game.players}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {game.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      {game.plays}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Play Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 mt-auto"
                        onClick={() => setSelectedGame(game.id)}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {language === "vi" ? "🎮 Chơi ngay" : "🎮 Play Game"}
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Game Development CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 backdrop-blur-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {language === "vi" ? "Cần game tùy chỉnh?" : "Need a Custom Game?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "vi"
                ? "Tôi có thể phát triển game theo yêu cầu riêng của bạn với Unity hoặc Godot"
                : "I can develop custom games according to your specific requirements with Unity or Godot"}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {language === "vi" ? "⚙️ Đặt game tùy chỉnh" : "⚙️ Order Custom Game"}
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
