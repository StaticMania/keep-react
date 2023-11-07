'use client'
import Image from 'next/image'
import { Empty } from '~/src'

const NotFound = () => {
  return (
    <Empty
      title="Sorry, No Result Found!"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  )
}

export default NotFound
