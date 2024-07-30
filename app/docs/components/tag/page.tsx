import type { Metadata, NextPage } from 'next'
import TagDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Color Tag Component in the Keep React allows you to visually represent and label items. With customizable options for the style, icon.',
  title: 'Tag - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TagDocs />
      <EditPage pageLink="/docs/components/tag" nextPageLink="/docs/components/textArea" nextPageName="Text Area" />
    </DocsContentLayout>
  )
}

export default page
