import type { Metadata, NextPage } from 'next'
import NavbarDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Navbar component is a fundamental UI element used in web development to create a navigation bar at the top of a webpage. It provides a structured and organized way to display links, menus, and other navigation-related content to users.',
  title: 'Navbar - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <NavbarDocs />
      <EditPage
        pageLink="/docs/components/navbar"
        nextPageLink="/docs/components/notification"
        nextPageName="Notification"
      />
    </DocsContentLayout>
  )
}

export default page
