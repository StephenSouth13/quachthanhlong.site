"use client"

import type React from "react"

interface CursorWrapperProps {
  children: React.ReactNode
  variant?: "default" | "cta" | "card" | "text" | "ai" | "form"
  className?: string
}

export function CursorWrapper({ children, variant = "default", className = "" }: CursorWrapperProps) {
  return (
    <div data-cursor={variant} className={className}>
      {children}
    </div>
  )
}
