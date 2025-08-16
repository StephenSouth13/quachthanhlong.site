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
  title: "ThinkShift",
  description:
    language === "vi"
      ? "Nền tảng chuyển đổi tư duy giúp cá nhân và tổ chức khai phá năng lực vượt trội trong Kỷ nguyên Số. ThinkShift kết hợp công nghệ phân tích dữ liệu, trí tuệ nhân tạo và các phương pháp thống kê tiên tiến để cung cấp báo cáo trực quan, hỗ trợ ra quyết định chiến lược."
      : "A mindset-shifting platform empowering individuals and organizations to unlock their full potential in the Digital Era. ThinkShift integrates data analytics, artificial intelligence, and advanced statistical methods to deliver insightful reports and guide strategic decision-making.",
  image: "/project/ThinkShift.png",
  tags: ["Next.js", "Python", "Analytics", "Statistics"],
  github: "https://github.com/StephenSouth13/thinkshift-vietnam",
  demo: "https://thinkshift-vietnam.vercel.app/",
  date: "2025-06-13",
  team: 3,
  views: 1250,
  featured: true,
},
{
  id: 2,
  title: "MSC",
  description:
    language === "vi"
      ? "Hệ thống đào tạo và phát triển kỹ năng chuyên nghiệp, kết hợp công nghệ web hiện đại để quản lý khóa học, giảng viên, và học viên một cách tối ưu. MSC hướng tới việc nâng cao năng lực cá nhân và doanh nghiệp thông qua nội dung chất lượng, giao diện thân thiện và trải nghiệm học tập linh hoạt."
      : "A professional training and skills development system that leverages modern web technologies to efficiently manage courses, instructors, and learners. MSC is designed to enhance both individual and corporate capabilities through high-quality content, an intuitive interface, and a flexible learning experience.",
  image: "/project/msc.png",
  tags: ["Next.js", "GoLang", "UI", "Figma"],
  github: "https://github.com/StephenSouth13/MSC_REBUILD",
  demo: "https://msc-rebuild.vercel.app/",
  date: "2025-03",
  team: 10,
  views: 890,
  featured: true,
},
{
  id: 3,
  title: "Fragments of Memory Game",
  description:
    language === "vi"
      ? "Trò chơi chữa lành mang phong cách nghệ thuật, nơi người chơi khám phá một thế giới đầy ký ức và cảm xúc. 'Fragments of Memory' kết hợp gameplay nhẹ nhàng, âm nhạc sâu lắng và hình ảnh tinh tế để mang lại trải nghiệm thư giãn và ý nghĩa."
      : "An artistic healing game where players explore a world filled with memories and emotions. 'Fragments of Memory' blends gentle gameplay, soothing music, and delicate visuals to create a relaxing and meaningful experience.",
  image: "/project/Fragments of Memory.png",
  tags: ["Unity", "C#", "WebGL", "Mobile"],
  github: "https://github.com/StephenSouth13/Fragments-of-Memory_Game",
  demo: "https://website-the-next-generation-o323.vercel.app/",
  date: "2023-12",
  team: 1,
  views: 650,
  featured: true,
},

    {
      id: 4,
      title: "CRM Company",
      description:
        language === "vi"
          ? "CMS linh hoạt với editor WYSIWYG, quản lý media, SEO optimization và multi-language support."
          : "Flexible CMS with WYSIWYG editor, media management, SEO optimization and multi-language support.",
      image: "/project/LifeOS.png",
      category: "cms",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "TypeScript"],
      github: "https://github.com/StephenSouth13/Front_End_Self-Working_System",
      demo: "https://front-end-self-working-system.vercel.app/",
      date: "2024-12",
      team: 1,
      views: 1020,
      featured: false,
    },
    {
      id: 5,
      title: "S17 Trading - Advanced Crypto Trading & Investment Platform",
      description:
        language === "vi"
          ? "S17 Trading là một nền tảng giao dịch và đầu tư tiền điện tử thế hệ mới, được thiết kế cho cả người mới bắt đầu lẫn các nhà giao dịch chuyên nghiệp. Với giao diện trực quan, các công cụ toàn diện và phân tích mạnh mẽ, S17 Trading cung cấp mọi thứ bạn cần để thành công trên thị trường crypto."
          : "S17 Trading is a next-generation cryptocurrency trading and investment platform designed for both beginners and professional traders. With its intuitive interface, comprehensive tools, and powerful analytics, S17 Trading provides everything you need to succeed in the crypto market.",
      image: "/project/S17.png",
      category: "investment",
      tags: ["React", "Node.js", "Redis", "Chart.js", "WebSocket"],
      github: "https://github.com/StephenSouth13/s17-trading",
      demo: "s17-trading.vercel.app",
      date: "2024-01",
      team: 2,
      views: 780,
      featured: true,
    },
    {
      id: 6,
  title:"🏛️ Martyrs Memorial Website",
      description:
        language === "vi"
          ? "Website tưởng niệm liệt sĩ hiện đại với sơ đồ mộ tương tác, thư viện ảnh nghĩa trang, tìm kiếm thông minh và hệ thống CMS quản lý nội dung. Được xây dựng với React, TypeScript, Tailwind CSS và Framer Motion."
          : "A modern memorial website for martyrs featuring an interactive grave layout, cemetery photo gallery, smart search, and a CMS content management system. Built with React, TypeScript, Tailwind CSS, and Framer Motion.",
      image: "/project/VBmemorial.png",
          category: "web",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "CMS"],
      github: "#",
      demo: "https://vinh-bao-memorial-ver32.onrender.com/",
      date: "2025-05",
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
