import type { Metadata, NextPage } from 'next'
import Popover from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'Popover component is a user interface element that displays additional information or options when a user interacts with a specific trigger, such as hovering over text or clicking a button.',
  title: 'Popover - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Popover />
      <EditPage pageLink="/docs/components/popover" nextPageLink="/docs/components/radio" nextPageName="Radio" />
    </DocsContentLayout>
  )
}

export default page
