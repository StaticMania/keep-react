'use client'
import Image from 'next/image'
import { Empty } from '../../../../src'

const NoResultPage = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>Sorry, no result found!</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}

const NoResultPageCode = `
"use client";
import Image from "next/image";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>Sorry, No result found!</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}
`

export { NoResultPage, NoResultPageCode }
