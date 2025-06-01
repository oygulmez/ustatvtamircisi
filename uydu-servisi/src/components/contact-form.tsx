'use client'

import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, CheckCircle, AlertCircle } from 'lucide-react'

// Types
interface FormData {
  name: string
  phone: string
  message: string
  kvkkApproval: boolean
}

interface StatusState {
  type: 'success' | 'error' | null
  message: string
}

// Constants
const INITIAL_FORM_DATA: FormData = {
  name: '',
  phone: '',
  message: '',
  kvkkApproval: false
}

const INITIAL_STATUS: StatusState = {
  type: null,
  message: ''
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<StatusState>(INITIAL_STATUS)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }, [])

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA)
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(INITIAL_STATUS)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        resetForm()
      } else {
        setStatus({ type: 'error', message: data.error })
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Form gönderilirken bir hata oluştu.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, resetForm])

  const isFormValid = formData.name && formData.phone && formData.kvkkApproval

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-gray-900">
          <Phone className="w-5 h-5 text-red-600" />
          Sizi Arayalım
        </CardTitle>
        <CardDescription className="text-gray-600">
          Bilgilerinizi bırakın, size ulaşalım
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {status.type && (
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status.type === 'success' ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Ad Soyad *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adınız ve soyadınız"
              className="bg-white border-gray-300"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Telefon Numarası *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0532 000 00 00"
              className="bg-white border-gray-300"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Mesajınız <span className="text-gray-500">(opsiyonel)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Hangi konuda yardıma ihtiyacınız var?"
              className="bg-white border-gray-300 min-h-[80px] resize-none"
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              id="kvkkApproval"
              name="kvkkApproval"
              type="checkbox"
              checked={formData.kvkkApproval}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 disabled:opacity-50"
              required
              disabled={isSubmitting}
            />
            <Label htmlFor="kvkkApproval" className="text-xs text-gray-600 leading-tight cursor-pointer">
              <span className="text-red-600">*</span> KVKK metnini okudum ve kabul ediyorum. 
              Kişisel verilerimin işlenmesine onay veriyorum.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Gönderiliyor...
              </>
            ) : (
              'Gönder'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 