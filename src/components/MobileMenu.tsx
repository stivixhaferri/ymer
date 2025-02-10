"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Home, MenuIcon, Phone, MapPin, PanelsTopLeft } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: MenuIcon, label: "Menu", href: "/menu" },
    { icon: Phone, label: "069 546 7048", href: "tel:069 546 7048" },
    { icon: MapPin, label: "Mbikalimi Shkozetit Durres", href: "https://maps.app.goo.gl/b2EyYcVmvvW7Vw13A" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="w-[50px] h-[50px] border-[0.5px] flex items-center justify-center rounded-lg bg-white shadow-md">
          <PanelsTopLeft className="text-gray-500" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-100">
        <div className="flex flex-col h-full">
          <div className="py-6">
            <img src="/text.png" className="w-[80%] mx-auto" alt="Sheet Logo" />
          </div>
          <nav className="flex-grow">
            {menuItems.map((item, index) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                <motion.div
                  className="flex items-center px-4 py-3 mb-2 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 mr-4 text-red-600" />
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </nav>
          <div className="py-6 text-center text-gray-500 text-sm">© 2025 Ymer&apos; Grill</div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

