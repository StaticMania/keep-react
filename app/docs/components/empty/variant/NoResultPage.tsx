import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

const NoResultPage = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">Sorry, no result found!</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button color="secondary" size="sm">
        Go to home
      </Button>
    </Empty>
  )
}

const NoResultPageCode = `
import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">Sorry, No result found!</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button color="secondary" size="sm">Go to home</Button>
    </Empty>
  )
}
`

export { NoResultPage, NoResultPageCode }
