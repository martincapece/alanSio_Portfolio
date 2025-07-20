"use client"

import { CuboidIcon as Cube, Film, Palette, Gamepad2, Eye, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Cube className="w-12 h-12" />,
      title: "Modelado 3D",
      description:
        "Creación de modelos 3D detallados para productos, arquitectura, personajes y objetos diversos con precisión técnica y calidad artística.",
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "Animación Digital",
      description:
        "Desarrollo de animaciones fluidas y expresivas para personajes, objetos y escenas, dando vida a tus ideas con movimiento realista.",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Texturizado y Materiales",
      description:
        "Aplicación de texturas realistas y materiales avanzados que aportan autenticidad y detalle a cada superficie y elemento 3D.",
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Assets para Videojuegos",
      description:
        "Creación de modelos optimizados y assets 3D específicamente diseñados para la industria del gaming y entretenimiento interactivo.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Visualización Arquitectónica",
      description:
        "Renders fotorrealistas de espacios arquitectónicos, interiores y exteriores que permiten visualizar proyectos antes de su construcción.",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Conceptualización Visual",
      description:
        "Desarrollo de conceptos visuales únicos y creativos que comunican ideas complejas de manera clara y atractiva.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Servicios</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrezco una amplia gama de servicios especializados en arte 3D y animación digital, adaptados a las
              necesidades específicas de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg lg:hover:shadow-xl lg:transition-all lg:duration-300 lg:transform lg:hover:-translate-y-2 text-center md:text-left"
              >
                <div className="text-blue-600 mb-6 flex justify-center md:justify-start">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 lg:hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold lg:transition-all lg:transform lg:hover:scale-105"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
