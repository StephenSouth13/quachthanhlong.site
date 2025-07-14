"use client"

import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import { Download, Globe, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CVActions() {
  const { language } = useLanguage()

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <Card className="p-8 bg-background/50 backdrop-blur-md border border-border/50 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            {language === "vi" ? "Tải CV hoặc nhận bản quốc tế" : "Download CV or view international version"}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/cv.pdf">
                <Download className="w-5 h-5" />
                PDF
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/cv-en">
                <Globe className="w-5 h-5" />
                {language === "vi" ? "Bản quốc tế" : "International"}
              </Link>
            </Button>

            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href="/contact">
                <Send className="w-5 h-5" />
                {language === "vi" ? "Gửi cho AI" : "Send to AI"}
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
