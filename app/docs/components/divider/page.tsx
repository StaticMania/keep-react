import type { Metadata, NextPage } from 'next'
import DividerDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Divider component serves as a visual separator, helping to organize content and improve readability in user interfaces. It allows you to add horizontal lines or dividers between different sections of a page or within a component. With customizable options for color, size, and alignment, the Divider component enhances the overall design and structure of your application.',
  title: 'Divider - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DividerDocs />
    </DocsContentLayout>
  )
}

export default page
