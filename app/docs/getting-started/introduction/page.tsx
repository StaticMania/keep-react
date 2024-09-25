import type { Metadata, NextPage } from 'next'
import Introduction from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Keep React is an open-source component library built on top of React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications. Install Keep React in your React application or NextJs Application following step bellow.',
  title: 'Introduction - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Introduction />
      <EditPage
        pageLink="/docs/getting-started/introduction"
        nextPageLink="/docs/getting-started/typography"
        nextPageName="Typography"
      />
    </DocsContentLayout>
  )
}

export default page
