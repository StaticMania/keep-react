import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import ToastDocs from './Toast.mdx'

export const metadata: Metadata = {
  description:
    'Toasts typically appear as small, non-intrusive pop-up notifications that appear near the edge of the screen and disappear automatically after a short period of time or when dismissed by the user.',
  title: 'Toast - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ToastDocs />
      <EditPage pageLink="/docs/components/toast" nextPageLink="/docs/components/input" nextPageName="Input" />
    </DocsContentLayout>
  )
}

export default page
