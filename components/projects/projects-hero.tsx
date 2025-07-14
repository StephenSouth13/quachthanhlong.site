"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Code, Rocket, Zap } from "lucide-react"

export function ProjectsHero() {
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
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Rocket className="w-12 h-12 text-purple-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Zap className="w-12 h-12 text-yellow-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {language === "vi" ? "Dự án của tôi" : "My Projects"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === "vi"
              ? "Khám phá những giải pháp sáng tạo từ web development, AI, game development đến business analysis"
              : "Explore innovative solutions from web development, AI, game development to business analysis"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400">25+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Dự án" : "Projects"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400">8</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Công nghệ" : "Technologies"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400">12+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Khách hàng" : "Clients"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-pink-400">5+</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Năm kinh nghiệm" : "Years Experience"}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
