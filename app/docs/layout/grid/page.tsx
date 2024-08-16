import type { Metadata, NextPage } from 'next'
import Grid from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'A grid layout is a design technique that organizes content into rows and columns, providing a structured and flexible way to arrange elements on a webpage.',
  title: 'Grid - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Grid />
      <EditPage pageLink="/docs/layout/grid" nextPageLink="/docs/components/accordion" nextPageName="Accordion" />
    </DocsContentLayout>
  )
}

export default page
