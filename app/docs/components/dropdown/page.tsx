import type { Metadata, NextPage } from 'next'
import DropdownDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Dropdown Component is a versatile user interface element that provides users with a menu of selectable options. With a wide range of customization options, including labels, icons, search bars, checkboxes, and more, the Dropdown Component enhances user interaction by offering intuitive and flexible selection functionalities.',
  title: 'Dropdown - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DropdownDocs />
      <EditPage pageLink="/docs/components/dropdown" nextPageLink="/docs/components/drawer" nextPageName="Drawer" />
    </DocsContentLayout>
  )
}

export default page
