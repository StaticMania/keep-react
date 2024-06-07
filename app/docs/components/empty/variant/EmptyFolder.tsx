import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

const EmptyFolder = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>This folder has gone missing</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button>Go to home</Button>
    </Empty>
  )
}

const EmptyFolderCode = `
import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>This folder has gone missing</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button>Go to home</Button>
    </Empty>
  )
}
`

export { EmptyFolder, EmptyFolderCode }
