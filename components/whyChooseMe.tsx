"use client"

import { Zap, Users, Clock, Award, Palette, Lightbulb } from "lucide-react"

export default function WhyChooseMe() {
  const reasons = [
    {
      icon: Palette,
      title: "Creatividad Sin Límites",
      description: "Transformo ideas abstractas en realidades visuales impactantes que superan expectativas.",
      highlight: "100% Original"
    },
    {
      icon: Zap,
      title: "Tecnología de Vanguardia",
      description: "Utilizo las herramientas más avanzadas del mercado para resultados de calidad profesional.",
      highlight: "Última Tecnología"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada proyecto recibe atención individual con comunicación constante y transparente.",
      highlight: "Servicio 1:1"
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description: "Cumplimiento riguroso de plazos sin comprometer la calidad del resultado final.",
      highlight: "Siempre a Tiempo"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Cada detalle es pulido meticulosamente hasta alcanzar la perfección visual.",
      highlight: "Excelencia Total"
    },
    {
      icon: Lightbulb,
      title: "Soluciones Innovadoras",
      description: "Aporto ideas frescas y enfoques únicos que destacan tu proyecto de la competencia.",
      highlight: "Visión Única"
    },
  ]

  const stats = [
    { number: "24/7", label: "Soporte Disponible" },
    { number: "48h", label: "Tiempo de Respuesta" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Por Qué Elegir Mis Servicios?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las ventajas que hacen de cada proyecto una experiencia excepcional y resultados extraordinarios.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Razones principales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{reason.title}</h3>
                    <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo Para Dar Vida a Tu Visión?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Cada proyecto es una oportunidad de crear algo extraordinario. 
                Trabajemos juntos para convertir tus ideas en realidades visuales impactantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Iniciar Proyecto
                </button>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  Ver Portfolio
                </button>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
