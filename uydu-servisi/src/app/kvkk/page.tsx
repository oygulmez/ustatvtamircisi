import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, FileText, Lock, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KVKK | İstanbul Uydu Servisi',
  description: 'İstanbul Uydu Servisi KVKK (Kişisel Verilerin Korunması Kanunu) aydınlatma metni ve gizlilik politikası.',
  keywords: ['kvkk', 'kişisel veriler', 'gizlilik politikası', 'veri korunması'],
}

export default function KVKKPage() {
  const principles = [
    {
      icon: Lock,
      title: 'Güvenlik',
      description: 'Kişisel verileriniz en üst düzey güvenlik standartları ile korunmaktadır.'
    },
    {
      icon: Eye,
      title: 'Şeffaflık',
      description: 'Verilerinizin nasıl işlendiği konusunda size tam şeffaflık sağlıyoruz.'
    },
    {
      icon: Shield,
      title: 'Gizlilik',
      description: 'Verileriniz sadece belirtilen amaçlar doğrultusunda kullanılmaktadır.'
    },
    {
      icon: FileText,
      title: 'Yasal Uyum',
      description: 'KVKK ve ilgili tüm yasal düzenlemelere tam uyum sağlıyoruz.'
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
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kişisel Verilerin Korunması Kanunu kapsamında verilerinizin güvenliği 
              ve gizliliği önceliğimizdir.
            </p>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-3">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Veri Sorumlusu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                  İstanbul Uydu Servisi olarak kişisel verileriniz tarafımızdan toplanmakta 
                  ve işlenmektedir. Bu aydınlatma metni ile kişisel verilerinizin hangi 
                  amaçlarla toplandığı, işlendiği ve kimlerle paylaşıldığı konularında 
                  sizi bilgilendirmeyi amaçlıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Kişisel Verilerin Toplanma Yöntemi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Web sitemizdeki iletişim formları aracılığıyla</li>
                    <li>Telefon görüşmeleri sırasında</li>
                    <li>WhatsApp ve diğer mesajlaşma platformları üzerinden</li>
                    <li>E-posta ile yapılan yazışmalar</li>
                    <li>Hizmet sağlama sürecinde doğrudan iletişim</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. İşlenen Kişisel Veri Türleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <p>Tarafımızca işlenen kişisel veriler şunlardır:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ad, soyad</li>
                    <li>Telefon numarası</li>
                    <li>E-posta adresi</li>
                    <li>Adres bilgileri (hizmet adresi)</li>
                    <li>Hizmet talep detayları</li>
                    <li>Talep tarihi ve saati</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Kişisel Verilerin İşlenme Amaçları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hizmet talebinizi değerlendirmek ve size uygun çözüm sunmak</li>
                    <li>Teknik servis hizmeti sağlamak</li>
                    <li>Size ulaşarak randevu planlamak</li>
                    <li>Hizmet kalitesini artırmak için geri bildirim almak</li>
                    <li>Yasal yükümlülükleri yerine getirmek</li>
                    <li>Müşteri memnuniyetini ölçmek</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Kişisel Verilerin Paylaşılması</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Kişisel verileriniz, hizmet kalitesini artırmak, yasal yükümlülükleri 
                  yerine getirmek ve işbirliği içinde olduğumuz teknik servis ekiplerimiz 
                  ile paylaşılabilir. Verileriniz hiçbir şekilde üçüncü kişilere ticari 
                  amaçla satılmaz veya devredilmez.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Kişisel Verilerin Saklanma Süresi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve 
                  yasal düzenlemelerde öngörülen süreler dikkate alınarak saklanır. 
                  Bu süre sonunda verileriniz güvenli bir şekilde imha edilir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Kişisel Veri Sahibinin Hakları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kişisel verilerin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenen kişisel veriler hakkında bilgi talep etme</li>
                    <li>Kişisel verilerin işlenme amacını öğrenme</li>
                    <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                    <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhine çıkan sonuçlara itiraz etme</li>
                    <li>Kişisel verilerin kanuna aykırı işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. İletişim</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki iletişim 
                    kanallarından bize ulaşabilirsiniz:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>E-posta:</strong> kvkk@istanbul-uydu-servisi.com</p>
                    <p><strong>Telefon:</strong> 0532 000 00 00</p>
                    <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                  </div>
                  <p className="text-sm">
                    Talebinizin niteliğine göre kimliğinizi doğrulayabileceğimiz 
                    bilgiler talep edilebilir. Talebiniz en kısa sürede 
                    değerlendirilecek ve 30 gün içinde yanıtlanacaktır.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Güvenlik Önlemleri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Kişisel verilerinizin güvenliği için uygun teknik ve idari tedbirler 
                  alınmıştır. Verileriniz şifreleme, güvenli bağlantı protokolleri ve 
                  erişim kontrolleri ile korunmaktadır. Yetkisiz erişim, kayıp veya 
                  ifşa edilmeye karşı gerekli önlemler alınmıştır.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Değişiklikler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Bu aydınlatma metni gerekli durumlarda güncellenebilir. 
                  Değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer. 
                  Önemli değişikliklerde size bilgilendirme yapılacaktır.
                </p>
                <p className="text-sm mt-4 text-gray-500">
                  <strong>Son güncelleme:</strong> 01 Haziran 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 