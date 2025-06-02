import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { BrandLogos } from '@/components/brand-logos'
import { FloatingButtons } from '@/components/floating-buttons'
import { 
  Satellite, 
  Phone, 
  Clock, 
  Shield, 
  Star,
  MapPin,
  Wrench,
  Tv,
  Radio,
  ChevronRight
} from 'lucide-react'

// Constants
const SERVICES = [
  {
    icon: Satellite,
    title: 'Uydu Kurulumu',
    description: 'Profesyonel uydu kurulumu ve ayarlama hizmetleri',
    link: '/hizmetler/uydu-kurulumu'
  },
  {
    icon: Radio,
    title: 'Çanak Anten Servisi',
    description: 'Çanak anten kurulumu, tamiri ve bakım hizmetleri',
    link: '/hizmetler/canak-anten'
  },
  {
    icon: Tv,
    title: 'Televizyon Tamiri',
    description: 'Tüm marka televizyon tamiri ve bakım hizmetleri',
    link: '/hizmetler/tv-tamiri'
  },
  {
    icon: Wrench,
    title: 'Teknik Servis',
    description: '7/24 hızlı teknik servis ve destek hizmetleri',
    link: '/hizmetler/teknik-servis'
  }
] as const

const FEATURES = [
  {
    icon: Clock,
    title: '7/24 Hizmet',
    description: 'Hafta sonu dahil 24 saat hizmet veriyoruz'
  },
  {
    icon: Shield,
    title: 'Garantili Hizmet',
    description: 'Tüm işlerimize 1 yıl garanti veriyoruz'
  },
  {
    icon: Star,
    title: 'Deneyimli Ekip',
    description: '15+ yıl deneyimli teknik ekibimiz'
  },
  {
    icon: MapPin,
    title: 'Tüm İstanbul',
    description: 'İstanbul\'un 39 ilçesinde hizmet veriyoruz'
  }
] as const

const DISTRICTS = [
  'Kadıköy', 'Beşiktaş', 'Şişli', 'Fatih', 'Beyoğlu', 'Üsküdar',
  'Bakırköy', 'Zeytinburnu', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla',
  'Ataşehir', 'Başakşehir', 'Beylikdüzü', 'Büyükçekmece'
] as const

const STATS = [
  { value: '15+', label: 'Yıllık Deneyim' },
  { value: '45', label: 'Dakika İçinde Servis' },
  { value: '39', label: 'İlçeye Kesintisiz Hizmet' }
] as const

// Components
const HeroSection = () => (
  <section className="relative min-h-[700px] bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover opacity-30"
        src="/images/hero/slider-1.jpg"
        alt="Usta TV Tamircisi"
        loading="eager"
        />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
    </div>
    
    {/* Content */}
    <div className="relative z-10 min-h-[600px] md:min-h-[700px] flex items-center py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium lg:justify-start justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              15+ Yıl Deneyim
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight lg:leading-none px-2 sm:px-0">
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                2 Yıl Garantili
              </span>{" "}
              <span className="whitespace-nowrap">ve</span>
              <br />
              <span>Faturalı Hizmet</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Usta TV Tamircisi olarak 2 yıl garantili ve faturalı hizmet sunuyoruz.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start px-2 sm:px-0">
              <Button asChild className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/hizmetler" className="flex items-center gap-2 justify-center">
                  <Wrench className="w-4 h-4" />
                  Hizmetlerimiz
                </Link>
              </Button>
              
              <Button asChild className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl transition-all duration-300">
                <Link href="/iletisim" className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  İletişim
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              {STATS.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  </section>
)

const FeaturesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Neden Bizi Tercih Etmelisiniz?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Profesyonel ekibimiz ve kaliteli hizmet anlayışımızla size en iyi deneyimi sunuyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ServicesSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Hizmetlerimiz
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          İstanbul'da uydu, çanak anten ve televizyon servisi konusunda 
          profesyonel çözümler sunuyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-base md:text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center mb-4 text-sm">
                {service.description}
              </CardDescription>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href={service.link}>
                  Detay
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const ServiceAreasSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Hizmet Verdiğimiz İlçeler
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          İstanbul'un tüm ilçelerinde hızlı ve kaliteli servis hizmeti veriyoruz.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {DISTRICTS.map((district) => (
          <Link
            key={district}
            href={`/bolgeler/${district.toLowerCase()}`}
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <span className="text-sm font-medium">{district}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-16 bg-blue-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Hızlı Servis İçin Hemen Arayın
      </h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
        Uydu, çanak anten veya televizyon sorununuz için profesyonel ekibimiz 
        size yardımcı olmaya hazır. Ücretsiz keşif ve uygun fiyat garantisi.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link href="tel:05320000000">
            <Phone className="mr-2 h-5 w-5" />
            0532 000 00 00
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
          <Link href="/iletisim">
            Online Randevu
          </Link>
        </Button>
      </div>
        </div>
  </section>
)

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <BrandLogos />
        <FeaturesSection />
        <ServicesSection />
        <ServiceAreasSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
