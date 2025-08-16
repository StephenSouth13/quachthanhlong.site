"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import type { Blog } from "@/types/blog"

interface BlogDetailClientProps {
  blog: Blog
}

const str = (value: string | { vi: string; en: string }, lang: "vi" | "en") =>
  typeof value === "string" ? value : value[lang] ?? ""

export function BlogDetailClient({ blog }: BlogDetailClientProps) {
  const { language } = useLanguage()

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {blog.image && (
        <Image
          src={blog.image}
          alt={str(blog.title, language)}
          width={800}
          height={400}
          className="rounded-xl object-cover w-full mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{str(blog.title, language)}</h1>
      <p className="text-gray-500 mb-6">
        {blog.publishedAt} · {blog.author}
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{str(blog.content, language)}</ReactMarkdown>
      </div>
    </article>
  )
}
