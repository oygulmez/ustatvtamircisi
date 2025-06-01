'use client'

import React from 'react'
import { Satellite, Phone, MapPin, Wrench, Tv, Radio, Menu } from 'lucide-react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Types
interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactElement
  items?: MenuItem[]
}

interface TopbarLink {
  name: string
  url: string
}

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
  </svg>
)

// Constants
const MENU_ITEMS: MenuItem[] = [
  { title: "Anasayfa", url: "/" },
  {
    title: "Kurumsal",
    url: "/hakkimizda",
    items: [
      {
        title: "Hakkımızda",
        description: "Şirketimiz, vizyonumuz ve değerlerimiz hakkında bilgi alın",
        icon: <MapPin className="size-5 shrink-0" />,
        url: "/hakkimizda",
      },
      {
        title: "Blog",
        description: "Uydu teknolojileri ve sektör hakkında güncel yazılar",
        icon: <Wrench className="size-5 shrink-0" />,
        url: "/blog",
      },
      {
        title: "Referanslar",
        description: "Başarılı projelerimiz ve müşteri memnuniyeti hikayeleri",
        icon: <Tv className="size-5 shrink-0" />,
        url: "/referanslar",
      },
      {
        title: "İletişim",
        description: "Bizimle iletişime geçin, ücretsiz keşif talep edin",
        icon: <Phone className="size-5 shrink-0" />,
        url: "/iletisim",
      },
    ],
  },
  {
    title: "Hizmetlerimiz",
    url: "/hizmetler",
    items: [
      {
        title: "Uydu Servisi",
        description: "Profesyonel uydu kurulumu ve ayarlama hizmetleri",
        icon: <Satellite className="size-5 shrink-0" />,
        url: "/hizmetler/uydu-servisi",
      },
      {
        title: "TV Servisi", 
        description: "Televizyon tamiri ve bakım hizmetleri",
        icon: <Tv className="size-5 shrink-0" />,
        url: "/hizmetler/tv-servisi",
      },
      {
        title: "Çanak Anten Servisi",
        description: "Çanak anten kurulumu, tamiri ve bakım hizmetleri",
        icon: <Radio className="size-5 shrink-0" />,
        url: "/hizmetler/canak-anten-servisi",
      },
    ],
  },
  {
    title: "Hizmet Bölgelerimiz",
    url: "/hizmet-bolgelerimiz",
    items: [
      {
        title: "Anadolu Yakası",
        description: "Kadıköy, Üsküdar, Maltepe, Kartal, Pendik",
        icon: <MapPin className="size-5 shrink-0" />,
        url: "/hizmet-bolgelerimiz/anadolu-yakasi",
      },
      {
        title: "Avrupa Yakası",
        description: "Beşiktaş, Şişli, Fatih, Beyoğlu, Bakırköy",
        icon: <MapPin className="size-5 shrink-0" />,
        url: "/hizmet-bolgelerimiz/avrupa-yakasi",
      },
      {
        title: "Tümünü Gör",
        description: "İstanbul'un tüm ilçe ve mahallelerini görüntüleyin",
        icon: <MapPin className="size-5 shrink-0" />,
        url: "/hizmet-bolgelerimiz/tumunu-gor",
      },
    ],
  },
] as const

const TOPBAR_LINKS: TopbarLink[] = [
  { name: "Blog", url: "/blog" },
  { name: "İletişim", url: "/iletisim" },
  { name: "KVKK", url: "/kvkk" },
] as const

const CONTACT_INFO = {
  phone: "05320000000",
  whatsapp: "905320000000"
} as const

// Components
const Logo = ({ width = 200, className = "" }: { width?: number; className?: string }) => (
  <Image 
    src="/images/logos/ustatvtamircisi-logo-.svg" 
    alt="İstanbul Uydu Servisi"
    width={width}
    height={0}
    className={`w-[${width}px] h-auto ${className}`}
    priority
  />
)

