import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import Typography from '.'

export const metadata: Metadata = {
  description:
    'A Typography component in Keep React is a reusable element that simplifies text styling, offering a consistent way to format and present text across a web application. It allows developers to easily customize typography properties like font size and weight, promoting code consistency and readability.',
  title: 'Typography - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Typography />
    </DocsContentLayout>
  )
}

export default page
