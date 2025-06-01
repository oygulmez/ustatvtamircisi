import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const published = searchParams.get('published')
  
  try {
    const posts = await prisma.post.findMany({
      where: published === 'true' ? { published: true } : {},
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazıları yüklenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json(
      { error: 'Oturum açmanız gerekiyor' },
      { status: 401 }
    )
  }

  try {
    const data = await request.json()
    
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt,
        image: data.image,
        published: data.published || false,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        canonicalUrl: data.canonicalUrl,
        category: data.category,
        tags: data.tags,
        authorId: session.user.id,
        publishedAt: data.published ? new Date() : null
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazısı oluşturulurken hata oluştu' },
      { status: 500 }
    )
  }
} 