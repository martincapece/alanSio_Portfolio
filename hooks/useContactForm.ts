"use client"

import { useState, useCallback, useRef } from 'react'

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
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
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
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  // In-memory rate limiting
  const lastSubmissionRef = useRef<number | null>(null)
  const submissionCountRef = useRef<number>(0)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true
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

    if (spamKeywords.some(keyword => textToCheck.includes(keyword))) return true
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    const urls = textToCheck.match(urlRegex)
    if (urls && urls.length > 2) return true
    if (/(.)\1{4,}/.test(textToCheck)) return true
    if (data.message.trim().length < 10) return true

    return false
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'El nombre no puede exceder 50 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Ingresa un teléfono válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    } else if (formData.message.trim().length > 2500) {
      newErrors.message = 'El mensaje no puede exceder 2500 caracteres'
    }

    if (detectSpam(formData)) {
      newErrors.general = 'El mensaje ha sido detectado como spam. Por favor, revisa el contenido.'
    }

    return newErrors
  }

  const canSubmit = (() => {
    const now = Date.now()
    if (lastSubmissionRef.current && now - lastSubmissionRef.current < 5 * 60 * 1000) {
      return false
    }
    if (submissionCountRef.current >= 3) {
      return false
    }
    return true
  })()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!captchaValue) {
      setErrors({ general: "Por favor completá el reCAPTCHA antes de enviar." })
      return
    }

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    if (!canSubmit) {
      setErrors({ general: 'Has alcanzado el límite de envíos. Intenta nuevamente más tarde.' })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const formElement = e.target as HTMLFormElement
      const formDataToSend = new FormData(formElement)
      formDataToSend.append("g-recaptcha-response", captchaValue!)
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        lastSubmissionRef.current = Date.now()
        submissionCountRef.current++
        setIsSubmitted(true)

        setTimeout(() => {
          setIsSubmitted(false)
          setCaptchaValue(null)
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

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    canSubmit,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
