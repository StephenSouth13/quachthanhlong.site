"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Gamepad2, Zap, Trophy } from "lucide-react"

export function GamesHero() {
  const { language } = useLanguage()

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Gamepad2 className="w-12 h-12 text-purple-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Zap className="w-12 h-12 text-yellow-400" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Trophy className="w-12 h-12 text-orange-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            {language === "vi" ? "Kho Game của tôi" : "My Game Collection"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === "vi"
              ? "Khám phá những trò chơi tương tác được phát triển bằng Unity và Godot - chơi ngay trên trình duyệt!"
              : "Explore interactive games developed with Unity and Godot - play directly in your browser!"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400">12+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Game" : "Games"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-pink-400">5K+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Lượt chơi" : "Plays"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-400">3</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Thể loại" : "Genres"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400">2</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Engine" : "Engines"}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
