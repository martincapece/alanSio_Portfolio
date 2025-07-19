"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder para el contenido del portfolio
  // Aquí deberías reemplazar con el contenido real de tu Google Drive
  const portfolioItems = [
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Modelado de Personajes 3D",
      description: "Creación detallada de personajes con texturas realistas",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Visualización Arquitectónica",
      description: "Render fotorrealista de espacios arquitectónicos",
    },
    {
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      title: "Animación de Objetos",
      description: "Animaciones fluidas y expresivas",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Visualización de Productos",
      description: "Modelos 3D para marketing y presentación",
    },
    {
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      title: "Entornos 3D",
      description: "Creación de ambientes inmersivos",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Assets para Videojuegos",
      description: "Modelos optimizados para gaming",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1))
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora una selección de mis trabajos más destacados en arte 3D y animación digital.
            </p>
          </div>

          {/* Carousel Principal */}
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src={portfolioItems[currentIndex].src || "/placeholder.svg"}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {portfolioItems[currentIndex].type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110">
                      <Play size={32} />
                    </button>
                  </div>
                )}
              </div>

              {/* Controles del carousel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Información del item actual */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{portfolioItems[currentIndex].title}</h3>
              <p className="text-gray-600">{portfolioItems[currentIndex].description}</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-4 ring-blue-600 transform scale-105"
                    : "hover:transform hover:scale-105"
                }`}
              >
                <img src={item.src || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">¿Te interesa ver más de mi trabajo o discutir tu próximo proyecto?</p>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Hablemos de tu Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
