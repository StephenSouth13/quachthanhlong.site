"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Mail, Phone, MessageCircle } from "lucide-react"

export function ContactHero() {
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
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Mail className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <MessageCircle className="w-12 h-12 text-green-400" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Phone className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            {language === "vi" ? "Liên hệ với tôi" : "Get In Touch"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === "vi"
              ? "Sẵn sàng thảo luận về dự án mới, cơ hội hợp tác hoặc đơn giản là trò chuyện về công nghệ và kinh doanh"
              : "Ready to discuss new projects, collaboration opportunities, or simply chat about technology and business"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-blue-400">24h</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Phản hồi nhanh" : "Quick Response"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-green-400">100+</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Dự án tư vấn" : "Consulting Projects"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-purple-400">5+</div>
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
