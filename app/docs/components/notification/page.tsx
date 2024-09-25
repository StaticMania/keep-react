import type { Metadata, NextPage } from 'next'
import NotificationDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Notification component in the Keep React allows you to display informative messages or alerts to users. With various styles and options for positioning, you can effectively communicate important updates or messages in a visually appealing manner.',
  title: 'Notification - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <NotificationDocs />
      <EditPage
        pageLink="/docs/components/notification"
        nextPageLink="/docs/components/numberInput"
        nextPageName="Number Input"
      />
    </DocsContentLayout>
  )
}

export default page
