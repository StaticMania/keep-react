import type { Metadata, NextPage } from 'next'
import Grid from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'Grid in Keep React is a reusable className that simplifies text styling, offering a consistent way to format and present text across a web application. It allows developers to easily add properties like font size, line height and letter spacing.',
  title: 'Grid - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Grid />
    </DocsContentLayout>
  )
}

export default page
