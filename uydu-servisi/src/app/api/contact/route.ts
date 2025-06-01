import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, kvkkApproval } = await request.json()

    // Validation
    if (!name || !phone || !kvkkApproval) {
      return NextResponse.json(
        { error: 'Ad soyad, telefon numarası ve KVKK onayı gereklidir.' },
        { status: 400 }
      )
    }

    // Phone number validation (simple Turkish format)
    const phoneRegex = /^(\+90|0)?[0-9]{10}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Geçerli bir telefon numarası giriniz.' },
        { status: 400 }
      )
    }

    // Here you would typically save to database or send email
    // For now, we'll just log and return success
    console.log('Yeni iletişim formu:', {
      name,
      phone,
      message: message || 'Mesaj belirtilmedi',
      kvkkApproval,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { message: 'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('İletişim formu hatası:', error)
    return NextResponse.json(
      { error: 'Form gönderilirken bir hata oluştu.' },
      { status: 500 }
    )
  }
} 