import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import DividerDocs from './Divider.mdx'

export const metadata: Metadata = {
  description:
    'The Divider component serves as a visual separator, helping to organize content and improve readability in user interfaces. It allows you to add horizontal lines or dividers between different sections of a page or within a component. With customizable options for color, size, and alignment, the Divider component enhances the overall design and structure of your application.',
  title: 'Divider - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DividerDocs />
      <EditPage
        pageLink="/docs/components/divider"
        nextPageLink="/docs/components/datePicker"
        nextPageName="Date Picker"
      />
    </DocsContentLayout>
  )
}

export default page
