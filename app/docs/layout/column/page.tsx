import type { Metadata, NextPage } from 'next'
import Column from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description: 'Utilities for controlling the number of columns within an element.',
  title: 'Column - Tailwind CSS Columns',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Column />
      <EditPage pageLink="/docs/layout/column" nextPageLink="/docs/layout/flex" nextPageName="Flex" />
    </DocsContentLayout>
  )
}

export default page
