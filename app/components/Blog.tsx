'use client'
import Link from 'next/link'
import { FC } from 'react'
import { Badge, Card, CardContent, CardTitle } from '../src'

export interface BlogProps {
  [key: string]: any
}

const Blog: FC<BlogProps> = ({ title, date, keyFeatures, slug }) => {
  return (
    <Card className="max-w-full lg:col-span-1">
      <CardContent className="flex flex-col justify-between gap-y-3 text-left">
        <Badge>{date}</Badge>
        <CardTitle>{title}</CardTitle>
        <ul className="!mt-4 ml-5 list-disc space-y-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          {keyFeatures?.map((item: string) => <li key={item}>{item}</li>)}
        </ul>

        <Link
          href={`/blog/${slug}`}
          className="flex w-full items-center justify-center rounded-lg bg-metal-900 px-5 py-2.5 text-body-4 font-medium text-white transition-all duration-150 hover:bg-metal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 active:focus:scale-95 disabled:cursor-not-allowed disabled:bg-metal-200 dark:bg-metal-800">
          Read More
        </Link>
      </CardContent>
    </Card>
  )
}

export default Blog
