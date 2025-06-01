import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug, published: true }
  })

  if (!post) {
    return {
      title: 'Blog yazısı bulunamadı'
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords?.split(',').map(k => k.trim()),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: ['İstanbul Uydu Servisi'],
      images: post.image ? [post.image] : undefined,
    },
    alternates: {
      canonical: post.canonicalUrl || `https://istanbul-uydu-servisi.com/blog/${post.slug}`
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug, published: true },
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  })

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: 'İstanbul Uydu Servisi'
    },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://istanbul-uydu-servisi.com/blog/${post.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <span>{post.author.name}</span>
                <span className="mx-2">•</span>
                <time dateTime={post.publishedAt?.toISOString()}>
                  {formatDate(post.publishedAt!)}
                </time>
                {post.category && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="text-primary">{post.category}</span>
                  </>
                )}
              </div>
              {post.excerpt && (
                <p className="text-lg text-gray-700 mb-6">
                  {post.excerpt}
                </p>
              )}
              {post.image && (
                <div className="aspect-video bg-gray-200 rounded-lg mb-6"></div>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {post.tags && (
              <footer className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {JSON.parse(post.tags).map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
} 