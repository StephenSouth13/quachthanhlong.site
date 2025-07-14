"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { BookOpen, TrendingUp, Lightbulb } from "lucide-react"

export function BlogHero() {
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <BookOpen className="w-12 h-12 text-green-400" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <TrendingUp className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Lightbulb className="w-12 h-12 text-yellow-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {language === "vi" ? "Blog Công nghệ & Kinh doanh" : "Tech & Business Blog"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === "vi"
              ? "Chia sẻ kiến thức sâu sắc về công nghệ, phân tích kinh doanh, phát triển game và chiến lược đầu tư"
              : "Sharing deep insights about technology, business analysis, game development and investment strategies"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Bài viết" : "Articles"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Lượt đọc" : "Readers"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400">6</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Chủ đề" : "Categories"}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-400">2</div>
              <div className="text-sm text-muted-foreground">{language === "vi" ? "Ngôn ngữ" : "Languages"}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
