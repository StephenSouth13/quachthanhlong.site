"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider" // Giả sử đúng đường dẫn
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Blog } from "@/types/blog" // Giả sử type Blog có 'tags?: string[]'

/* ---------------- Helper ------------------ */
const getLocalizedString = (value: string | { vi: string; en: string }, lang: "vi" | "en") =>
  typeof value === "string" ? value : (value[lang] ?? "")

/* ---------------- Demo data - ĐÃ SỬA LỖI TRÙNG LẶP ------------------ */
const BLOGS: Blog[] = [
  {
    slug: "react-ts-guide",
    title: {
      vi: "Hướng dẫn xây dựng ứng dụng React với TypeScript",
      en: "Building React Applications with TypeScript Guide",
    },
    excerpt: {
      vi: "Tìm hiểu cách kết hợp React và TypeScript để tạo ra ứng dụng web mạnh mẽ.",
      en: "Learn how React & TypeScript combine to create powerful web apps.",
    },
    content: "...",
    author: "Quách Thành Long",
    publishedAt: "2024-07-15", // Ngày khác
    tags: ["React", "TypeScript", "Frontend"], // <-- Đã thêm
    readTime: 8,
    views: 1250,
    likes: 45,
    comments: 12,
    featured: true,
    image: "/blog/react-ts.png",
  },
  {
    slug: "flappy-bird-unity",
    title: {
      vi: "Flappy Bird Unity: Tạo game huyền thoại chỉ trong 1 giờ!",
      en: "Flappy Bird Unity: Build the Legendary Game in 1 Hour!",
    },
    excerpt: {
      vi: "Hướng dẫn chi tiết cách làm game Flappy Bird bằng Unity, kèm hình ảnh và mẹo tối ưu cho mọi lập trình viên.",
      en: "Step-by-step guide to making Flappy Bird in Unity, with images and pro tips for all developers.",
    },
    content: "...",
    author: "Quách Thành Long",
    publishedAt: "2024-05-22", // <-- Sửa: Ngày khác
    tags: ["GameDev", "Unity", "C#"], // <-- Đã thêm
    readTime: 12, // <-- Sửa: Thời gian đọc khác
    views: 3800, // <-- Sửa: Lượt xem khác
    likes: 152, // <-- Sửa: Lượt thích khác
    comments: 35, // <-- Sửa: Bình luận khác
    featured: false, // <-- Sửa: Để false cho đa dạng
    image: "/game/flappybird.png",
  },
]


/* ---------------- Component ------------------ */
interface BlogGridProps {
  selectedCategory?: string
  searchQuery?: string
}

export function BlogGrid({ selectedCategory = "All", searchQuery = "" }: BlogGridProps) {
  const { language } = useLanguage()
  const [liked, setLiked] = useState<Set<string>>(new Set())

  const posts = useMemo(() => {
    const qry = searchQuery.trim().toLowerCase()
    return BLOGS.filter((b) => {
      // SỬA LỖI LOGIC: Dùng `tags` thay vì `category` không tồn tại
      const categoryOK = selectedCategory === "All" || (b.tags ?? []).includes(selectedCategory)
      if (!categoryOK) return false

      const tagsText = (b.tags ?? []).join(" ").toLowerCase()
      const searchableText = `${getLocalizedString(b.title, language)} ${getLocalizedString(b.excerpt, language)} ${tagsText}`.toLowerCase()
      
      const queryOK = qry === "" || searchableText.includes(qry)
      
      return queryOK
    })
  }, [selectedCategory, searchQuery, language])

  if (posts.length === 0)
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-semibold">
          {language === "vi" ? "Không tìm thấy bài viết" : "No articles found"}
        </p>
        <p className="text-sm text-muted-foreground">
          {language === "vi" ? "Vui lòng thử từ khóa hoặc danh mục khác." : "Please try a different keyword or category."}
        </p>
      </div>
    )

  const formatDate = (dateString: string) => 
    new Date(dateString).toLocaleDateString(language === "vi" ? "vi-VN" : "en-US", {
      year: 'numeric', month: 'short', day: 'numeric'
    })

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          viewport={{ once: true }}
          className="group flex" // Thêm flex để Card co giãn
        >
          <Card className="h-full w-full bg-background/50 backdrop-blur-md border border-border/40 hover:border-purple-500/50 transition flex flex-col">
            <div className="relative">
              {post.featured && (
                <Badge className="absolute left-4 top-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {getLocalizedString({ vi: "Nổi bật", en: "Featured" }, language)}
                </Badge>
              )}

              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={getLocalizedString(post.title, language)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            <CardContent className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                {getLocalizedString(post.title, language)}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{getLocalizedString(post.excerpt, language)}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {(post.tags ?? []).slice(0, 3).map((t) => (
                  <Badge key={t} variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {post.readTime} {getLocalizedString({ vi: "phút đọc", en: "min read" }, language)}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setLiked((s) => {
                      const n = new Set(s);
                      n.has(post.slug) ? n.delete(post.slug) : n.add(post.slug);
                      return n;
                    })}
                    className={`flex items-center gap-1.5 text-xs transition-colors hover:text-red-500 ${liked.has(post.slug) ? "text-red-500" : "text-muted-foreground"}`}
                  >
                    <Heart className="w-4 h-4" />
                    {(post.likes ?? 0) + (liked.has(post.slug) ? 1 : 0)}
                  </button>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments ?? 0}
                  </div>
                </div>
                <Button asChild size="sm" variant="ghost" className="group/read">
                  <Link href={`/blog/${post.slug}`}>
                    {getLocalizedString({ vi: "Đọc tiếp", en: "Read More" }, language)}
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