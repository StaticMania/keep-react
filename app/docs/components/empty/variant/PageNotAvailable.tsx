'use client'
import Image from 'next/image'
import { Empty } from '~/src'

const PageNotAvailable = () => {
  return (
    <Empty
      title="This page isn't available right now"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      buttonText="Go To Home Page"
      redirectBtnSize="md"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  )
}

const PageNotAvailableCode = `
"use client";
import Image from "next/image";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty
      title="This page isn't available right now"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      buttonText="Go To Home Page"
      redirectBtnSize="md"
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
}
`

export { PageNotAvailable, PageNotAvailableCode }
