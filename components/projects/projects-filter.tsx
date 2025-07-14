"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export function ProjectsFilter() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: language === "vi" ? "Tất cả" : "All", icon: "🌟" },
    { id: "web", label: "Web", icon: "🌐" },
    { id: "game", label: "Game", icon: "🎮" },
    { id: "ai", label: "AI", icon: "🤖" },
    { id: "cms", label: "CMS", icon: "📝" },
    { id: "investment", label: language === "vi" ? "Đầu tư" : "Investment", icon: "💰" },
  ]

  return (
    <section className="py-8 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-accent"
                  }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select defaultValue="recent">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">{language === "vi" ? "Mới nhất" : "Most Recent"}</SelectItem>
                <SelectItem value="popular">{language === "vi" ? "Phổ biến" : "Most Popular"}</SelectItem>
                <SelectItem value="complex">{language === "vi" ? "Phức tạp nhất" : "Most Complex"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}
