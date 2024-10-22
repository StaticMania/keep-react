import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import Typography from './Typography.mdx'

export const metadata: Metadata = {
  description:
    'Typography in Keep React is a reusable className that simplifies text styling, offering a consistent way to format and present text across a web application. It allows developers to easily add properties like font size, line height and letter spacing.',
  title: 'Typography - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Typography />
      <EditPage
        pageLink="/docs/getting-started/typography"
        nextPageLink="/docs/getting-started/colors"
        nextPageName="Colors"
      />
    </DocsContentLayout>
  )
}

export default page
