import type { Metadata, NextPage } from 'next'
import Colors from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The color palette includes primary, secondary, success, warning, and error colors. The primary color is used for branding and main actions, while the secondary color complements the primary and is used for secondary elements. The success color, usually green, indicates positive actions. The warning color, often yellow or orange, is used for cautionary information, and the error color, typically red, signifies errors or critical actions.',
  title: 'Colors - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Colors />
      <EditPage
        pageLink="/docs/getting-started/colors"
        nextPageLink="/docs/getting-started/dark-mode"
        nextPageName="Dark Mode"
      />
    </DocsContentLayout>
  )
}

export default page
