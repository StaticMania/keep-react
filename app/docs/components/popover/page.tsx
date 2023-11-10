import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '~/components/DocsContentLayout'
import Popover from '.'

export const metadata: Metadata = {
  description:
    'Popover component is a user interface element that displays additional information or options when a user interacts with a specific trigger, such as hovering over text or clicking a button.',
  title: 'Popover - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Popover />
    </DocsContentLayout>
  )
}

export default page
