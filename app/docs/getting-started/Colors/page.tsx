import type { Metadata, NextPage } from 'next'
import Colors from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'A Colors component in Keep React is a reusable element that simplifies text styling, offering a consistent way to format and present text across a web application. It allows developers to easily customize typography properties like font size and weight, promoting code consistency and readability.',
  title: 'Colors - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Colors />
    </DocsContentLayout>
  )
}

export default page
