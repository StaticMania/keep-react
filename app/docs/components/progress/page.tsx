import type { Metadata, NextPage } from 'next'
import ProgressDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Progress Bar Component in the Keep React allows you to visually represent the progress or completion of a task or process.',
  title: 'Progress - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ProgressDocs />
      <EditPage
        pageLink="/docs/components/progress"
        nextPageLink="/docs/components/pagination"
        nextPageName="Pagination"
      />
    </DocsContentLayout>
  )
}

export default page
