"use client"

import { Heart, Linkedin, Instagram, DribbbleIcon as Behance } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Información Personal */}
              <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Alan Sio
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                  Artista 3D especializado en animación digital y visualización creativa. Transformando ideas en
                  experiencias visuales extraordinarias.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/alan-sio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-gray-300 lg:hover:text-white lg:hover:bg-blue-600 lg:transition-all lg:duration-300 lg:transform lg:hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://instagram.com/alan.sio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-gray-300 lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-purple-500 lg:hover:to-pink-500 lg:transition-all lg:duration-300 lg:transform lg:hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Enlaces Rápidos */}
              <div className="lg:col-span-1 text-center md:text-left">
                <h4 className="text-lg font-semibold mb-6 text-white">Enlaces Rápidos</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors lg:duration-300 text-sm lg:text-base"
                    >
                      Sobre Mí
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors lg:duration-300 text-sm lg:text-base"
                    >
                      Servicios
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors lg:duration-300 text-sm lg:text-base"
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors lg:duration-300 text-sm lg:text-base"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>

              {/* Servicios */}
              <div className="lg:col-span-1 text-center md:text-left">
                <h4 className="text-lg font-semibold mb-6 text-white">Servicios</h4>
                <ul className="space-y-3">
                  <li className="text-gray-300 text-sm lg:text-base">Modelado 3D</li>
                  <li className="text-gray-300 text-sm lg:text-base">Animación Digital</li>
                  <li className="text-gray-300 text-sm lg:text-base">Visualización Arquitectónica</li>
                  <li className="text-gray-300 text-sm lg:text-base">Assets para Videojuegos</li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="lg:col-span-1 text-center md:text-left">
                <h4 className="text-lg font-semibold mb-6 text-white">Contacto</h4>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</span>
                    <a 
                      href="mailto:alan.sio.lopez@gmail.com"
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors text-sm lg:text-base break-all"
                    >
                      alan.sio.lopez@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Teléfono</span>
                    <a 
                      href="tel:+5491169031345"
                      className="text-gray-300 lg:hover:text-blue-400 lg:transition-colors text-sm lg:text-base"
                    >
                      +54 11 6903-1345
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Ubicación</span>
                    <span className="text-gray-300 text-sm lg:text-base">Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 font-medium text-sm lg:text-base">
                  Portafolio Oficial - Alan Sio
                </p>
                <p className="text-gray-400 text-xs lg:text-sm mt-1">
                  Todos los derechos reservados - 2025 ©
                </p>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-gray-400 text-xs lg:text-sm">
                  Sitio Desarrollado por{" "}
                  <a 
                    href="https://www.linkedin.com/in/martin-gabriel-capece-a97415253/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 lg:hover:text-blue-300 lg:transition-colors underline decoration-dotted underline-offset-2"
                  >
                    Martin Capece
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
