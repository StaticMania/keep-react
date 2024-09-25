import type { Metadata, NextPage } from 'next'
import SpinnerDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'A Spinner Component is a visual user interface element commonly found in web and mobile applications. It is used to indicate ongoing processes or loading states, providing users with a visual cue that something is happening in the background.',
  title: 'Spinner - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <SpinnerDocs />
      <EditPage pageLink="/docs/components/spinner" nextPageLink="/docs/components/steps" nextPageName="steps" />
    </DocsContentLayout>
  )
}

export default page
