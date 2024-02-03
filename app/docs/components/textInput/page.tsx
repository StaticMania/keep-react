import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import TextInputDocs from '.'

export const metadata: Metadata = {
  description:
    'Input Component is a fundamental user interface element used to collect user input or data in various forms, such as text, numbers, dates, or selections. It provides a space where users can type or select information, allowing them to interact with the application and provide necessary inputs.',
  title: 'Text Input - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TextInputDocs />
    </DocsContentLayout>
  )
}

export default page
