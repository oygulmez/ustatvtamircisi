import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FloatingButtons } from '@/components/floating-buttons'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'İletişim | İstanbul Uydu Servisi',
  description: 'İstanbul Uydu Servisi ile iletişime geçin. 7/24 hızlı servis için hemen arayın. Ücretsiz keşif ve uygun fiyat garantisi.',
  keywords: ['istanbul uydu servisi iletişim', 'uydu servisi telefon', 'çanak anten servis', 'televizyon tamiri'],
}

export default function IletisimPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [
        '0532 000 00 00',
        '7/24 Hızlı Servis'
      ],
      action: 'tel:05320000000'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: [
        '0532 000 00 00',
        'Anında Mesajlaşma'
      ],
      action: 'https://wa.me/905320000000'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: [
        'info@istanbul-uydu-servisi.com',
        'Teknik Destek'
      ],
      action: 'mailto:info@istanbul-uydu-servisi.com'
    },
    {
      icon: MapPin,
      title: 'Hizmet Alanı',
      details: [
        'İstanbul Tüm İlçeler',
        'Anadolu & Avrupa Yakası'
      ]
    }
  ]

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '08:00 - 22:00' },
    { day: 'Cumartesi', hours: '08:00 - 20:00' },
    { day: 'Pazar', hours: '09:00 - 18:00' },
    { day: 'Acil Servis', hours: '7/24 Açık' }
  ]

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uydu servisi, çanak anten kurulumu veya televizyon tamiri için 
              profesyonel ekibimizle iletişime geçin. Ücretsiz keşif ve uygun fiyat garantisi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <div className="space-y-1">
                            {item.details.map((detail, i) => (
                              <p key={i} className="text-sm text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                          {item.action && (
                            <Button 
                              asChild 
                              variant="outline" 
                              size="sm" 
                              className="mt-3"
                            >
                              <a 
                                href={item.action}
                                target={item.action.startsWith('http') ? '_blank' : undefined}
                                rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                İletişime Geç
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Çalışma Saatleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Acil Durumlarda:</strong> 7/24 hızlı servis hizmeti vermekteyiz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Ücretsiz Keşif Talebi</CardTitle>
                  <p className="text-gray-600">
                    Formunu doldurun, size en kısa sürede dönüş yapalım.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input id="name" placeholder="Adınız ve soyadınız" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input id="phone" type="tel" placeholder="0532 000 00 00" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="email@ornek.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="district">İlçe *</Label>
                      <Input id="district" placeholder="Hangi ilçedesiniz?" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Hizmet Türü *</Label>
                      <select 
                        id="service" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Hizmet türünü seçin</option>
                        <option value="uydu-servisi">Uydu Servisi</option>
                        <option value="canak-anten">Çanak Anten Servisi</option>
                        <option value="tv-servisi">TV Servisi</option>
                        <option value="genel-bakim">Genel Bakım</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Sorunuz veya isteklerinizi detaylı olarak açıklayın..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Ücretsiz Keşif Talebi Gönder
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Kişisel verileriniz 
                      <a href="/kvkk" className="text-blue-600 hover:underline"> KVKK </a> 
                      kapsamında korunmaktadır.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/905320000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp'tan Yaz
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:05320000000">
                    <Phone className="mr-2 h-5 w-5" />
                    Hemen Ara
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Hizmet Verdiğimiz Bölgeler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Anadolu Yakası</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• Kadıköy</span>
                    <span>• Üsküdar</span>
                    <span>• Maltepe</span>
                    <span>• Kartal</span>
                    <span>• Pendik</span>
                    <span>• Tuzla</span>
                    <span>• Ataşehir</span>
                    <span>• Ümraniye</span>
                    <span>• Çekmeköy</span>
                    <span>• Sancaktepe</span>
                    <span>• Sultanbeyli</span>
                    <span>• Şile</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Avrupa Yakası</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• Beşiktaş</span>
                    <span>• Şişli</span>
                    <span>• Fatih</span>
                    <span>• Beyoğlu</span>
                    <span>• Bakırköy</span>
                    <span>• Zeytinburnu</span>
                    <span>• Başakşehir</span>
                    <span>• Beylikdüzü</span>
                    <span>• Büyükçekmece</span>
                    <span>• Avcılar</span>
                    <span>• Küçükçekmece</span>
                    <span>• Bahçelievler</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
} 