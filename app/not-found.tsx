'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Empty, EmptyDescription, EmptyImage, EmptyTitle } from './src'

const NotFound = () => {
  return (
    <Empty className="py-10 lg:py-40">
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">Sorry, No Result Found!</EmptyTitle>
      <EmptyDescription className="mb-8">The page/topic you are looking for is not found.</EmptyDescription>
      <Link
        href="/"
        className="group h-min w-fit justify-center rounded-md border border-slate-900 bg-slate-900 px-4 py-4 text-center text-sm font-medium capitalize text-white transition-all duration-75 ease-in hover:bg-slate-800 focus:ring-4 focus:ring-slate-800 active:bg-slate-900">
        Back to home
      </Link>
    </Empty>
  )
}

export default NotFound
