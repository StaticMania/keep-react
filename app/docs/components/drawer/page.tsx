import type { Metadata, NextPage } from 'next'
import DrawerDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Drawer component provides a flexible and customizable way to create drawers that can slide in from different directions (left, right, top, or bottom) within your React application. It supports features like animation, keyboard accessibility (ESC key to close), and clicking outside the drawer to close it.',
  title: 'Drawer - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DrawerDocs />
    </DocsContentLayout>
  )
}

export default page
