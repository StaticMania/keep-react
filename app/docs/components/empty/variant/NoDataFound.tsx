import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

const NoDataFound = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>No Data Found</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}

const NoDataFoundCode = `
import Image from 'next/image'
import { Button, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle>No Data Found</EmptyTitle>
      <EmptyDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Button variant="outline">Go to home</Button>
    </Empty>
  )
}
`

export { NoDataFound, NoDataFoundCode }
