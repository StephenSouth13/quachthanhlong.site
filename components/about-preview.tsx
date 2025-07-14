"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { CursorWrapper } from "@/components/cursor-wrapper"

export function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-background/50 backdrop-blur-md border border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">{t("about.title")}</h2>

              <CursorWrapper variant="text">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-blue-400 mr-3" />
                  <p className="text-xl italic text-muted-foreground">{t("about.quote")}</p>
                </div>
              </CursorWrapper>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("about.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, Node.js, Unity</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Business Analysis</h3>
                <p className="text-sm text-muted-foreground">Strategic Planning, Market Research</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">Investment</h3>
                <p className="text-sm text-muted-foreground">Tech Startups, Market Analysis</p>
              </div>
            </div>

            <div className="text-center">
              <CursorWrapper variant="cta">
                <Button asChild variant="outline" className="border-2 hover:bg-accent bg-transparent">
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Me
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CursorWrapper>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
