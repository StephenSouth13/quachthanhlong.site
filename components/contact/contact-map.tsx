"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../language-provider" // Giả sử đúng đường dẫn
import { Card } from "@/components/ui/card"
import { MapPin, Clock, LifeBuoy, Globe } from "lucide-react"
import { Mail, Phone, Github, Linkedin, Youtube, Facebook } from "lucide-react";
// --- 1. Quản lý nội dung đa ngôn ngữ tập trung ---
const TEXTS = {
  title: {
    vi: "Vị trí của tôi",
    en: "My Location",
  },
  subtitle: {
    vi: "Làm việc tại TP. Hồ Chí Minh, Việt Nam và sẵn sàng hỗ trợ khách hàng toàn cầu.",
    en: "Based in Ho Chi Minh City, Vietnam, and ready to support global clients.",
  },
  locationName: {
    vi: "TP. Hồ Chí Minh",
    en: "Ho Chi Minh City",
  },
  country: {
    vi: "Việt Nam",
    en: "Vietnam",
  },
  timezone: {
    vi: "Múi giờ",
    en: "Timezone",
  },
  support: {
    vi: "Hỗ trợ Online",
    en: "Online Support",
  },
  service: {
    vi: "Phục vụ Toàn cầu",
    en: "Worldwide Service",
  },
  mapTitle: {
    vi: "Bản đồ vị trí văn phòng tại TP. Hồ Chí Minh",
    en: "Map showing office location in Ho Chi Minh City",
  }
};

// --- 2. Tách URL bản đồ ra thành hằng số ---
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.48169503961!2d106.64818167451658!3d10.7271650601015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f154fb48c1d%3A0x5b3622703ff70075!2zNDUgxJAuIFPhu5EgMTAsIGtodSBEw6JuIEPGsCwgQsOsbmggQ2jDoW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1755367875882!5m2!1svi!2s";

export function ContactMap() {
  const { language } = useLanguage();
  const t = (key: keyof typeof TEXTS) => TEXTS[key][language];

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
            <h2 className="text-3xl lg:text-4xl font-bold font-sora mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <Card className="overflow-hidden bg-background/50 backdrop-blur-md border border-border/50 shadow-lg">
            {/* --- 3. Tích hợp bản đồ thật --- */}
            <div className="relative h-96">
              <iframe
                src={MAPS_EMBED_URL}
                title={t("mapTitle")}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-6 border-t border-border/50">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* --- 4. Cải thiện UI & UX --- */}
                <InfoItem icon={Clock} value="GMT+7" label={t("timezone")} color="text-blue-400" />
                <InfoItem icon={LifeBuoy} value="24/7" label={t("support")} color="text-green-400" />
                <InfoItem icon={Globe} value="Global" label={t("service")} color="text-purple-400" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Component con để tái sử dụng và làm code sạch hơn
function InfoItem({ icon: Icon, value, label, color }: { icon: React.ElementType, value: string, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className={`w-8 h-8 mb-1 ${color}`} />
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}