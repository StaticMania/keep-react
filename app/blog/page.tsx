import getMarkDownData from '~/utils/GetMarkDownData'
import Blog from '../components/Blog'

const page = () => {
  const blogs: { slug: string; content: string; [key: string]: any }[] = getMarkDownData('data/blogs')

  return (
    <section>
      <div className="-mt-2 bg-metal-100 py-20 dark:bg-metal-900">
        <div className="mx-auto max-w-7xl px-6 text-center 2xl:px-0">
          <h1 className="text-heading-5 font-medium text-metal-900 dark:text-white">The latest Keep React news</h1>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6 text-center 2xl:px-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {blogs?.map((blog) => <Blog key={blog.slug} {...blog} />)}
        </div>
      </div>
    </section>
  )
}

export default page
