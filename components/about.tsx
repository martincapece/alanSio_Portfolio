import { GraduationCap, Award, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Mí</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
              src="/profiles/pf_AlanSio.jpg"
              alt="Alan Sio - Artista 3D"
              className="rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Técnico en Animación y Arte Digital</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soy Alan Sio, recién graduado como Técnico en Animación y Arte Digital de la Universidad Nacional de La
                Matanza (UNLAM). Mi pasión por el arte digital y la tecnología 3D me ha llevado a especializarme en la
                creación de contenido visual impactante y experiencias inmersivas.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Con una sólida formación académica y un enfoque creativo innovador, me dedico a transformar conceptos
                abstractos en realidades visuales tangibles, utilizando las últimas herramientas y técnicas del arte
                digital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Formación</h4>
                  <p className="text-sm text-gray-600">UNLAM</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Especialización</h4>
                  <p className="text-sm text-gray-600">Arte 3D</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800">Enfoque</h4>
                  <p className="text-sm text-gray-600">Innovación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
