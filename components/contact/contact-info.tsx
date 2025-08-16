"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Youtube, Facebook, Check, Copy } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// 1. Tái cấu trúc dữ liệu để dễ dàng render tự động
const directContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "stephensouth1307@gmail.com",
    href: "mailto:stephensouth1307@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0979137018",
    href: "tel:0979137018",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/StephenSouth13" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/quach-long-338018274/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@southstephen" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/long.quach.273823/" },
];

export function ContactPanel() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // 2. Hàm xử lý copy vào clipboard tiện lợi
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000); // Tự động reset icon sau 2 giây
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 3. Render thông tin liên hệ trực tiếp từ mảng */}
          <div className="space-y-2">
            {directContacts.map((item) => (
              <div key={item.label} className="flex items-center justify-between p-2 rounded-md hover:bg-accent">
                <a href={item.href} className="flex items-center gap-3 group">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm">{item.value}</span>
                </a>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                        onClick={() => handleCopy(item.value, item.label)}
                      >
                        {copiedItem === item.label ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy {item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>

          <Separator />

          {/* 4. Render các icon mạng xã hội một cách trực quan */}
          <div className="flex justify-center gap-3 pt-2">
            {socialLinks.map((link) => (
              <TooltipProvider key={link.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="outline" size="icon" className="rounded-full w-11 h-11 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110">
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}