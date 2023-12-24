import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import TreeDocs from '.'

export const metadata: Metadata = {
  description:
    "A Tree component is a user interface element that visually represents hierarchical data structures, often resembling a branching tree. It's commonly used to display parent-child relationships or nested information in a way that's easy to navigate and understand.",
  title: 'Tree - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TreeDocs />
    </DocsContentLayout>
  )
}

export default page
