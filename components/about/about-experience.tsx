"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function AboutExperience() {
  const { language } = useLanguage()

  const experiences = [
    {
      title: language === "vi" ? "Trưởng phòng Công nghệ thông tin" : "IT Department Head",
      company: "Trung tâm MSC",
      period: "2025 – " + (language === "vi" ? "nay" : "Present"),
      location: "Ho Chi Minh City",
      description:
        language === "vi"
          ? "Quản lý và phát triển hệ thống công nghệ thông tin, dẫn dắt đội ngũ kỹ thuật, triển khai các dự án số hóa."
          : "Managing and developing IT systems, leading technical teams, implementing digitalization projects.",
      tags: ["Leadership", "System Architecture", "Team Management"],
      color: "from-blue-500 to-purple-500",
      icon: "💼",
    },
    {
      title: "Web Dev & Investment Analyst",
      company: "MSC",
      period: "2024 – " + (language === "vi" ? "nay" : "Present"),
      location: "Ho Chi Minh City",
      description:
        language === "vi"
          ? "Phát triển ứng dụng web, phân tích thị trường đầu tư, nghiên cứu và đánh giá các cơ hội kinh doanh."
          : "Developing web applications, analyzing investment markets, researching and evaluating business opportunities.",
      tags: ["Web Development", "Investment Analysis", "Market Research"],
      color: "from-purple-500 to-pink-500",
      icon: "📈",
    },
    {
      title: language === "vi" ? "BA thực tập" : "Business Analyst Intern",
      company: "BAC",
      period: "2023",
      location: "Ho Chi Minh City",
      description:
        language === "vi"
          ? "Phân tích quy trình kinh doanh, thu thập và phân tích yêu cầu, hỗ trợ tối ưu hóa hoạt động doanh nghiệp."
          : "Analyzing business processes, gathering and analyzing requirements, supporting business operation optimization.",
      tags: ["Business Analysis", "Process Optimization", "Requirements Gathering"],
      color: "from-green-500 to-blue-500",
      icon: "📊",
    },
    {
      title: "Strategic Advisor",
      company: "Galaxy English",
      period: "2024",
      location: "Ho Chi Minh City",
      description:
        language === "vi"
          ? "Tư vấn chiến lược phát triển, phân tích thị trường giáo dục, đề xuất giải pháp công nghệ."
          : "Strategic development consulting, education market analysis, technology solution proposals.",
      tags: ["Strategic Planning", "Education Technology", "Consulting"],
      color: "from-orange-500 to-red-500",
      icon: "🎯",
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
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {language === "vi" ? "Kinh nghiệm làm việc" : "Work Experience"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "vi"
              ? "Hành trình phát triển sự nghiệp từ thực tập đến vị trí lãnh đạo"
              : "Career development journey from internship to leadership positions"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`text-2xl p-3 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
