import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import AccordionDocsContent from './accordion.mdx'

export const metadata: Metadata = {
  description:
    'The Accordion component in the Keep React Library allows you to create collapsible sections of content, commonly referred to as accordions. These sections can be toggled open or closed by the user, offering a compact and intuitive way to display content. The Accordion is customizable, allowing you to configure its appearance, behavior, and interaction states.',
  title: 'Accordion - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AccordionDocsContent />
      <EditPage pageLink="/docs/components/accordion" nextPageLink="/docs/components/alert" nextPageName="Alert" />
    </DocsContentLayout>
  )
}

export default page
