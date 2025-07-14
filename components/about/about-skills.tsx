"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function AboutSkills() {
  const { language } = useLanguage()

  const skillCategories = [
    {
      title: "Front-End",
      icon: "🎨",
      color: "from-blue-400 to-cyan-400",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Back-End",
      icon: "⚙️",
      color: "from-purple-400 to-pink-400",
      skills: ["Node.js", "PHP", "C#", "Rust", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: language === "vi" ? "Công cụ" : "Tools",
      icon: "🛠️",
      color: "from-green-400 to-blue-400",
      skills: ["Git", "Figma", "Postman", "Unity", "Godot", "Docker", "AWS"],
    },
    {
      title: language === "vi" ? "Phân tích" : "Analysis",
      icon: "📊",
      color: "from-orange-400 to-red-400",
      skills: ["Business Analysis", "Market Research", "Data Analysis", "Strategic Planning"],
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
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {language === "vi" ? "Kỹ năng chuyên môn" : "Technical Skills"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "vi"
              ? "Công nghệ và công cụ tôi sử dụng để tạo ra những giải pháp tuyệt vời"
              : "Technologies and tools I use to create amazing solutions"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs hover:bg-accent-foreground hover:text-accent transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
