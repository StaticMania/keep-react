import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import Installation from './Installation.mdx'

export const metadata: Metadata = {
  description: 'Install Keep React in your React application or NextJs Application following step bellow.',
  title: 'Installation - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Installation />
      <EditPage
        pageLink="/docs/getting-started/installation"
        nextPageLink="/docs/getting-started/typography"
        nextPageName="Typography"
      />
    </DocsContentLayout>
  )
}

export default page
