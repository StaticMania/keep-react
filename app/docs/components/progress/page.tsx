import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import ProgressDocs from '.'

export const metadata: Metadata = {
  description:
    'The Progress Bar Component in the Keep React allows you to visually represent the progress or completion of a task or process.',
  title: 'Progress Bar - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ProgressDocs />
    </DocsContentLayout>
  )
}

export default page
