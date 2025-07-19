import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      company: "TechVision",
      content:
        "El trabajo de Alan superó todas nuestras expectativas. Su atención al detalle y creatividad transformaron completamente nuestra presentación de producto.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Arquitecto",
      company: "Estudio AR",
      content:
        "Las visualizaciones arquitectónicas de Alan nos ayudaron a cerrar varios proyectos importantes. Su capacidad para dar vida a nuestros diseños es excepcional.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Game Designer",
      company: "Indie Games Studio",
      content:
        "Los assets 3D creados por Alan elevaron la calidad visual de nuestro juego. Su profesionalismo y cumplimiento de plazos son impecables.",
      rating: 5,
    },
  ]

  const highlights = [
    "Creatividad sin límites para dar vida a tus ideas",
    "Tecnología de vanguardia en cada proyecto",
    "Atención personalizada y comunicación constante",
    "Resultados que superan las expectativas",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lo Que Dicen Mis Clientes</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Testimonios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Frases Destacadas */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">¿Por Qué Elegir Mis Servicios?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
