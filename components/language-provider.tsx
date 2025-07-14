"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.games": "Games",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.name": "Quách Thành Long",
    "hero.tagline": "Investor | Web/Game Developer | Business Analyst",
    "hero.description":
      "CTO-level talent passionate about technology, economics, and creating innovative solutions that bridge the gap between vision and reality.",
    "hero.cta.projects": "🚀 View Projects",
    "hero.cta.contact": "📩 Contact Me",
    "about.title": "About Me",
    "about.quote": "Tech gives me the tools, economics gives me the vision.",
    "about.description":
      "Experienced developer and analyst with expertise in full-stack development, game creation, and strategic business analysis.",
    "projects.title": "Featured Projects",
    "projects.viewAll": "View All Projects",
    "games.title": "Game Development",
    "games.viewAll": "View All Games",
    "blog.title": "Latest Insights",
    "blog.viewAll": "View All Posts",
    "chatbot.greeting": "Hello! I'm the digital version of Quách Thành Long. How can I help you?",
    "audio.toggle": "Toggle Background Music",
  },
  vi: {
    "nav.home": "Trang Chủ",
    "nav.about": "Giới Thiệu",
    "nav.projects": "Dự Án",
    "nav.games": "Game",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Liên Hệ",
    "hero.name": "Quách Thành Long",
    "hero.tagline": "Nhà Đầu Tư | Lập Trình Viên | Chuyên Gia Phân Tích",
    "hero.description":
      "Chuyên gia công nghệ cấp CTO với đam mê về công nghệ, kinh tế và tạo ra những giải pháp sáng tạo kết nối tầm nhìn với thực tế.",
    "hero.cta.projects": "🚀 Xem Dự Án",
    "hero.cta.contact": "📩 Liên Hệ",
    "about.title": "Giới Thiệu",
    "about.quote": "Công nghệ cho tôi công cụ, kinh tế cho tôi tầm nhìn.",
    "about.description":
      "Lập trình viên và chuyên gia phân tích giàu kinh nghiệm với chuyên môn về phát triển full-stack, tạo game và phân tích kinh doanh chiến lược.",
    "projects.title": "Dự Án Nổi Bật",
    "projects.viewAll": "Xem Tất Cả Dự Án",
    "games.title": "Phát Triển Game",
    "games.viewAll": "Xem Tất Cả Game",
    "blog.title": "Chia Sẻ Mới Nhất",
    "blog.viewAll": "Xem Tất Cả Bài Viết",
    "chatbot.greeting": "Xin chào! Tôi là bản số hóa của Quách Thành Long. Bạn cần giúp gì?",
    "audio.toggle": "Bật/Tắt Nhạc Nền",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "vi")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
