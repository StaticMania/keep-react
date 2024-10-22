import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import ButtonGroupDocs from './buttonGroup.mdx'

export const metadata: Metadata = {
  description:
    'The Buttons component in the Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.',
  title: 'Button Group - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ButtonGroupDocs />
      <EditPage pageLink="/docs/components/buttonGroup" nextPageLink="/docs/components/card" nextPageName="Card" />
    </DocsContentLayout>
  )
}

export default page
