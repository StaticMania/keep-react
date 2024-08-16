import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants, Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../../../../src'

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
      <EmptyTitle className="mb-[14px] mt-5">No Data Found</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Link href="/" className={buttonVariants({ color: 'primary' })}>
        Go to home
      </Link>
    </Empty>
  )
}

const NoDataFoundCode = {
  'EmptyComponent.tsx': `
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'

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
      <EmptyTitle className="mb-[14px] mt-5">No Data Found</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Link href="/" className={buttonVariants({ color: 'primary' })}>
        Go to home
      </Link>
    </Empty>
  )
}
`,
}

export { NoDataFound, NoDataFoundCode }
