import type { Metadata, NextPage } from 'next'
import Container from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description: "A component for fixing an element's width to the current breakpoint.",
  title: 'Container - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Container />
    </DocsContentLayout>
  )
}

export default page
