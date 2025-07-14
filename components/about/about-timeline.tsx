"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function AboutTimeline() {
  const { language } = useLanguage()

  const education = [
    {
      period: "2021–2024",
      degree: language === "vi" ? "Cử nhân Quản trị Nhân sự" : "Bachelor of Human Resource Management",
      school: language === "vi" ? "ĐH Kinh tế TP.HCM (UEH)" : "University of Economics Ho Chi Minh City (UEH)",
      logo: "🎓",
      color: "from-blue-400 to-cyan-400",
    },
    {
      period: "2024–2027",
      degree: language === "vi" ? "Cử nhân Kinh tế Đầu tư" : "Bachelor of Investment Economics",
      school: "UEH",
      logo: "💼",
      color: "from-purple-400 to-pink-400",
    },
    {
      period: "2024–2026",
      degree: language === "vi" ? "Cử nhân Phát triển Game" : "Bachelor of Game Development",
      school: "VTC Academy",
      logo: "🎮",
      color: "from-green-400 to-blue-400",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {language === "vi" ? "Hành trình học tập" : "Educational Journey"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "vi"
              ? "Kiến thức đa lĩnh vực từ kinh tế, công nghệ đến phát triển game"
              : "Multidisciplinary knowledge from economics, technology to game development"}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg z-10`}
                ></div>

                {/* Content card */}
                <div className="ml-20 flex-1">
                  <Card className="p-6 bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`text-3xl p-3 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20`}>
                        {item.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-blue-400">{item.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{item.school}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
