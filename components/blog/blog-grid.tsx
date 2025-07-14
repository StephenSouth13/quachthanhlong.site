"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/**
 * 1️⃣  IMPORTANT
 * ──────────────────────────────────────────────
 * Every string field can now be either:
 * { vi: string; en: string }  OR  plain string.
 * The helpers below make sure we **always** end up with a string,
 * so .toLowerCase() / .includes() never crash again.
 */
const str = (value: string | { vi: string; en: string }, lang: "vi" | "en") =>
  typeof value === "string" ? value : (value[lang] ?? "")

/* ---------------------------------------------------------- */
/*  ⚡ Demo data – replace with real API data when ready       */
/* ---------------------------------------------------------- */
import type { Blog } from "@/types/blog"

const BLOGS: Blog[] = [
  {
    id: 1,
    title: {
      vi: "Hướng dẫn xây dựng ứng dụng React với TypeScript",
      en: "Building React Applications with TypeScript Guide",
    },
    excerpt: {
      vi: "Tìm hiểu cách kết hợp React và TypeScript để tạo ra ứng dụng web mạnh mẽ.",
      en: "Learn how React & TypeScript combine to create powerful web apps.",
    },
    category: "Development",
    tags: ["React", "TypeScript", "Frontend"],
    author: "Quách Thành Long",
    publishedAt: "2024-01-15",
    readTime: 8,
    views: 1250,
    likes: 45,
    comments: 12,
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  /* … (bỏ bớt cho gọn – giữ nguyên cấu trúc như bài phía trên) … */
]

/* ---------------------------------------------------------- */
/*  🖼️  Component                                             */
/* ---------------------------------------------------------- */
interface BlogGridProps {
  selectedCategory?: string
  searchQuery?: string
}
export function BlogGrid({ selectedCategory = "All", searchQuery = "" }: BlogGridProps) {
  const { language } = useLanguage() // "vi" | "en"
  const [liked, setLiked] = useState<Set<number>>(new Set())

  /* -------- Filter / Search – all string ops are safe now --- */
  const posts = useMemo(() => {
    const qry = searchQuery.trim().toLowerCase()
    return BLOGS.filter((b) => {
      const catOK = selectedCategory === "All" || b.category === selectedCategory
      const text = `${str(b.title, language)} ${str(b.excerpt, language)} ${b.tags.join(" ")}`.toLowerCase()
      const qOK = qry === "" || text.includes(qry)
      return catOK && qOK
    })
  }, [selectedCategory, searchQuery, language])

  if (posts.length === 0)
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-semibold">{language === "vi" ? "Không tìm thấy bài viết" : "No articles found"}</p>
      </div>
    )

  const fmt = (d: string) => new Date(d).toLocaleDateString(language === "vi" ? "vi-VN" : "en-US")

  /* ---------------------------- UI ------------------------- */
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, i) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="h-full bg-background/50 backdrop-blur-md border border-border/40 hover:border-purple-500/50 transition">
            {/* Featured badge */}
            {post.featured && (
              <Badge className="absolute left-4 top-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                {language === "vi" ? "Nổi bật" : "Featured"}
              </Badge>
            )}

            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={str(post.title, language)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Body */}
            <CardContent className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                {str(post.title, language)}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{str(post.excerpt, language)}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {fmt(post.publishedAt)}
                  <Clock className="w-3 h-3 ml-3" />
                  {post.readTime} {language === "vi" ? "phút" : "min"}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-3 h-3" />
                  {post.views}
                  <MessageCircle className="w-3 h-3 ml-2" />
                  {post.comments}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setLiked((s) => {
                        const n = new Set(s)
                        n.has(post.id) ? n.delete(post.id) : n.add(post.id)
                        return n
                      })
                    }
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      liked.has(post.id) ? "text-red-500" : "text-muted-foreground"
                    }`}
                  >
                    <Heart className="w-3 h-3" />
                    {post.likes + (liked.has(post.id) ? 1 : 0)}
                  </button>
                  <button className="text-muted-foreground text-xs flex gap-1">
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
                <Button asChild size="sm" variant="ghost" className="group/read">
                  <Link href={`/blog/${post.id}`}>
                    {language === "vi" ? "Đọc tiếp" : "Read More"}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/read:translate-x-1 transition" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.article>
      ))}
    </div>
  )
}
