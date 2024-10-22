import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'
import DarkMode from './DarkMode.mdx'

export const metadata: Metadata = {
  description:
    'Dark Mode is a user interface design option that uses a darker color palette, typically black or dark grey, for backgrounds and light-colored text and icons. It reduces eye strain in low-light environments, conserves battery life on OLED and AMOLED screens, and can enhance visual appeal.',
  title: 'Dark Mode - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DarkMode />
      <EditPage
        pageLink="/docs/getting-started/dark-mode"
        nextPageLink="/docs/layout/container"
        nextPageName="Container"
      />
    </DocsContentLayout>
  )
}

export default page
