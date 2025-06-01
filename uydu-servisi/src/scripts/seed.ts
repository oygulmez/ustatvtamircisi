import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Admin kullanıcısı oluştur
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@istanbul-uydu-servisi.com' },
    update: {},
    create: {
      email: 'admin@istanbul-uydu-servisi.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin'
    }
  })

  console.log('Admin kullanıcısı oluşturuldu:', admin.email)

  // Örnek blog yazısı oluştur
  const post = await prisma.post.upsert({
    where: { slug: 'istanbul-uydu-servisi-hakkinda' },
    update: {},
    create: {
      title: 'İstanbul Uydu Servisi Hakkında',
      slug: 'istanbul-uydu-servisi-hakkinda',
      content: `
        <p>İstanbul Uydu Servisi olarak, İstanbul'un tüm ilçelerinde profesyonel uydu kurulumu, çanak anten servisi ve televizyon tamiri hizmetleri sunuyoruz.</p>
        
        <h2>Hizmetlerimiz</h2>
        <ul>
          <li>Uydu kurulumu ve ayarlama</li>
          <li>Çanak anten kurulumu</li>
          <li>Televizyon tamiri</li>
          <li>Sinyal güçlendirici kurulumu</li>
          <li>Merkezi sistem kurulumu</li>
        </ul>

        <h2>Hizmet Verdiğimiz İlçeler</h2>
        <p>İstanbul'un 39 ilçesinde 7/24 hızlı servis hizmeti veriyoruz. Kadıköy, Beşiktaş, Şişli, Fatih, Beyoğlu ve diğer tüm ilçelerde profesyonel ekibimizle yanınızdayız.</p>

        <p>Kaliteli hizmet ve uygun fiyat garantisi ile müşteri memnuniyetini ön planda tutuyoruz.</p>
      `,
      excerpt: 'İstanbul Uydu Servisi olarak, İstanbul\'un tüm ilçelerinde profesyonel uydu kurulumu, çanak anten servisi ve televizyon tamiri hizmetleri sunuyoruz.',
      published: true,
      publishedAt: new Date(),
      metaTitle: 'İstanbul Uydu Servisi Hakkında | Profesyonel Hizmet',
      metaDescription: 'İstanbul\'da uydu servisi, çanak anten kurulumu ve televizyon tamiri konusunda 15+ yıl deneyimli profesyonel ekibimiz.',
      metaKeywords: 'istanbul uydu servisi, çanak anten, televizyon tamiri, uydu kurulumu',
      category: 'haberler',
      tags: JSON.stringify(['uydu servisi', 'çanak anten', 'televizyon tamiri']),
      authorId: admin.id
    }
  })

  console.log('Örnek blog yazısı oluşturuldu:', post.title)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 