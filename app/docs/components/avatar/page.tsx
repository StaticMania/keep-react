import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import AvatarDocsContent from './avatar.mdx'

export const metadata: Metadata = {
  description:
    'The Avatar component in the Keep React allows you to display user avatars or profile images in a consistent and visually appealing manner.',
  title: 'Avatar - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AvatarDocsContent />
      <EditPage pageLink="/docs/components/avatar" nextPageLink="/docs/components/badge" nextPageName="Badge" />
    </DocsContentLayout>
  )
}

export default page
