import type { Metadata, NextPage } from 'next'
import AccordionDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Accordion Component in the Keep React allows you to create collapsible sections of content, commonly known as accordions. Users can toggle the visibility of the content by clicking on the disclosure button. With customizable options for the theme, open state, type, and state, you can create accordion components that fit seamlessly into your design and provide an intuitive user experience.',
  title: 'Accordion - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AccordionDocs />
      <EditPage pageLink="/docs/components/accordion" nextPageLink="/docs/components/alert" nextPageName="Alert" />
    </DocsContentLayout>
  )
}

export default page
