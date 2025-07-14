"use client"

import type React from "react"

import { Mail, Phone, Github, Linkedin, Youtube, Facebook } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const CONTACT = {
  email: "stephensouth1307@gmail.com",
  phone: "0979137018",
  github: "https://github.com/StephenSouth13",
  linkedin: "https://www.linkedin.com/in/quach-long-338018274/",
  youtube: "https://www.youtube.com/@southstephen",
  facebook: "https://www.facebook.com/long.quach.273823/",
}

const Item = ({
  icon: Icon,
  href,
  children,
}: {
  icon: typeof Mail
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className={cn(
      "flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors",
      href.startsWith("mailto") ? "cursor-text" : "cursor-pointer",
    )}
  >
    <Icon className="w-4 h-4 shrink-0 text-primary" />
    {children}
  </a>
)

export function ContactInfo() {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold mb-2">Contact</h3>

      <Item icon={Mail} href={`mailto:${CONTACT.email}`}>
        {CONTACT.email}
      </Item>
      <Item icon={Phone} href={`tel:${CONTACT.phone}`}>
        {CONTACT.phone}
      </Item>
      <Item icon={Github} href={CONTACT.github}>
        <Badge variant="secondary">GitHub</Badge>
      </Item>
      <Item icon={Linkedin} href={CONTACT.linkedin}>
        <Badge variant="secondary">LinkedIn</Badge>
      </Item>
      <Item icon={Youtube} href={CONTACT.youtube}>
        <Badge variant="secondary">YouTube</Badge>
      </Item>
      <Item icon={Facebook} href={CONTACT.facebook}>
        <Badge variant="secondary">Facebook</Badge>
      </Item>
    </section>
  )
}
