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
      <div className="bg-metal-100 py-20">
        <h1 className="text-center text-heading-5 font-medium text-metal-900">{title}</h1>
      </div>
      <div className="mx-auto my-12 max-w-7xl px-6 text-center 2xl:px-0">
        <div className="text-left">
          <p className="text-body-5 font-medium text-primary-500">{date}</p>
          <div className="mt-3">
            <Markdown className="post">{post.content}</Markdown>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
