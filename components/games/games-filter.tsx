"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"

export function GamesFilter() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: language === "vi" ? "Tất cả" : "All", icon: "🎮" },
    { id: "webgl", label: "WebGL", icon: "🌐" },
    { id: "casual", label: "Casual", icon: "🎯" },
    { id: "strategy", label: language === "vi" ? "Chiến thuật" : "Strategy", icon: "🧠" },
    { id: "education", label: language === "vi" ? "Giáo dục" : "Education", icon: "📚" },
  ]

  return (
    <section className="py-8 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <motion.div key={filter.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
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
    </section>
  )
}
