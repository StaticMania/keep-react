import type { Metadata, NextPage } from 'next'
import CardDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The card component in Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.',
  title: 'Card - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CardDocs />
      <EditPage pageLink="/docs/components/card" nextPageLink="/docs/components/carousel" nextPageName="Carousel" />
    </DocsContentLayout>
  )
}

export default page
