"use client"

import { useAudio } from "./audio-provider"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export function AudioControls() {
  const { isPlaying, toggleAudio } = useAudio()
  const { t } = useLanguage()

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      <Button
        onClick={toggleAudio}
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-md border-border/50 hover:bg-accent transition-all duration-300"
        title={t("audio.toggle")}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </Button>
    </motion.div>
  )
}
