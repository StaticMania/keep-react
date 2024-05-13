import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import LineChartDocs from '.'

export const metadata: Metadata = {
  description:
    "The Line Chart component visually displays data trends through connected data points. It's commonly used to track changes over time or across categories. Highly customizable, it adapts to various data visualization needs.",
  title: 'Line Chart - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <LineChartDocs />
    </DocsContentLayout>
  )
}

export default page
