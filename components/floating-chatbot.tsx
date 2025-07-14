"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  quickReplies?: string[]
}

export function FloatingChatbot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting message
      const greeting: Message = {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "Xin chào! 👋 Tôi là AI Assistant của Quách Thành Long. Tôi có thể giúp bạn tìm hiểu về dịch vụ, kinh nghiệm và dự án của tôi. Bạn muốn biết điều gì?"
            : "Hello! 👋 I'm Quách Thành Long's AI Assistant. I can help you learn about my services, experience, and projects. What would you like to know?",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["🚀 Dịch vụ", "💼 Kinh nghiệm", "🎮 Dự án Game", "💰 Đầu tư", "📞 Liên hệ"]
            : ["🚀 Services", "💼 Experience", "🎮 Game Projects", "💰 Investment", "📞 Contact"],
      }
      setMessages([greeting])
    }
  }, [isOpen, language])

  const getAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()

    // Contact information responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("liên hệ") || lowerMessage.includes("📞")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "📞 **Thông tin liên hệ của Quách Thành Long:**\n\n📧 Email: stephensouth1307@gmail.com\n📱 Phone: 0979137018\n🔗 GitHub: https://github.com/StephenSouth13\n💼 LinkedIn: https://www.linkedin.com/in/quach-long-338018274/\n📺 YouTube: https://www.youtube.com/@southstephen\n👤 Facebook: https://www.facebook.com/long.quach.273823/\n\nBạn có thể liên hệ qua bất kỳ kênh nào ở trên!"
            : "📞 **Quách Thành Long's Contact Information:**\n\n📧 Email: stephensouth1307@gmail.com\n📱 Phone: 0979137018\n🔗 GitHub: https://github.com/StephenSouth13\n💼 LinkedIn: https://www.linkedin.com/in/quach-long-338018274/\n📺 YouTube: https://www.youtube.com/@southstephen\n👤 Facebook: https://www.facebook.com/long.quach.273823/\n\nFeel free to reach out through any of these channels!",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["📧 Gửi Email", "🚀 Dịch vụ", "💼 Kinh nghiệm"]
            : ["📧 Send Email", "🚀 Services", "💼 Experience"],
      }
    }

    // Services responses
    if (lowerMessage.includes("service") || lowerMessage.includes("dịch vụ") || lowerMessage.includes("🚀")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "🚀 **Dịch vụ chuyên nghiệp của tôi:**\n\n💻 **Web Development**\n- React, Next.js, TypeScript\n- Full-stack development\n- Responsive design\n\n🎮 **Game Development**\n- Unity 3D/2D\n- Mobile game development\n- Game design & mechanics\n\n📊 **Business Analysis**\n- Requirements analysis\n- Process optimization\n- Data analysis\n\n💰 **Investment Consulting**\n- Crypto & DeFi analysis\n- Portfolio management\n- Market research\n\nBạn quan tâm đến dịch vụ nào?"
            : "🚀 **My Professional Services:**\n\n💻 **Web Development**\n- React, Next.js, TypeScript\n- Full-stack development\n- Responsive design\n\n🎮 **Game Development**\n- Unity 3D/2D\n- Mobile game development\n- Game design & mechanics\n\n📊 **Business Analysis**\n- Requirements analysis\n- Process optimization\n- Data analysis\n\n💰 **Investment Consulting**\n- Crypto & DeFi analysis\n- Portfolio management\n- Market research\n\nWhich service interests you?",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["💻 Web Dev", "🎮 Game Dev", "📊 BA", "💰 Đầu tư"]
            : ["💻 Web Dev", "🎮 Game Dev", "📊 BA", "💰 Investment"],
      }
    }

    // Experience responses
    if (lowerMessage.includes("experience") || lowerMessage.includes("kinh nghiệm") || lowerMessage.includes("💼")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "💼 **Kinh nghiệm & Thành tựu:**\n\n🎓 **Học vấn:**\n- Đại học Công nghệ Thông tin\n- Chuyên ngành: Software Engineering\n\n💻 **Kinh nghiệm làm việc:**\n- 3+ năm Web Development\n- 2+ năm Game Development\n- 2+ năm Business Analysis\n- 1+ năm Investment Analysis\n\n🏆 **Dự án nổi bật:**\n- 15+ website hoàn thành\n- 8+ mobile games published\n- 20+ business analysis reports\n- Portfolio ROI: 150%+\n\nTôi luôn học hỏi và cập nhật công nghệ mới!"
            : "💼 **Experience & Achievements:**\n\n🎓 **Education:**\n- Information Technology University\n- Major: Software Engineering\n\n💻 **Work Experience:**\n- 3+ years Web Development\n- 2+ years Game Development\n- 2+ years Business Analysis\n- 1+ year Investment Analysis\n\n🏆 **Notable Projects:**\n- 15+ completed websites\n- 8+ published mobile games\n- 20+ business analysis reports\n- Portfolio ROI: 150%+\n\nI'm always learning and updating with new technologies!",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["🎮 Dự án Game", "💻 Web Projects", "📈 Portfolio"]
            : ["🎮 Game Projects", "💻 Web Projects", "📈 Portfolio"],
      }
    }

    // Game projects responses
    if (lowerMessage.includes("game") || lowerMessage.includes("🎮")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "🎮 **Dự án Game nổi bật:**\n\n🏃‍♂️ **Endless Runner**\n- Unity 2D, C#\n- 10K+ downloads\n- Monetization: Ads + IAP\n\n🧩 **Puzzle Adventure**\n- Unity 3D\n- 50+ levels\n- Social features\n\n⚔️ **Action RPG**\n- Multiplayer system\n- Real-time combat\n- Character progression\n\n🎯 **Casual Games**\n- Hyper-casual mechanics\n- Quick gameplay loops\n- High retention rates\n\nTất cả games đều có analytics và monetization strategy hoàn chỉnh!"
            : "🎮 **Featured Game Projects:**\n\n🏃‍♂️ **Endless Runner**\n- Unity 2D, C#\n- 10K+ downloads\n- Monetization: Ads + IAP\n\n🧩 **Puzzle Adventure**\n- Unity 3D\n- 50+ levels\n- Social features\n\n⚔️ **Action RPG**\n- Multiplayer system\n- Real-time combat\n- Character progression\n\n🎯 **Casual Games**\n- Hyper-casual mechanics\n- Quick gameplay loops\n- High retention rates\n\nAll games include complete analytics and monetization strategies!",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["🎯 Game Design", "📱 Mobile Games", "💰 Monetization"]
            : ["🎯 Game Design", "📱 Mobile Games", "💰 Monetization"],
      }
    }

    // Investment responses
    if (lowerMessage.includes("investment") || lowerMessage.includes("đầu tư") || lowerMessage.includes("💰")) {
      return {
        id: Date.now().toString(),
        type: "bot",
        content:
          language === "vi"
            ? "💰 **Chuyên môn Đầu tư:**\n\n📈 **Crypto & DeFi:**\n- Technical analysis\n- Fundamental analysis\n- Risk management\n- Portfolio diversification\n\n💎 **Altcoin Research:**\n- Project evaluation\n- Tokenomics analysis\n- Market trend prediction\n\n🏦 **Traditional Finance:**\n- Stock analysis\n- Bond investment\n- Real estate evaluation\n\n📊 **Performance:**\n- 3+ năm kinh nghiệm\n- ROI trung bình: 150%+\n- Risk-adjusted returns\n\n⚠️ *Lưu ý: Đây không phải lời khuyên đầu tư, chỉ mang tính chất tham khảo.*"
            : "💰 **Investment Expertise:**\n\n📈 **Crypto & DeFi:**\n- Technical analysis\n- Fundamental analysis\n- Risk management\n- Portfolio diversification\n\n💎 **Altcoin Research:**\n- Project evaluation\n- Tokenomics analysis\n- Market trend prediction\n\n🏦 **Traditional Finance:**\n- Stock analysis\n- Bond investment\n- Real estate evaluation\n\n📊 **Performance:**\n- 3+ years experience\n- Average ROI: 150%+\n- Risk-adjusted returns\n\n⚠️ *Note: This is not investment advice, for reference only.*",
        timestamp: new Date(),
        quickReplies:
          language === "vi"
            ? ["📈 Crypto", "📊 Analysis", "💼 Portfolio"]
            : ["📈 Crypto", "📊 Analysis", "💼 Portfolio"],
      }
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: "bot",
      content:
        language === "vi"
          ? "Cảm ơn bạn đã quan tâm! 😊 Tôi có thể giúp bạn tìm hiểu về:\n\n🚀 Dịch vụ chuyên nghiệp\n💼 Kinh nghiệm làm việc\n🎮 Dự án game\n💰 Phân tích đầu tư\n📞 Thông tin liên hệ\n\nBạn muốn biết về điều gì?"
          : "Thank you for your interest! 😊 I can help you learn about:\n\n🚀 Professional services\n💼 Work experience\n🎮 Game projects\n💰 Investment analysis\n📞 Contact information\n\nWhat would you like to know?",
      timestamp: new Date(),
      quickReplies:
        language === "vi"
          ? ["🚀 Dịch vụ", "💼 Kinh nghiệm", "🎮 Games", "💰 Đầu tư", "📞 Liên hệ"]
          : ["🚀 Services", "💼 Experience", "🎮 Games", "💰 Investment", "📞 Contact"],
    }
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = getAIResponse(content)
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300"
          data-cursor="ai"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">
                      {language === "vi" ? "Luôn sẵn sàng hỗ trợ" : "Always ready to help"}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages */}
                <ScrollArea className="h-80 px-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.type === "bot" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}

                        <div className={`max-w-[80%] ${message.type === "user" ? "order-1" : ""}`}>
                          <div
                            className={`p-3 rounded-2xl ${
                              message.type === "user"
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-auto"
                                : "bg-accent/50"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                          </div>

                          {/* Quick Replies */}
                          {message.quickReplies && message.type === "bot" && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.quickReplies.map((reply, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleQuickReply(reply)}
                                  className="text-xs h-7 bg-background/50 hover:bg-accent"
                                >
                                  {reply}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>

                        {message.type === "user" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-accent/50 p-3 rounded-2xl">
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-muted-foreground rounded-full"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t border-border/50">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={language === "vi" ? "Nhập tin nhắn..." : "Type a message..."}
                      className="flex-1 bg-background/50"
                      data-cursor="input"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      data-cursor="cta"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
