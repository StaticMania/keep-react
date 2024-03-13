import type { Metadata, NextPage } from 'next'
import SidebarDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'Sidebar Component is a user interface element commonly found in web and mobile applications. It provides a dedicated space at the side of the main content area to display navigation links, menu items, or other relevant information.',
  title: 'Sidebar - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <SidebarDocs />
    </DocsContentLayout>
  )
}

export default page
