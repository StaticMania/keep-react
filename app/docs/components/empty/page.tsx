import type { Metadata, NextPage } from 'next'
import EmptyDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    "Empty Component is a user interface element specifically designed to handle situations where a requested page or resource cannot be found. It is often displayed when a user navigates to a URL that doesn't correspond to any existing content within the application or website.",
  title: 'Empty - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <EmptyDocs />
      <EditPage pageLink="/docs/components/empty" nextPageLink="/docs/components/modal" nextPageName="Modal" />
    </DocsContentLayout>
  )
}

export default page
