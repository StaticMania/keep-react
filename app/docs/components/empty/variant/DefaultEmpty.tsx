import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

const DefaultEmpty = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>Oops! You seem to be lost</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}

const DefaultEmptyCode = `
import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>Oops! You seem to be lost</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}
`

export { DefaultEmpty, DefaultEmptyCode }
