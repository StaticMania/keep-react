import type { Metadata, NextPage } from 'next'
import TagDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Color Tag Component in the Keep React allows you to visually represent and label items. With customizable options for the style, icon.',
  title: 'Tag - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TagDocs />
    </DocsContentLayout>
  )
}

export default page
