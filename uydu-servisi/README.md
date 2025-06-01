# İstanbul Uydu Servisi

İstanbul'da uydu servisi, çanak anten kurulumu ve televizyon tamiri hizmetleri veren profesyonel servis şirketinin modern web sitesi.

## 🚀 Özellikler

- **Modern UI/UX**: Shadcn UI ve Tailwind CSS ile tasarlanmış responsive tasarım
- **SEO Optimize**: Next.js 15 ile tam SEO desteği
- **Blog Sistemi**: Dinamik blog yazıları ve kategori yönetimi
- **Admin Paneli**: NextAuth.js ile güvenli yönetim paneli
- **İletişim Formu**: Müşteri talepleri için entegre form sistemi
- **Hızlı Performans**: Turbopack ve optimizasyonlar ile hızlı yükleme
- **TypeScript**: Tip güvenliği için tam TypeScript desteği

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4, Shadcn UI
- **Database**: SQLite + Prisma ORM
- **Authentication**: NextAuth.js
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form + Zod validation

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm 8+

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd uydu-servisi
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Environment dosyasını oluşturun**
   ```bash
   cp .env.example .env.local
   ```

4. **Veritabanını hazırlayın**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

Site http://localhost:3000 adresinde çalışacaktır.

## 🗂️ Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin paneli rotaları
│   ├── api/               # API rotaları
│   ├── blog/              # Blog sayfaları
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── ui/               # Shadcn UI bileşenleri
│   ├── header.tsx        # Site başlığı
│   ├── footer.tsx        # Site alt bilgisi
│   └── ...
├── lib/                  # Yardımcı fonksiyonlar
├── types/                # TypeScript tip tanımları
└── scripts/              # Veritabanı seed scriptleri
```

## 🎨 UI Bileşenleri

Proje Shadcn UI kütüphanesini kullanır. Yeni bileşen eklemek için:

```bash
npx shadcn@latest add [component-name]
```

### Mevcut Bileşenler

- Button, Input, Label, Textarea
- Card, Dialog, Sheet
- Navigation Menu, Accordion
- Form validation (React Hook Form + Zod)

## 📊 Veritabanı

### Modeller

- **User**: Admin kullanıcıları
- **Post**: Blog yazıları
- **Category**: Blog kategorileri

### Komutlar

```bash
# Veritabanını güncelle
npm run db:push

# Seed data ekle
npm run db:seed

# Prisma Studio aç
npm run db:studio

# Migration oluştur
npm run db:migrate
```

## 🔐 Admin Paneli

Admin paneline erişim için:

- **URL**: `/admin`
- **Email**: `admin@istanbul-uydu-servisi.com`
- **Şifre**: `admin123`

### Admin Özellikleri

- Blog yazısı ekleme/düzenleme/silme
- Kategori yönetimi
- İletişim formları görüntüleme
- SEO ayarları

## 🚀 Deployment

### Vercel (Önerilen)

1. Vercel hesabınıza giriş yapın
2. Projeyi import edin
3. Environment variables ekleyin
4. Deploy edin

### Environment Variables

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL="file:./dev.db"
```

## 📱 Responsive Tasarım

- **Mobile First**: Mobil cihazlar öncelikli tasarım
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Dokunmatik cihazlar için optimize edilmiş

## ⚡ Performans Optimizasyonları

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik kod bölme
- **Lazy Loading**: Gecikmeli yükleme
- **Font Optimization**: Geist font ailesi
- **Bundle Analysis**: `npm run analyze`

## 🧪 Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Code formatting
npm run format
npm run format:check

# Temizlik
npm run clean
```

## 📝 SEO Özellikleri

- **Meta Tags**: Dinamik meta etiketleri
- **Open Graph**: Sosyal medya paylaşımları
- **JSON-LD**: Yapılandırılmış veri
- **Sitemap**: Otomatik sitemap oluşturma
- **Robots.txt**: Arama motoru yönergeleri

## 🎯 Hizmet Alanları

- Uydu kurulumu ve ayarlama
- Çanak anten servisi
- Televizyon tamiri
- Sinyal güçlendirici kurulumu
- Merkezi sistem kurulumu
- 7/24 teknik destek

## 📞 İletişim

- **Telefon**: 0532 000 00 00
- **Email**: info@istanbul-uydu-servisi.com
- **Adres**: İstanbul, Türkiye
- **Hizmet Alanı**: İstanbul'un 39 ilçesi

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📚 Dokümantasyon

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Prisma](https://www.prisma.io/docs)
- [NextAuth.js](https://next-auth.js.org)
