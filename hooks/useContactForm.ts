"use client"

import { useState, useCallback } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  general?: string
}

interface UseContactFormReturn {
  formData: FormData
  errors: FormErrors
  isSubmitting: boolean
  isSubmitted: boolean
  canSubmit: boolean
  submissionCount: number
  timeUntilNextSubmission: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

const STORAGE_KEYS = {
  SUBMISSION_COUNT: 'contact_submissions_count',
  LAST_SUBMISSION: 'contact_last_submission',
  DAILY_COUNT: 'contact_daily_count',
  LAST_DAILY_RESET: 'contact_last_daily_reset'
}

// Límites de seguridad
const LIMITS = {
  MAX_SUBMISSIONS_PER_DAY: 3,
  MIN_TIME_BETWEEN_SUBMISSIONS: 5 * 60 * 1000, // 5 minutos
  MAX_MONTHLY_SUBMISSIONS: 45, // Reservamos 5 para emergencias
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validaciones
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true // Es opcional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const detectSpam = (data: FormData): boolean => {
    const spamKeywords = [
      'viagra', 'casino', 'lottery', 'winner', 'congratulations',
      'click here', 'free money', 'make money fast', 'work from home',
      'nigerian prince', 'inheritance', 'bitcoin', 'cryptocurrency'
    ]
    
    const textToCheck = `${data.name} ${data.message}`.toLowerCase()
    
    // Detectar palabras spam
    if (spamKeywords.some(keyword => textToCheck.includes(keyword))) {
      return true
    }

    // Detectar URLs sospechosas
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    const urls = textToCheck.match(urlRegex)
    if (urls && urls.length > 2) return true

    // Detectar repetición excesiva de caracteres
    if (/(.)\1{4,}/.test(textToCheck)) return true

    // Detectar mensajes muy cortos o sin sentido
    if (data.message.trim().length < 10) return true

    return false
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'El nombre no puede exceder 50 caracteres'
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    // Validar teléfono (opcional)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Ingresa un teléfono válido'
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    } else if (formData.message.trim().length > 2500) {
      newErrors.message = 'El mensaje no puede exceder 2500 caracteres'
    }

    // Detectar spam
    if (detectSpam(formData)) {
      newErrors.general = 'El mensaje ha sido detectado como spam. Por favor, revisa el contenido.'
    }

    return newErrors
  }

  // Rate limiting
  const checkRateLimit = (): { canSubmit: boolean; timeUntilNext: number; error?: string } => {
    const now = Date.now()
    
    // Verificar límite diario
    const lastDailyReset = localStorage.getItem(STORAGE_KEYS.LAST_DAILY_RESET)
    const dailyCount = parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_COUNT) || '0')
    
    const isNewDay = !lastDailyReset || now - parseInt(lastDailyReset) > 24 * 60 * 60 * 1000
    
    if (isNewDay) {
      localStorage.setItem(STORAGE_KEYS.DAILY_COUNT, '0')
      localStorage.setItem(STORAGE_KEYS.LAST_DAILY_RESET, now.toString())
    } else if (dailyCount >= LIMITS.MAX_SUBMISSIONS_PER_DAY) {
      const timeUntilReset = 24 * 60 * 60 * 1000 - (now - parseInt(lastDailyReset))
      return {
        canSubmit: false,
        timeUntilNext: timeUntilReset,
        error: `Límite diario alcanzado. Intenta nuevamente en ${Math.ceil(timeUntilReset / (60 * 60 * 1000))} horas.`
      }
    }

    // Verificar tiempo entre envíos
    const lastSubmission = localStorage.getItem(STORAGE_KEYS.LAST_SUBMISSION)
    if (lastSubmission) {
      const timeSinceLastSubmission = now - parseInt(lastSubmission)
      if (timeSinceLastSubmission < LIMITS.MIN_TIME_BETWEEN_SUBMISSIONS) {
        const timeUntilNext = LIMITS.MIN_TIME_BETWEEN_SUBMISSIONS - timeSinceLastSubmission
        return {
          canSubmit: false,
          timeUntilNext,
          error: `Por favor espera ${Math.ceil(timeUntilNext / (60 * 1000))} minutos antes del próximo envío.`
        }
      }
    }

    return { canSubmit: true, timeUntilNext: 0 }
  }

  const getSubmissionStats = () => {
    const dailyCount = parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_COUNT) || '0')
    const { canSubmit, timeUntilNext } = checkRateLimit()
    
    return {
      canSubmit,
      submissionCount: dailyCount,
      timeUntilNextSubmission: timeUntilNext
    }
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar formulario
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    // Verificar rate limiting
    const { canSubmit, error } = checkRateLimit()
    if (!canSubmit) {
      setErrors({ general: error })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Enviar formulario
      const formElement = e.target as HTMLFormElement
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: new FormData(formElement),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        // Actualizar contadores
        const now = Date.now()
        const dailyCount = parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_COUNT) || '0')
        localStorage.setItem(STORAGE_KEYS.DAILY_COUNT, (dailyCount + 1).toString())
        localStorage.setItem(STORAGE_KEYS.LAST_SUBMISSION, now.toString())

        setIsSubmitted(true)
        
        // Reset después de 5 segundos
        setTimeout(() => {
          setIsSubmitted(false)
          resetForm()
        }, 5000)
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      setErrors({ general: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
    setErrors({})
  }

  const stats = getSubmissionStats()

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    canSubmit: stats.canSubmit,
    submissionCount: stats.submissionCount,
    timeUntilNextSubmission: stats.timeUntilNextSubmission,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
