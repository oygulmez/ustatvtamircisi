import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FloatingButtons } from '@/components/floating-buttons'
import { 
  Users, 
  Clock, 
  Shield, 
  Star,
  Satellite,
  CheckCircle,
  Phone,
  Wrench
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda | İstanbul Uydu Servisi',
  description: 'İstanbul Uydu Servisi olarak 15+ yıldır İstanbul\'un tüm ilçelerinde profesyonel uydu, çanak anten ve televizyon servisi hizmetleri sunuyoruz.',
  keywords: ['istanbul uydu servisi hakkında', 'uydu servisi firma', 'çanak anten servisi', 'televizyon servisi'],
}

export default function HakkimizdaPage() {
  const stats = [
    {
      icon: Users,
      number: '15+',
      label: 'Yıl Deneyim'
    },
    {
      icon: Star,
      number: '5000+',
      label: 'Mutlu Müşteri'
    },
    {
      icon: CheckCircle,
      number: '99%',
      label: 'Başarı Oranı'
    },
    {
      icon: Clock,
      number: '7/24',
      label: 'Hizmet'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Tüm işlerimizde güvenilir ve kaliteli hizmet anlayışı ile çalışıyoruz.'
    },
    {
      icon: Clock,
      title: 'Hızlı Servis',
      description: 'Acil durumlarda hızlı müdahale ile sorununuzu en kısa sürede çözüyoruz.'
    },
    {
      icon: Star,
      title: 'Kalite',
      description: 'En kaliteli malzemeler ve modern teknikler ile uzun ömürlü çözümler sunuyoruz.'
    },
    {
      icon: Satellite,
      title: 'Uzmanlık',
      description: 'Uydu, çanak anten ve televizyon konularında uzman teknik ekibimiz bulunuyor.'
    }
  ]

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              2008 yılından bu yana İstanbul'da uydu servisi, çanak anten kurulumu ve 
              televizyon tamiri konularında hizmet veren deneyimli bir firmayız. 
              İstanbul'un 39 ilçesinde 7/24 hızlı ve güvenilir servis sunuyoruz.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  İstanbul Uydu Servisi olarak 2008 yılında küçük bir ekiple başladığımız 
                  yolculuğumuzda, bugün İstanbul'un en güvenilir uydu servisi firmalarından 
                  biri haline geldik.
                </p>
                <p>
                  15+ yıllık deneyimimizle binlerce müşteriye hizmet verdik ve her geçen gün 
                  büyüyen ekibimizle kaliteli hizmet anlayışımızı sürdürüyoruz.
                </p>
                <p>
                  Modern teknoloji ve geleneksel işçiliği birleştirerek, müşterilerimize 
                  en iyi çözümleri sunmayı hedefliyoruz.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Misyonumuz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  İstanbul'da yaşayan herkesin kaliteli televizyon yayını alabilmesi için 
                  profesyonel uydu servisi, çanak anten kurulumu ve televizyon tamiri 
                  hizmetleri sunmak.
                </p>
                <p>
                  Hızlı, güvenilir ve uygun fiyatlı hizmet anlayışımızla müşteri memnuniyetini 
                  en üst seviyede tutmak.
                </p>
                <p>
                  Teknolojinin gelişimine ayak uydurarak, modern çözümler ve yenilikçi 
                  hizmetler sunmak.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Uzman Ekibimiz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Alanında uzman, deneyimli ve sürekli kendini geliştiren teknik personelimizle 
              size en iyi hizmeti sunmak için çalışıyoruz. Tüm ekip üyelerimiz sertifikalı 
              ve düzenli eğitimlerle güncel teknolojileri takip etmektedir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Teknik Personel</div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Yıl Ortalama Deneyim</div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">%100</div>
                <div className="text-sm text-gray-600">Sertifikalı Teknisyen</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
} 