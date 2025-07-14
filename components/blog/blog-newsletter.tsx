"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export function BlogNewsletter() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 backdrop-blur-md text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-green-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {language === "vi" ? "Đăng ký Newsletter" : "Subscribe to Newsletter"}
            </h3>

            <p className="text-muted-foreground mb-6">
              {language === "vi"
                ? "Nhận những bài viết mới nhất về công nghệ, business analysis và insights độc quyền từ tôi."
                : "Get the latest articles about technology, business analysis and exclusive insights from me."}
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder={language === "vi" ? "Nhập email của bạn..." : "Enter your email..."}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {language === "vi" ? "Đăng ký" : "Subscribe"}
                </Button>
              </form>
            ) : (
              <div className="text-green-400 font-semibold">
                ✅ {language === "vi" ? "Đăng ký thành công! Cảm ơn bạn." : "Successfully subscribed! Thank you."}
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              {language === "vi"
                ? "Tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào."
                : "I respect your privacy. Unsubscribe at any time."}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
