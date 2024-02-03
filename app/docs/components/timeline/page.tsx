import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import TimelineDocs from '.'

export const metadata: Metadata = {
  description:
    'Timeline Component is a graphical representation used to visualize a sequence of events or activities over time. It presents information in a chronological order, allowing users to track the progression of events, milestones, or changes. Timelines often include markers, labels, and other visual cues to enhance understanding and engagement.',
  title: 'Timeline - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TimelineDocs />
    </DocsContentLayout>
  )
}

export default page
