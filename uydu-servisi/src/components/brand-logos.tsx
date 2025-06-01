'use client'

import React from 'react'
import { Logos3 } from './logos3'

// Types
interface BrandLogo {
  name: string
  logo: string
}

// Constants
const BRAND_LOGOS: BrandLogo[] = [
  { name: 'Digitürk', logo: 'digiturk' },
  { name: 'Teledünya', logo: 'teledunya' },
  { name: 'Türksat', logo: 'turksat' },
  { name: 'D-Smart', logo: 'dsmart' },
  { name: 'TiviMate', logo: 'tivimate' },
  { name: 'Netflix', logo: 'netflix' },
  { name: 'Amazon Prime', logo: 'amazon-prime' },
  { name: 'Disney+', logo: 'disney-plus' },
  { name: 'BluTV', logo: 'blutv' },
  { name: 'Exxen', logo: 'exxen' },
  { name: 'Gain', logo: 'gain' },
  { name: 'Puhutv', logo: 'puhutv' }
] as const

export function BrandLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Çalıştığımız Markalar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Sektörün önde gelen markaları ile çalışarak size en kaliteli hizmeti sunuyoruz
          </p>
        </div>
        
        <Logos3 heading="" />
      </div>
    </section>
  )
} 