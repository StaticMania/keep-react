import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import AvatarGroupDocs from '.'

export const metadata: Metadata = {
  description:
    'The Avatar Group component in the Keep React allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.',
  title: 'Avatar Group - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AvatarGroupDocs />
    </DocsContentLayout>
  )
}

export default page
