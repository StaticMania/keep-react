import type { Metadata, NextPage } from 'next'
import AlertDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.',
  title: 'Alert - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AlertDocs />
      <EditPage pageLink="/docs/components/alert" nextPageLink="/docs/components/areaChart" nextPageName="Area Chart" />
    </DocsContentLayout>
  )
}

export default page
