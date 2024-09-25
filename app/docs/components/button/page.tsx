import type { Metadata, NextPage } from 'next'
import ButtonDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Buttons component in the Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.',
  title: 'Button - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ButtonDocs />
      <EditPage
        pageLink="/docs/components/button"
        nextPageLink="/docs/components/buttonGroup"
        nextPageName="Button Group"
      />
    </DocsContentLayout>
  )
}

export default page
