"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function AboutHero() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Me",
      description: `I am Quách Thành Long – a multi-disciplinary developer with a foundation in technology, economics, and business analysis. From web projects, systems, games to academic research and investment, I always aim to build practical, effective and highly creative solutions.`,
      quote: "Technology gives me the tools – Economics gives me the vision.",
    },
    vi: {
      title: "Giới thiệu về tôi",
      description: `Tôi là Quách Thành Long – một nhà phát triển đa lĩnh vực với nền tảng về công nghệ, kinh tế và phân tích kinh doanh. Từ những dự án web, hệ thống, game cho đến nghiên cứu học thuật và đầu tư, tôi luôn hướng tới việc xây dựng các giải pháp thực tiễn, hiệu quả và mang tính sáng tạo cao.`,
      quote: "Công nghệ cho tôi công cụ – Kinh tế cho tôi tầm nhìn.",
    },
  }

  const currentContent = content[language]

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar Section */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-start"
>
  <div className="relative">
    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-2 shadow-2xl animate-pulse">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Avatar Image */}
        <img
          src="/long/long.png" // Đường dẫn ảnh avatar
          alt="Quách Thành Long Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* Floating particles around avatar */}
    <div className="absolute -inset-4">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  </div>
</motion.div>


          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-sora bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              {currentContent.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">{currentContent.description}</p>

            {/* Quote Section */}
            <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <blockquote className="text-xl font-medium italic text-foreground">"{currentContent.quote}"</blockquote>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-purple-400">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-pink-400">12+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
