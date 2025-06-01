# Görsel Klasörleri

Bu klasör yapısını kullanarak görsellerinizi organize edebilirsiniz:

## 📁 Klasör Yapısı

### `/logos/`
- **site-logo.png** - Ana site logosu (Header'da kullanılacak)
- **site-logo-white.png** - Beyaz renkte logo (koyu arka planlarda kullanım için)
- **favicon.ico** - Site ikonu (32x32px)

### `/hero/`
- **hero-bg.jpg** - Ana sayfa hero section arka plan görseli
- **uydu-kurulum.jpg** - Uydu kurulum görseli
- **teknisyen-calisiyor.jpg** - Teknisyen çalışma görseli

### `/services/`
- **uydu-servisi.jpg** - Uydu servisi görseli
- **canak-anten.jpg** - Çanak anten görseli  
- **tv-tamiri.jpg** - TV tamiri görseli
- **teknisyen-ekip.jpg** - Teknisyen ekibi görseli

### `/gallery/`
- **before-after/** - Öncesi/sonrası görselleri
- **installations/** - Kurulum fotoğrafları
- **certificates/** - Sertifika ve belge görselleri

## 🖼️ Önerilen Görsel Boyutları

- **Logo:** 200x60px (PNG formatında, şeffaf arka plan)
- **Hero Background:** 1920x1080px (JPG formatında)
- **Service Images:** 600x400px (JPG/PNG formatında)
- **Gallery Images:** 800x600px (JPG formatında)

## 📝 Kullanım

Görsellerinizi ilgili klasörlere koyup, component'lerde şu şekilde kullanabilirsiniz:

```jsx
// Logo kullanımı
<img src="/images/logos/site-logo.png" alt="İstanbul Uydu Servisi" />

// Hero background kullanımı
<div style={{ backgroundImage: 'url(/images/hero/hero-bg.jpg)' }}>

// Service image kullanımı
<img src="/images/services/uydu-servisi.jpg" alt="Uydu Servisi" />
``` 