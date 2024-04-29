import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

const NotFoundPage = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>404 Not Found</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}

const NotFoundPageCode = `
import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>404 Not Found</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}
`

export { NotFoundPage, NotFoundPageCode }
