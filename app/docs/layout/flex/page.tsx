import type { Metadata, NextPage } from 'next'
import Flex from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'A flex layout is a design approach that leverages the flex box model to create flexible and responsive arrangements of elements within a container. It allows items to dynamically adjust their size, alignment, and distribution, making it ideal for building responsive and visually appealing user interfaces.',
  title: 'Flex - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Flex />
    </DocsContentLayout>
  )
}

export default page
