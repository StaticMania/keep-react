import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '~/components/DocsContentLayout'
import SearchBarDocs from '.'

export const metadata: Metadata = {
  description:
    'The Search Bar component provides a user interface element for entering search queries. It includes various customization options such as placeholder text, color variants, size variations, icons, and additional content. The component can be configured with search input addons and icons, along with their respective positions. ',
  title: 'Search Bar  - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <SearchBarDocs />
    </DocsContentLayout>
  )
}

export default page