const ContactButtons = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={`flex ${isMobile ? 'flex-col w-full' : 'items-center'} gap-3`}>
    <Button 
      asChild 
      variant="outline" 
      size="sm" 
      className={`${isMobile ? 'w-full bg-green-600 hover:bg-green-700 text-white' : 'border-green-600 text-green-600 hover:bg-green-50'}`}
    >
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
      >
        <WhatsAppIcon className="mr-2 h-4 w-4" />
        {isMobile ? 'WhatsApp İletişim' : 'WhatsApp'}
      </a>
    </Button>
    <Button 
      asChild 
      size="sm" 
      className={`bg-black hover:bg-gray-800 text-white ${isMobile ? 'w-full' : ''}`}
    >
      <a href={`tel:${CONTACT_INFO.phone}`} aria-label="Telefon ile arayın">
        <Phone className="mr-2 h-4 w-4" />
        Şimdi Arayın
      </a>
    </Button>
  </div>
)

const renderMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-medium text-sm text-gray-800 hover:text-red-600 hover:bg-red-50 transition-all duration-300 px-3 py-2 rounded-lg">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[600px] p-0 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="flex">
              {/* Sol taraf - Ana başlık bölümü */}
              <div className="w-[240px] p-6 bg-gray-50 rounded-l-lg border-r border-gray-200">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.title === 'Hizmetlerimiz' 
                      ? 'Profesyonel uydu ve televizyon servisi hizmetlerimiz.' 
                      : 'İstanbul genelinde kaliteli hizmet sunuyoruz.'
                    }
                  </p>
                </div>
              </div>
              
              {/* Sağ taraf - Menü öğeleri */}
              <div className="flex-1 p-6">
                <div className="space-y-4">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.url}
                      className="group block p-3 rounded-md hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center group-hover:bg-red-50 transition-colors">
                          <div className="h-4 w-4 text-gray-600 group-hover:text-red-600">
                            {subItem.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                            {subItem.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Alt kısım - Ek bilgiler */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="text-xs text-gray-500">
                      <div className="font-medium text-gray-700">7/24</div>
                      <div>Hızlı Servis</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <div className="font-medium text-gray-700">Ücretsiz</div>
                      <div>Keşif</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <div className="font-medium text-gray-700">Garantili</div>
                      <div>Fiyat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-3 py-2 text-sm font-medium transition-all duration-300 text-gray-800 hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger className="text-base font-medium text-gray-800">
          {item.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="ml-4 space-y-3">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                href={subItem.url}
                className="block space-y-1 rounded-md p-2 hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  {subItem.icon}
                  <span className="text-sm font-medium text-gray-800">{subItem.title}</span>
                </div>
                {subItem.description && (
                  <p className="text-xs text-gray-600">
                    {subItem.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <div key={item.title}>
      <a
        href={item.url}
        className="block py-2 text-base font-medium text-gray-800 hover:text-red-600"
      >
        {item.title}
      </a>
    </div>
  )
}

export function Header() {
  return (
    <>
      {/* Topbar */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between" style={{ fontSize: '13px' }}>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>İstanbul'un tüm ilçe ve mahallelerine hizmet vermekteyiz.</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {TOPBAR_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center py-2">
                <Logo />
              </a>
              <div className="flex items-center" style={{ fontSize: '14px' }}>
                <NavigationMenu>
                  <NavigationMenuList className="gap-0">
                    {MENU_ITEMS.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <ContactButtons />
          </nav>
          
          {/* Mobile Navigation */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center py-2">
                <Logo width={180} />
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-300">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-white">
                  <SheetHeader>
                    <SheetTitle>
                      <a href="/" className="flex items-center gap-2">
                        <Logo width={160} />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion type="single" collapsible className="w-full">
                      {MENU_ITEMS.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    
                    <div className="space-y-2 border-t pt-4">
                      {TOPBAR_LINKS.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          className="block py-2 text-sm text-gray-600 hover:text-red-600"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                    
                    <div className="space-y-3 border-t pt-4">
                      <ContactButtons isMobile />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 