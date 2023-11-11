import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '~/components/DocsContentLayout'
import CardDocs from '.'

export const metadata: Metadata = {
  description:
    'The Card component in the Keep React library is a versatile and visually appealing UI element designed for React applications. It provides a structured container for displaying various types of content, such as text, images, buttons, and more, in an organized and elegant manner.',
  title: 'Card - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CardDocs />
    </DocsContentLayout>
  )
}

export default page
