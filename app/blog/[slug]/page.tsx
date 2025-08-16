import { BlogDetailClient } from "./BlogDetailClient"
import { getPostBySlug } from "@/lib/blog"

interface Params {
  params: { slug: string }
}

export default async function BlogSlugPage({ params }: Params) {
  const post = await getPostBySlug(params.slug) // Sử dụng await

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
        <p>Không tìm thấy bài viết với đường dẫn này.</p>
      </div>
    )
  }

  return (
    <div>
      {/* BlogDetailClient là Client Component */}
      <BlogDetailClient
        blog={{
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt, // Thêm dòng này
          content: post.content,
          author: post.author,
          publishedAt: post.publishedAt,
          readTime: post.readTime,
          image: post.image,
          tags: post.tags,
          likes: post.likes,
          comments: post.comments,
          featured: post.featured,
        }}
      />
    </div>
  )
}