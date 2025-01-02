import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import TabsDocs from './tabs.mdx'

export const metadata: Metadata = {
  description:
    'The Tabs Component in the Keep React allows you to organize and display content in a tabbed interface. It provides a convenient way to switch between different sections or views within a single container.',
  title: 'Tabs - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TabsDocs />
      <EditPage pageLink="/docs/components/tab" nextPageLink="/docs/components/textArea" nextPageName="Text Area" />
    </DocsContentLayout>
  )
}

export default page
