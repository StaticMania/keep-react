import type { Metadata, NextPage } from 'next'
import Column from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description: 'Utilities for controlling the number of columns within an element.',
  title: 'Column - Tailwind CSS Columns',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Column />
    </DocsContentLayout>
  )
}

export default page
