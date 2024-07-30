import type { Metadata, NextPage } from 'next'
import TextAreaDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Textarea Input Component is a user interface element used to collect and display multiline text input from users. It provides an expandable box where users can enter a larger amount of text, such as comments, descriptions, or messages.',
  title: 'Textarea - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TextAreaDocs />
      <EditPage pageLink="/docs/components/textArea" nextPageLink="/docs/components/toast" nextPageName="Toast" />
    </DocsContentLayout>
  )
}

export default page
