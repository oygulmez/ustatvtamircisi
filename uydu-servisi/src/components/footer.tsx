import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

// Types
interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '0532 000 00 00',
    href: 'tel:05320000000'
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@istanbul-uydu-servisi.com',
    href: 'mailto:info@istanbul-uydu-servisi.com'
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'İstanbul, Türkiye'
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: '7/24 Hizmet'
  }
] as const

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Hizmetlerimiz',
    links: [
      { name: 'Uydu Kurulumu', href: '/hizmetler/uydu-kurulumu' },
      { name: 'Çanak Anten Servisi', href: '/hizmetler/canak-anten' },
      { name: 'TV Tamiri', href: '/hizmetler/tv-tamiri' },
      { name: 'Teknik Servis', href: '/hizmetler/teknik-servis' }
    ]
  },
  {
    title: 'Kurumsal',
    links: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Blog', href: '/blog' },
      { name: 'Referanslar', href: '/referanslar' },
      { name: 'İletişim', href: '/iletisim' }
    ]
  },
  {
    title: 'Hizmet Bölgeleri',
    links: [
      { name: 'Anadolu Yakası', href: '/bolgeler/anadolu-yakasi' },
      { name: 'Avrupa Yakası', href: '/bolgeler/avrupa-yakasi' },
      { name: 'Tüm İlçeler', href: '/bolgeler' },
      { name: 'Hizmet Haritası', href: '/hizmet-haritasi' }
    ]
  }
] as const

const LEGAL_LINKS: FooterLink[] = [
  { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
  { name: 'KVKK', href: '/kvkk' },
  { name: 'Kullanım Şartları', href: '/kullanim-sartlari' }
] as const

// Components
const ContactInfoItem = ({ item }: { item: ContactInfo }) => {
  const IconComponent = item.icon
  const content = (
    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
      <IconComponent className="h-5 w-5 text-red-500 flex-shrink-0" />
      <div>
        <div className="text-sm font-medium">{item.label}</div>
        <div className="text-sm">{item.value}</div>
      </div>
    </div>
  )

  if (item.href) {
    return (
      <a href={item.href} className="block">
        {content}
      </a>
    )
  }

  return content
}

const FooterSection = ({ section }: { section: FooterSection }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
    <ul className="space-y-2">
      {section.links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <ContactInfoItem key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}

        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} İstanbul Uydu Servisi. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-wrap gap-4">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 