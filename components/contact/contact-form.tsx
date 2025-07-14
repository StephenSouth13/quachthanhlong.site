"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"
import { CursorWrapper } from "@/components/cursor-wrapper"

export function ContactForm() {
  const { language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  })

  const services = [
    { value: "web-dev", label: language === "vi" ? "Phát triển Web" : "Web Development" },
    { value: "game-dev", label: language === "vi" ? "Phát triển Game" : "Game Development" },
    { value: "business-analysis", label: language === "vi" ? "Phân tích Kinh doanh" : "Business Analysis" },
    { value: "investment", label: language === "vi" ? "Tư vấn Đầu tư" : "Investment Consulting" },
    { value: "other", label: language === "vi" ? "Khác" : "Other" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", service: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="p-8 bg-background/50 backdrop-blur-md border border-border/50">
        <h2 className="text-2xl font-bold font-sora mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {language === "vi" ? "Gửi tin nhắn" : "Send Message"}
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{language === "vi" ? "Họ tên" : "Full Name"} *</label>
                <CursorWrapper variant="form">
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={language === "vi" ? "Nhập họ tên của bạn" : "Enter your full name"}
                  />
                </CursorWrapper>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <CursorWrapper variant="form">
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={language === "vi" ? "Nhập email của bạn" : "Enter your email"}
                  />
                </CursorWrapper>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "vi" ? "Dịch vụ quan tâm" : "Service of Interest"}
              </label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "vi" ? "Chọn dịch vụ" : "Select service"} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{language === "vi" ? "Tiêu đề" : "Subject"} *</label>
              <Input
                required
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder={language === "vi" ? "Nhập tiêu đề tin nhắn" : "Enter message subject"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{language === "vi" ? "Nội dung" : "Message"} *</label>
              <CursorWrapper variant="form">
                <Textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={
                    language === "vi"
                      ? "Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                      : "Describe your project or requirements in detail..."
                  }
                />
              </CursorWrapper>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              <Send className="w-5 h-5 mr-2" />
              {language === "vi" ? "📧 Gửi tin nhắn" : "📧 Send Message"}
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              {language === "vi" ? "Gửi thành công!" : "Message Sent!"}
            </h3>
            <p className="text-muted-foreground">
              {language === "vi"
                ? "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong vòng 24 giờ."
                : "Thank you for reaching out. I'll respond within 24 hours."}
            </p>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}
