"use client"

import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import { useContactForm } from "../hooks/useContactForm"

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    canSubmit,
    handleChange,
    handleSubmit,
  } = useContactForm()

  const whatsappMessage = encodeURIComponent(
    "¡Hola Alan! Me interesa conocer más sobre tus servicios de arte 3D y animación digital. ¿Podríamos conversar sobre mi proyecto?",
  )

  const formatTime = (ms: number) => {
    const minutes = Math.ceil(ms / (60 * 1000))
    const hours = Math.ceil(ms / (60 * 60 * 1000))
    
    if (minutes < 60) return `${minutes} minuto${minutes !== 1 ? 's' : ''}`
    return `${hours} hora${hours !== 1 ? 's' : ''}`
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contacto</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Hablemos de tu Proyecto</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">alan.sio.lopez@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+54 11 6903-1345</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <div className="flex justify-center lg:justify-start mb-8">
                <a
                  href={`https://wa.me/5491169031345?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 lg:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold lg:transition-all lg:transform lg:hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Lunes a Viernes:</strong> 9:00 - 18:00
                  </p>
                  <p>
                    <strong>Sábados:</strong> 10:00 - 14:00
                  </p>
                  <p>
                    <strong>Domingos:</strong> Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un Mensaje</h3>

                {/* Error general o rate limit */}
                {errors.general && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center text-red-700">
                      <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{errors.general}</span>
                    </div>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-gray-600">Gracias por contactarme. Te responderé pronto.</p>
                  </div>
                ) : (
                  <form action="https://formspree.io/f/mdkdaazg" method="POST" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Tu nombre"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="+54 11 1234-5678"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                          Servicio de Interés
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="modelado-3d">Modelado 3D</option>
                          <option value="animacion">Animación Digital</option>
                          <option value="texturizado">Texturizado y Materiales</option>
                          <option value="videojuegos">Assets para Videojuegos</option>
                          <option value="arquitectura">Visualización Arquitectónica</option>
                          <option value="conceptualizacion">Conceptualización Visual</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje * <span className="text-gray-400 font-normal">({formData.message.length}/2500)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Cuéntame sobre tu proyecto..."
                        maxLength={1000}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />

                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className={`w-full px-6 py-4 rounded-lg font-semibold lg:transition-all lg:transform flex items-center justify-center ${
                        canSubmit && !isSubmitting
                          ? 'bg-blue-600 lg:hover:bg-blue-700 text-white lg:hover:scale-105'
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {canSubmit ? 'Enviar Mensaje' : 'Envío Limitado'}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
