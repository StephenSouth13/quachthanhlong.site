"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsGrid() {
  const { language } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        language === "vi"
          ? "Nền tảng thương mại điện tử hoàn chỉnh với React, Node.js và MongoDB. Tích hợp thanh toán, quản lý kho và analytics."
          : "Complete e-commerce platform with React, Node.js and MongoDB. Integrated payments, inventory management and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "#",
      demo: "#",
      date: "2024-01",
      team: 3,
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description:
        language === "vi"
          ? "Dashboard phân tích kinh doanh với machine learning insights, dự đoán xu hướng và báo cáo tự động."
          : "Business analytics dashboard with machine learning insights, trend prediction and automated reporting.",
      image: "/placeholder.svg?height=300&width=400",
      category: "ai",
      tags: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      date: "2024-02",
      team: 2,
      views: 890,
      featured: true,
    },
    {
      id: 3,
      title: "Unity Game Framework",
      description:
        language === "vi"
          ? "Framework phát triển game Unity tùy chỉnh với hệ thống module, asset management và deployment tự động."
          : "Custom Unity game development framework with modular system, asset management and automated deployment.",
      image: "/placeholder.svg?height=300&width=400",
      category: "game",
      tags: ["Unity", "C#", "WebGL", "Mobile", "CI/CD"],
      github: "#",
      demo: "#",
      date: "2023-12",
      team: 1,
      views: 650,
      featured: false,
    },
    {
      id: 4,
      title: "Content Management System",
      description:
        language === "vi"
          ? "CMS linh hoạt với editor WYSIWYG, quản lý media, SEO optimization và multi-language support."
          : "Flexible CMS with WYSIWYG editor, media management, SEO optimization and multi-language support.",
      image: "/placeholder.svg?height=300&width=400",
      category: "cms",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "TypeScript"],
      github: "#",
      demo: "#",
      date: "2024-03",
      team: 2,
      views: 420,
      featured: false,
    },
    {
      id: 5,
      title: "Investment Portfolio Tracker",
      description:
        language === "vi"
          ? "Ứng dụng theo dõi danh mục đầu tư với real-time data, phân tích rủi ro và báo cáo hiệu suất."
          : "Investment portfolio tracking app with real-time data, risk analysis and performance reporting.",
      image: "/placeholder.svg?height=300&width=400",
      category: "investment",
      tags: ["React", "Node.js", "Redis", "Chart.js", "WebSocket"],
      github: "#",
      demo: "#",
      date: "2024-01",
      team: 2,
      views: 780,
      featured: true,
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description:
        language === "vi"
          ? "Ứng dụng chat real-time với video call, file sharing, encryption và group management."
          : "Real-time chat application with video calls, file sharing, encryption and group management.",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      tags: ["Socket.io", "WebRTC", "Express", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
      date: "2023-11",
      team: 3,
      views: 920,
      featured: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.github}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.team} {language === "vi" ? "người" : "people"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.views}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Link href={project.github} className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                      <Link href={project.demo} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-accent bg-transparent transition-all duration-300"
          >
            {language === "vi" ? "Xem thêm dự án" : "Load More Projects"}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
