"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("sobre-mi")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden py-20 md:py-0"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">Alan Sio</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-blue-200 animate-fade-in-delay">
            Artista 3D & Técnico en Animación Digital
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed px-4">
            Transformo ideas en experiencias visuales extraordinarias. Especializado en modelado 3D, animación y arte
            digital con tecnología de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 lg:hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold lg:transition-all lg:transform lg:hover:scale-105"
            >
              Ver Mi Trabajo
            </button>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white lg:hover:bg-white lg:hover:text-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold lg:transition-all lg:transform lg:hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      <button onClick={scrollToAbout} className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={28} className="text-white/70 lg:hover:text-white lg:transition-colors md:w-8 md:h-8" />
      </button>
    </section>
  )
}
