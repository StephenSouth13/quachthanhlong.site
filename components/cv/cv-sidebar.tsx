"use client"

import { Github, Linkedin, Mail, Phone, Youtube, Facebook } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const INFO = {
  name: "Quách Thành Long",
  role: "Full-Stack Developer / Business Analyst",
  email: "stephensouth1307@gmail.com",
  phone: "0979137018",
  socials: {
    github: "https://github.com/StephenSouth13",
    linkedin: "https://www.linkedin.com/in/quach-long-338018274/",
    youtube: "https://www.youtube.com/@southstephen",
    facebook: "https://www.facebook.com/long.quach.273823/",
  },
}

export default function CvSidebar() {
  return (
    <aside className="w-full lg:w-72 p-6 bg-background/60 backdrop-blur-md rounded-xl space-y-6">
      {/* Avatar */}
      <div className="relative w-32 h-32 mx-auto">
        <Image src="/placeholder.svg?height=128&width=128" alt="Avatar" fill className="rounded-full object-cover" />
      </div>

      {/* Name & title */}
      <div className="text-center space-y-1">
        <h2 className="text-xl font-semibold">{INFO.name}</h2>
        <p className="text-muted-foreground text-sm">{INFO.role}</p>
      </div>

      {/* Contact */}
      <div className="space-y-2">
        <p className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4" /> {INFO.email}
        </p>
        <p className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> {INFO.phone}
        </p>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-3">
        <a href={INFO.socials.github} target="_blank" aria-label="GitHub" rel="noreferrer">
          <Github className="w-5 h-5 hover:text-primary" />
        </a>
        <a href={INFO.socials.linkedin} target="_blank" aria-label="LinkedIn" rel="noreferrer">
          <Linkedin className="w-5 h-5 hover:text-primary" />
        </a>
        <a href={INFO.socials.youtube} target="_blank" aria-label="YouTube" rel="noreferrer">
          <Youtube className="w-5 h-5 hover:text-primary" />
        </a>
        <a href={INFO.socials.facebook} target="_blank" aria-label="Facebook" rel="noreferrer">
          <Facebook className="w-5 h-5 hover:text-primary" />
        </a>
      </div>

      {/* Download CV button */}
      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center justify-center w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
      >
        Download CV
      </a>

      {/* Skills / Badges demo */}
      <div className="flex flex-wrap gap-2">
        {["Next.js", "TypeScript", "Prisma", "AI Tools"].map((s) => (
          <Badge key={s} variant="outline" className="text-xs">
            {s}
          </Badge>
        ))}
      </div>
    </aside>
  )
}
