import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import StepDocs from './Step.mdx'

export const metadata: Metadata = {
  description:
    'The Steps Component is a user interface element used to guide users through a multi-step process or workflow. It presents a visual representation of the various stages or steps a user needs to complete in sequential order.',
  title: 'Steps - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <StepDocs />
      <EditPage pageLink="/docs/components/steps" nextPageLink="/docs/components/switch" nextPageName="Switch" />
    </DocsContentLayout>
  )
}

export default page
