'use client'
import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white">
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/16a2c7da-ede2-49d5-8a62-7ac2bc3a8bc0_Property+1%3DSearch_+Property+2%3DMd.svg"
        alt="loading"
        height="300"
        width="400"
      />
      <div className="mt-8 flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-dashed border-slate-900"></div>
        <h1 className="animate-pulse text-xl font-normal text-slate-900">Please Wait</h1>
      </div>
    </div>
  )
}

export default Loading
