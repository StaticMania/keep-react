import type { Metadata, NextPage } from 'next'
import RadioDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Radio Input Component is a user interface element used for selecting a single option from a set of mutually exclusive choices. It presents a list of options, and users can choose one option at a time by clicking on a radio button associated with each choice.',
  title: 'Radio - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <RadioDocs />
      <EditPage pageLink="/docs/components/radio" nextPageLink="/docs/components/rating" nextPageName="Rating" />
    </DocsContentLayout>
  )
}

export default page
