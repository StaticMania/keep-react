'use client'
import Image from 'next/image'
import { Empty } from '~/src'

const EmptyFolder = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>This folder has gone missing</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}

const EmptyFolderCode = `
"use client";
import Image from "next/image";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>This folder has gone missing</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}
`

export { EmptyFolder, EmptyFolderCode }
