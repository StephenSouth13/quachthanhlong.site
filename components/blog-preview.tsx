"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import { CursorWrapper } from "@/components/cursor-wrapper"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: AI Integration",
    excerpt: "Exploring how artificial intelligence is reshaping the way we build and interact with web applications.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Web Development", "Future Tech"],
    slug: "future-web-development-ai",
  },
  {
    id: 2,
    title: "Game Development with Unity: Best Practices",
    excerpt: "Essential tips and techniques for creating engaging games with Unity engine and C# programming.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Unity", "Game Dev", "C#"],
    slug: "unity-game-development-practices",
  },
  {
    id: 3,
    title: "Investment Strategies in Tech Startups",
    excerpt: "Analyzing market trends and identifying promising opportunities in the technology sector.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Investment", "Startups", "Analysis"],
    slug: "tech-startup-investment-strategies",
  },
]

export function BlogPreview() {
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
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold font-sora">{t("blog.title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, business, and the intersection of innovation and strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CursorWrapper variant="card">
                <Card className="h-full bg-background/50 backdrop-blur-md border border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
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
            <Link href="/blog" className="flex items-center gap-2">
              {t("blog.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
