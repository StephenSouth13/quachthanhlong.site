"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@qtl.dev", label: "Email" },
  ]

  const quickLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/games", label: t("nav.games") },
    { href: "/cv", label: t("nav.cv") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="py-16 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold font-sora bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 block"
            >
              Quách Thành Long
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              CTO-level talent passionate about technology, economics, and creating innovative solutions.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button key={social.label} asChild variant="ghost" size="icon" className="hover:bg-accent">
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 contact@qtl.dev</p>
              <p>📱 +84 xxx xxx xxx</p>
              <p>📍 Ho Chi Minh City, Vietnam</p>
            </div>
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2024 Quách Thành Long. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
