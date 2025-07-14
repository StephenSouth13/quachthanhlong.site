"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function BlogFilter() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = [
    { id: "all", label: language === "vi" ? "Tất cả" : "All", icon: "📚" },
    { id: "ba", label: "Business Analysis", icon: "📊" },
    { id: "dev", label: "Development", icon: "💻" },
    { id: "game", label: "Game Dev", icon: "🎮" },
    { id: "research", label: language === "vi" ? "Nghiên cứu" : "Research", icon: "🔬" },
    { id: "investment", label: language === "vi" ? "Đầu tư" : "Investment", icon: "💰" },
    { id: "product", label: language === "vi" ? "Sản phẩm" : "Product", icon: "🚀" },
  ]

  return (
    <section className="py-8 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={language === "vi" ? "Tìm kiếm bài viết..." : "Search articles..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.div key={filter.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                      : "hover:bg-accent"
                  }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
