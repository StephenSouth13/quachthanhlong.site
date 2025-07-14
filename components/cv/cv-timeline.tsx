"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { Calendar, GraduationCap, Briefcase } from "lucide-react"

export function CVTimeline() {
  const { language } = useLanguage()

  const items = [
    {
      type: "edu",
      period: "2021–2024",
      title: language === "vi" ? "Cử nhân Quản trị Nhân sự – UEH" : "B.Sc. Human Resource Management – UEH",
    },
    {
      type: "edu",
      period: "2024–2027",
      title: language === "vi" ? "Cử nhân Kinh tế Đầu tư – UEH" : "B.Sc. Investment Economics – UEH",
    },
    {
      type: "edu",
      period: "2024–2026",
      title: language === "vi" ? "Cử nhân Phát triển Game – VTC Academy" : "B.Sc. Game Development – VTC Academy",
    },
    {
      type: "exp",
      period: "2025–Present",
      title: language === "vi" ? "Trưởng phòng CNTT – MSC" : "Head of IT Department – MSC",
    },
    {
      type: "exp",
      period: "2024–Present",
      title: "Web Dev & Investment Analyst – MSC",
    },
    {
      type: "exp",
      period: "2023",
      title: language === "vi" ? "BA thực tập – BAC" : "Business Analyst Intern – BAC",
    },
    {
      type: "exp",
      period: "2024",
      title: "Strategic Advisor – Galaxy English",
    },
  ]

  return (
    <section className="space-y-8">
      {items.map((item, idx) => {
        const Icon = item.type === "edu" ? GraduationCap : Briefcase
        const color = item.type === "edu" ? "from-blue-400 to-cyan-400" : "from-purple-400 to-pink-400"

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <Card className="p-6 flex gap-4 bg-background/50 backdrop-blur-md border border-border/50">
              <div className={`p-3 rounded-full bg-gradient-to-r ${color} text-white flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>
                <h4 className="font-semibold">{item.title}</h4>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </section>
  )
}
