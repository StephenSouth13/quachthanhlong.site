"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, MessageCircle } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  const { language } = useLanguage()

  const achievements = [
    {
      title: language === "vi" ? "Giải Nhất Học bổng Tài năng" : "First Prize Talent Scholarship",
      organization: "VTC Academy",
      icon: "🏆",
      color: "from-yellow-400 to-orange-400",
    },
    {
      title: language === "vi" ? "Top 3 Business Analyst" : "Top 3 Business Analyst",
      organization: "BAC Competition",
      icon: "🥉",
      color: "from-orange-400 to-red-400",
    },
    {
      title: language === "vi" ? "Vô địch Marathon VSM (42km)" : "VSM Marathon Champion (42km)",
      organization: "Vietnam Sports Marathon",
      icon: "🏃‍♂️",
      color: "from-green-400 to-blue-400",
    },
    {
      title: language === "vi" ? "Pacer các giải lớn" : "Pacer for Major Races",
      organization: language === "vi" ? "Các giải chạy quốc gia" : "National Running Events",
      icon: "⏱️",
      color: "from-blue-400 to-purple-400",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {language === "vi" ? "Thành tích & Giải thưởng" : "Achievements & Awards"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "vi"
                ? "Những cột mốc đáng nhớ trong hành trình phát triển bản thân"
                : "Memorable milestones in my personal development journey"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 text-center bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm leading-tight">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.organization}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-md text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === "vi" ? "Hãy kết nối với tôi!" : "Let's Connect!"}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "vi"
                ? "Tôi luôn sẵn sàng thảo luận về các dự án thú vị, cơ hội hợp tác hoặc đơn giản là trò chuyện về công nghệ."
                : "I'm always ready to discuss exciting projects, collaboration opportunities, or simply chat about technology."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/cv" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  {language === "vi" ? "📄 Xem CV PDF" : "📄 View CV PDF"}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:bg-accent bg-transparent transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {language === "vi" ? "🤖 Chatbot hỏi về tôi" : "🤖 Ask Chatbot About Me"}
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
