"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Volume2 } from "lucide-react"

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Placeholder para el contenido del portfolio
  // Aquí deberías reemplazar con el contenido real de tu Google Drive
  const portfolioItems = [
    {
      title: "Modelado de objetos 3D",
      description: "Creación detallada de objetos con texturas realistas",
      media: [
        { type: "image", src: "/portfolio/img/img_cafe1.png" },
        { type: "image", src: "/portfolio/img/img_cafe2.png" },
        { type: "image", src: "/portfolio/img/img_cafe3.png" },
        { type: "video", src: "/portfolio/video/video_cafe1.mp4" },
        { type: "image", src: "/portfolio/img/img_basquet1.png" },
        { type: "image", src: "/portfolio/img/img_basquet2.png" },
        { type: "image", src: "/portfolio/img/img_basquet3.png" },
        { type: "video", src: "/portfolio/video/video_basquet1.mp4" },
        { type: "image", src: "/portfolio/img/img_ramen1.png" },
        { type: "image", src: "/portfolio/img/img_ramen2.png" },
        { type: "image", src: "/portfolio/img/img_ramen3.png" },
        { type: "image", src: "/portfolio/img/img_ramen4.png" },
        { type: "image", src: "/portfolio/img/img_ramen5.png" },
        { type: "video", src: "/portfolio/video/video_ramen1.mp4" },
        { type: "image", src: "/portfolio/img/img_sable1.png" },
        { type: "image", src: "/portfolio/img/img_sable2.png" },
        { type: "image", src: "/portfolio/img/img_sable3.png" },
        { type: "image", src: "/portfolio/img/img_sable4.png" },
        { type: "video", src: "/portfolio/video/video_sable1.mp4" },
        { type: "image", src: "/portfolio/img/img_JP-22_real.jpeg" },
        { type: "image", src: "/portfolio/img/img_JP-22_1.jpg" },
        { type: "image", src: "/portfolio/img/img_JP-22_2.jpg" },
        { type: "image", src: "/portfolio/img/img_JP-22_3.jpg" },
        { type: "video", src: "/portfolio/video/video_JP-22_1.mp4" },
      ]
    },
    {
      title: "Entornos 3D",
      description: "Creación de ambientes inmersivos",
      media: [
        { type: "image", src: "/portfolio/img/img_basquet1.png" },
        { type: "image", src: "/portfolio/img/img_basquet2.png" },
        { type: "image", src: "/portfolio/img/img_basquet3.png" },
        { type: "video", src: "/portfolio/video/video_basquet1.mp4" },
      ]
    },
    {
      title: "Animación de Objetos",
      description: "Animaciones fluidas y expresivas",
      media: [
        { type: "video", src: "/portfolio/animation/animation_pelota1.mp4" },
        { type: "video", src: "/portfolio/animation/animation_caminatas1.mp4" },
        { type: "video", src: "/portfolio/animation/animation_cajaBrackets1.mp4" },
        { type: "video", src: "/portfolio/animation/animation_cortometraje1.mp4" },
        { type: "video", src: "/portfolio/animation/animation_cortometraje2.mp4" },
      ]
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1))
    setCurrentMediaIndex(0) // Reset to first media when changing project
    setIsPlaying(false) // Pausar video al cambiar slide
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1))
    setCurrentMediaIndex(0) // Reset to first media when changing project
    setIsPlaying(false) // Pausar video al cambiar slide
  }

  const nextMedia = () => {
    const currentProject = portfolioItems[currentIndex]
    setCurrentMediaIndex((prevIndex) => 
      prevIndex === currentProject.media.length - 1 ? 0 : prevIndex + 1
    )
    setIsPlaying(false)
  }

  const prevMedia = () => {
    const currentProject = portfolioItems[currentIndex]
    setCurrentMediaIndex((prevIndex) => 
      prevIndex === 0 ? currentProject.media.length - 1 : prevIndex - 1
    )
    setIsPlaying(false)
  }

  const handlePlayVideo = () => {
    const videoElement = document.getElementById(`video-${currentIndex}-${currentMediaIndex}`) as HTMLVideoElement
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause()
        setIsPlaying(false)
      } else {
        videoElement.play()
        setIsPlaying(true)
      }
    }
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
              <div className="aspect-[5/4] bg-gray-900 flex items-center justify-center relative">
                {portfolioItems[currentIndex].media[currentMediaIndex].type === "video" ? (
                  <video
                    id={`video-${currentIndex}-${currentMediaIndex}`}
                    src={portfolioItems[currentIndex].media[currentMediaIndex].src}
                    className="w-full h-full object-cover"
                    controls={isPlaying ? true : false}
                    muted={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                ) : (
                  <img
                    src={portfolioItems[currentIndex].media[currentMediaIndex].src || "/placeholder.svg"}
                    alt={portfolioItems[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                )}
                {portfolioItems[currentIndex].media[currentMediaIndex].type === "video" && (
                  <>
                    {/* Botón de play personalizado - solo cuando está pausado */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110 pointer-events-auto cursor-pointer"
                             onClick={handlePlayVideo}
                             title="Reproducir video (con audio)">
                          <Play size={32} />
                        </div>
                      </div>
                    )}
                    {/* Indicador de audio */}
                    <div className="absolute top-4 right-4 bg-blue-600/80 text-white px-2 py-1 rounded-full flex items-center space-x-1 text-sm">
                      <Volume2 size={12} />
                      <span>Audio</span>
                    </div>
                  </>
                )}
              </div>

              {/* Controles del carousel de proyectos */}
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

              {/* Controles del carousel de media (si hay múltiples medias) */}
              {(portfolioItems[currentIndex].media.length > 1 && !isPlaying) && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 bottom-4 bg-blue-600/80 hover:bg-blue-700 text-white p-1 rounded-full transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 bottom-4 bg-blue-600/80 hover:bg-blue-700 text-white p-1 rounded-full transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                  
                  {/* Indicadores de media */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {portfolioItems[currentIndex].media.map((_, mediaIndex) => (
                      <button
                        key={mediaIndex}
                        onClick={() => {
                          setCurrentMediaIndex(mediaIndex)
                          setIsPlaying(false)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          mediaIndex === currentMediaIndex ? "bg-blue-600" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Información del item actual */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{portfolioItems[currentIndex].title}</h3>
              <p className="text-gray-600">{portfolioItems[currentIndex].description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {currentMediaIndex + 1} de {portfolioItems[currentIndex].media.length} imágenes
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setCurrentMediaIndex(0) // Reset to first media when changing project
                  setIsPlaying(false) // Pausar cualquier video al cambiar thumbnail
                }}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-4 ring-blue-600 transform scale-105"
                    : "hover:transform hover:scale-105"
                }`}
              >
                {item.media[0].type === "video" ? (
                  <video
                    src={item.media[0].src}
                    className="w-full h-full object-cover"
                    muted
                  />
                ) : (
                  <img src={item.media[0].src || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                )}
                {item.media[0].type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={16} className="text-white" />
                  </div>
                )}
                {/* Indicador de múltiples medias */}
                {item.media.length > 1 && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.media.length}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                  {item.title}
                </div>
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
