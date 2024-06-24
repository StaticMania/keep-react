import Markdown from 'react-markdown'
import getMarkDownContent from '~/utils/GetMarkDownContent'
import getMarkDownData from '~/utils/GetMarkDownData'

export async function generateStaticParams() {
  const posts = getMarkDownData('data/blogs')

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const page = async ({ params }: { params: { slug: string } }) => {
  const folder = 'data/blogs/'
  const slug = params.slug
  const post: { [key: string]: any } = getMarkDownContent(folder, slug)

  const { title, date } = post.data

  return (
    <section>
      <div className="mx-auto my-12 max-w-7xl px-6 text-center 2xl:px-0">
        <div className="py-12 text-left">
          <p className="mb-1 text-body-3 font-medium text-primary-500">{date}</p>
          <p className="text-heading-5 font-medium text-metal-900 dark:text-white">{title}</p>
          <hr className="my-5 block border-b border-b-metal-100 dark:border-b-metal-800" />
          <div className="mt-10">
            <Markdown className="post">{post.content}</Markdown>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
