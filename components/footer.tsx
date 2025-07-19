"use client"

import { Heart, Linkedin, Instagram, DribbbleIcon as Behance } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Información Personal */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Alan Sio</h3>
              <p className="text-gray-300 mb-4">
                Artista 3D especializado en animación digital y visualización creativa. Transformando ideas en
                experiencias visuales extraordinarias.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/alansio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com/alansio3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://behance.net/alansio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Behance size={24} />
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre Mí
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>alan.sio@email.com</p>
                <p>+54 11 1234-5678</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 flex items-center justify-center">
              Hecho con <Heart className="w-4 h-4 text-red-500 mx-2" /> por Alan Sio © 2024
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Todos los derechos reservados. Técnico en Animación y Arte Digital - UNLAM
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
