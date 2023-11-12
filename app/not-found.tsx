'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Empty } from '~/src'

const NotFound = () => {
  return (
    <>
      <Empty
        title="Sorry, No Result Found!"
        content="The page/topic you are looking for is not found."
        redirectUrl="/"
        image={<Image src="/images/not-found.svg" height={234} width={350} alt="404" />}
      />
      <div className="-mt-8 text-center">
        <Link
          href="/"
          className="group h-min w-fit justify-center rounded-md border border-slate-900 bg-slate-900 px-4 py-4 text-center text-sm font-medium capitalize text-white transition-all duration-75 ease-in hover:bg-slate-800 focus:ring-4 focus:ring-slate-800 active:bg-slate-900">
          Back to homepage
        </Link>
      </div>
    </>
  )
}

export default NotFound
