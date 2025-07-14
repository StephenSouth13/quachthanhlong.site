"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CursorWrapper } from "@/components/cursor-wrapper"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    description: "Business intelligence dashboard with machine learning insights",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Game Development Framework",
    description: "Custom Unity framework for rapid game development",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Unity", "C#", "WebGL", "Mobile"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, AI, and game creation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CursorWrapper variant="card">
                <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
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
              </CursorWrapper>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-2 hover:bg-accent bg-transparent">
            <Link href="/projects" className="flex items-center gap-2">
              {t("projects.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
