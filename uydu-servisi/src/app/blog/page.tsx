import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog | İstanbul Uydu Servisi',
  description: 'Uydu servisi, çanak anten kurulumu ve televizyon tamiri konularında faydalı bilgiler, ipuçları ve haberler.',
}

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      publishedAt: 'desc'
    }
  })

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uydu servisi, çanak anten kurulumu ve televizyon tamiri konularında 
              faydalı bilgiler, ipuçları ve güncel haberler.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz blog yazısı bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  {post.image && (
                    <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="text-sm text-gray-500">
                      {post.author.name} • {formatDate(post.publishedAt!)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-block mt-4 text-primary hover:underline"
                    >
                      Devamını oku →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
} 