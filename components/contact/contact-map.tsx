"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function ContactMap() {
  const { language } = useLanguage()

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {language === "vi" ? "Vị trí của tôi" : "My Location"}
            </h2>
            <p className="text-muted-foreground">
              {language === "vi"
                ? "Tôi làm việc tại TP. Hồ Chí Minh, Việt Nam và sẵn sàng hỗ trợ khách hàng toàn cầu"
                : "Based in Ho Chi Minh City, Vietnam and ready to support global clients"}
            </p>
          </div>

          <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50">
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "vi" ? "TP. Hồ Chí Minh" : "Ho Chi Minh City"}
                  </h3>
                  <p className="text-muted-foreground">{language === "vi" ? "Việt Nam" : "Vietnam"}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === "vi"
                      ? "Google Maps sẽ được tích hợp tại đây"
                      : "Google Maps integration will be here"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">GMT+7</div>
                  <div className="text-sm text-muted-foreground">{language === "vi" ? "Múi giờ" : "Timezone"}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    {language === "vi" ? "Hỗ trợ online" : "Online Support"}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">Global</div>
                  <div className="text-sm text-muted-foreground">
                    {language === "vi" ? "Phục vụ toàn cầu" : "Worldwide Service"}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
