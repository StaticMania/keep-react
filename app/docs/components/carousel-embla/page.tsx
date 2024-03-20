import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import CarouselDocs from '.'

export const metadata: Metadata = {
  description: 'This Carousel component is similar to the default carousel but made with embla-carousel-react',
  title: 'Carousel-Embla - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CarouselDocs />
    </DocsContentLayout>
  )
}

export default page
