// lib/blog.ts
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import type { Blog } from "@/types/blog"

const postsDirectory = path.join(process.cwd(), "data/blog")

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getAllPosts(): Promise<Blog[]> {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)
      const htmlContent = await markdownToHtml(content)

      return {
        slug,
        title: { vi: data.title_vi || data.title, en: data.title_en || data.title },
        excerpt: { vi: data.excerpt_vi || "", en: data.excerpt_en || "" },
        content: { vi: htmlContent, en: htmlContent },
        author: data.author || "Unknown",
        publishedAt: data.date || new Date().toISOString(),
        image: data.image || null,
        tags: data.tags || [],
        readTime: data.readTime || Math.ceil(content.split(" ").length / 200),
        likes: data.likes || 0,
        comments: data.comments || 0,
        featured: data.featured || false,
      } as Blog
    })
  )

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Blog | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: { vi: data.title_vi || data.title, en: data.title_en || data.title },
    excerpt: { vi: data.excerpt_vi || "", en: data.excerpt_en || "" },
    content: { vi: content, en: content },
    author: data.author || "Unknown",
    publishedAt: typeof data.date === "string" ? data.date : new Date().toISOString(),
    image: data.image || null,
    tags: data.tags || [],
    readTime: data.readTime || Math.ceil(content.split(" ").length / 200),
    likes: data.likes || 0,
    comments: data.comments || 0,
    featured: data.featured || false,
  }
}
