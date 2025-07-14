"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Rocket, Edit3, Brain, Target } from "lucide-react"

interface CursorState {
  x: number
  y: number
  isVisible: boolean
  isHovering: boolean
  cursorType: "default" | "cta" | "card" | "text" | "ai" | "input"
  isIdle: boolean
}

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(true)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
    cursorType: "default",
    isIdle: false,
  })

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  // Trail points for motion trail effect
  const [trailPoints, setTrailPoints] = useState<Array<{ x: number; y: number; id: number }>>([])
  const trailLength = 8
  const idleTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouchDevice()

    // Load cursor preference from localStorage
    const savedPreference = localStorage.getItem("customCursor")
    if (savedPreference !== null) {
      setIsEnabled(JSON.parse(savedPreference))
    }

    // Don't run on touch devices
    if (isTouchDevice) return

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      cursorX.set(x)
      cursorY.set(y)

      setCursorState((prev) => ({
        ...prev,
        x,
        y,
        isVisible: true,
        isIdle: false,
      }))

      // Update trail points
      setTrailPoints((prev) => {
        const newPoint = { x, y, id: Date.now() }
        const newTrail = [newPoint, ...prev.slice(0, trailLength - 1)]
        return newTrail
      })

      // Reset idle timer
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current)
      }
      idleTimeoutRef.current = setTimeout(() => {
        setCursorState((prev) => ({ ...prev, isIdle: true }))
      }, 2000)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorType = (target.getAttribute("data-cursor") as CursorState["cursorType"]) || "default"

      setCursorState((prev) => ({
        ...prev,
        isHovering: true,
        cursorType,
      }))

      // Magnet effect for text elements
      if (cursorType === "text") {
        const rect = target.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

        if (distance < 100) {
          const magnetStrength = 0.3
          const magnetX = centerX + (e.clientX - centerX) * magnetStrength
          const magnetY = centerY + (e.clientY - centerY) * magnetStrength
          cursorX.set(magnetX)
          cursorY.set(magnetY)
        }
      }
    }

    const handleMouseLeave = () => {
      setCursorState((prev) => ({
        ...prev,
        isHovering: false,
        cursorType: "default",
      }))
    }

    const handleDoubleRightClick = (e: MouseEvent) => {
      if (e.button === 2) {
        // Right mouse button
        e.preventDefault()
        const newEnabled = !isEnabled
        setIsEnabled(newEnabled)
        localStorage.setItem("customCursor", JSON.stringify(newEnabled))
      }
    }

    // Add event listeners
    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mousedown", handleDoubleRightClick)
    document.addEventListener("contextmenu", (e) => e.preventDefault())

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("[data-cursor]")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as EventListener)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mousedown", handleDoubleRightClick)
      document.removeEventListener("contextmenu", (e) => e.preventDefault())

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current)
      }
    }
  }, [isEnabled, isTouchDevice, cursorX, cursorY])

  // Don't render on touch devices or when disabled
  if (isTouchDevice || !isEnabled) {
    return null
  }

  const getCursorIcon = () => {
    switch (cursorState.cursorType) {
      case "cta":
        return <Rocket className="w-4 h-4" />
      case "input":
        return <Edit3 className="w-4 h-4" />
      case "ai":
        return <Brain className="w-4 h-4" />
      case "text":
        return <Target className="w-4 h-4" />
      default:
        return null
    }
  }

  const getCursorColors = () => {
    switch (cursorState.cursorType) {
      case "cta":
        return "from-blue-400 via-purple-500 to-pink-500"
      case "card":
        return "from-purple-400 via-pink-500 to-purple-600"
      case "text":
        return "from-green-400 via-blue-500 to-teal-500"
      case "ai":
        return "from-yellow-400 via-orange-500 to-red-500"
      case "input":
        return "from-cyan-400 via-blue-500 to-indigo-500"
      default:
        return "from-purple-400 via-pink-500 to-blue-500"
    }
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom Cursor */}
      <AnimatePresence>
        {cursorState.isVisible && (
          <>
            {/* Trail Effect */}
            {trailPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                  x: point.x - 4,
                  y: point.y - 4,
                }}
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{
                  opacity: ((trailLength - index) / trailLength) * 0.6,
                  scale: ((trailLength - index) / trailLength) * 0.8,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCursorColors()}`} />
              </motion.div>
            ))}

            {/* Main Cursor */}
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
              style={{
                x: springX,
                y: springY,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: cursorState.isHovering ? 1.5 : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 400, damping: 25 },
              }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                {/* Main Cursor Dot */}
                <motion.div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${getCursorColors()} shadow-lg`}
                  animate={{
                    scale: cursorState.isIdle ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    scale: {
                      duration: 2,
                      repeat: cursorState.isIdle ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Icon for specific cursor types */}
                {getCursorIcon() && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {getCursorIcon()}
                  </motion.div>
                )}

                {/* Ripple effect for cards */}
                {cursorState.cursorType === "card" && cursorState.isHovering && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-500/50"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}

                {/* AI particles for AI cursor */}
                {cursorState.cursorType === "ai" && cursorState.isHovering && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-yellow-300"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        }}
                        animate={{
                          x: Math.random() * 40 - 20,
                          y: Math.random() * 40 - 20,
                          opacity: 0,
                          scale: 0,
                        }}
                        transition={{
                          duration: 0.8 + Math.random() * 0.5,
                          delay: i * 0.1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
