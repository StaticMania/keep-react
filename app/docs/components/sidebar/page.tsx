import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '~/components/DocsContentLayout'
import SidebarDocs from '.'

export const metadata: Metadata = {
  description:
    'Sidebar Component is a user interface element commonly found in web and mobile applications. It provides a dedicated space at the side of the main content area to display navigation links, menu items, or other relevant information. The sidebar is often used to help users navigate between different sections of the application, access important features, or view contextual details.',
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
