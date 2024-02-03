import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EmptyDocs from '.'

export const metadata: Metadata = {
  description:
    "Empty Component is a user interface element specifically designed to handle situations where a requested page or resource cannot be found. It is often displayed when a user navigates to a URL that doesn't correspond to any existing content within the application or website.",
  title: 'Empty - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <EmptyDocs />
    </DocsContentLayout>
  )
}

export default page
