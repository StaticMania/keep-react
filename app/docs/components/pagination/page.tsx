import type { Metadata, NextPage } from 'next'
import PaginationDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Pagination component enhances user experience by providing a user-friendly way to navigate through large sets of content. Whether its articles, search results, or product listings, Pagination breaks down the data into manageable pages, allowing users to easily access different sections.',
  title: 'Pagination - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <PaginationDocs />
    </DocsContentLayout>
  )
}

export default page
