import type { Metadata, NextPage } from 'next'
import TabsDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Tab Group Component in the Keep React allows you to organize and display content in a tabbed interface. It provides a convenient way to switch between different sections or views within a single container.',
  title: 'Tabs - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TabsDocs />
    </DocsContentLayout>
  )
}

export default page
