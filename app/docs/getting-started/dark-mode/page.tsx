import type { Metadata, NextPage } from 'next'
import DarkMode from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'Dark Mode is a user interface design option that uses a darker color palette, typically black or dark grey, for backgrounds and light-colored text and icons. It reduces eye strain in low-light environments, conserves battery life on OLED and AMOLED screens, and can enhance visual appeal.',
  title: 'Dark Mode - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DarkMode />
    </DocsContentLayout>
  )
}

export default page
