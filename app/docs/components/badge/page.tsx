import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import BadgeDocsContent from './badge.mdx'

export const metadata: Metadata = {
  description:
    'The Badge component in the Keep React allows you to add visual indicators or labels to highlight specific information or provide additional context. With customizable options for style, size, type, icon, and state, you can create versatile badges that fit your design needs.',
  title: 'Badge - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BadgeDocsContent />
      <EditPage
        pageLink="/docs/components/badge"
        nextPageLink="/docs/components/breadcrumb"
        nextPageName="Breadcrumb"
      />
    </DocsContentLayout>
  )
}

export default page
