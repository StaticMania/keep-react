import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import PaginationDocs from './Pagination.mdx'

export const metadata: Metadata = {
  description:
    'The Pagination component enhances user experience by providing a user-friendly way to navigate through large sets of content. Whether its articles, search results, or product listings, Pagination breaks down the data into manageable pages, allowing users to easily access different sections.',
  title: 'Pagination - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <PaginationDocs />
      <EditPage pageLink="/docs/components/pagination" nextPageLink="/docs/components/popover" nextPageName="Popover" />
    </DocsContentLayout>
  )
}

export default page
