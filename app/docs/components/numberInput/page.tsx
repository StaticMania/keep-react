import type { Metadata, NextPage } from 'next'
import NumberInputDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Number Input Component is a user interface element designed for collecting numeric input from users. It provides a field where users can enter numerical values, such as integers or decimals, using keyboard input or arrow buttons.',
  title: 'Number Input - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <NumberInputDocs />
      <EditPage
        pageLink="/docs/components/numberInput"
        nextPageLink="/docs/components/progress"
        nextPageName="Progress"
      />
    </DocsContentLayout>
  )
}

export default page
