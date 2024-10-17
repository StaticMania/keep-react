import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import BlogHeader from '~/app/components/BlogHeader'
import { getBlogs } from '~/utils/getMdxContent'

export async function generateStaticParams() {
  const posts = getBlogs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const page = async ({ params }: { params: { slug: string } }) => {
  const posts = getBlogs()
  const post = posts.find((post) => post.slug === params.slug)

  return (
    <section>
      <div id="blog-content" className="mx-auto max-w-5xl overflow-hidden px-6 py-12 2xl:px-0">
        <Suspense fallback={<>Loading...</>}>
          <MDXRemote
            components={{ BlogHeader }}
            source={post?.content ? post.content : ''}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, { theme: 'poimandres' }]],
              },
            }}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default page
