import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const blogsDirectory = path.join(process.cwd(), 'data/blogs')

export const getBlogs = () => {
  const fileNames = fs.readdirSync(blogsDirectory)

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName)

    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      title: data?.title,
      tag: data?.tag,
      date: data?.date,
      version: data?.version,
      author: data?.author,
      content,
    }
  })

  return blogs
}
