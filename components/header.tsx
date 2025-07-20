"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-800">Alan Sio</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
