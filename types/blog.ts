// types/blog.ts
export type Blog = {
  slug: string
  title: {
    vi: string
    en: string
  }
  excerpt: {
    vi: string
    en: string
  }
  content: string | { vi: string; en: string };
  author: string
  image?: string
  category?: string
  tags?: string[]
  publishedAt: string // thay cho "date"
  readTime: number
  views?: number
  comments?: number
  likes?: number
  featured?: boolean
}
export type BlogMetadata = {
  title: string
  description: string
  keywords?: string[]
  author?: string
  publishedAt?: string
  updatedAt?: string
  image?: string
  category?: string
  tags?: string[]
}