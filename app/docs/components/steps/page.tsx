import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import StepDocs from '.'

export const metadata: Metadata = {
  description:
    'Steps Component is a user interface element used to guide users through a multi-step process or workflow. It presents a visual representation of the various stages or steps a user needs to complete in a sequential order. Each step is typically accompanied by a title, description, and an indicator of completion status, helping users track their progress.',
  title: 'Steps - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <StepDocs />
    </DocsContentLayout>
  )
}

export default page
