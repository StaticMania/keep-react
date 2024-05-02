import type { Metadata, NextPage } from 'next'
import LineChartDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Line Chart component is a powerful tool for visualizing numerical data trends over time or across categories. With its clear and intuitive presentation, it enables users to easily identify patterns, correlations, and outliers within their datasets.',
  title: 'LineChart - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <LineChartDocs />
    </DocsContentLayout>
  )
}

export default page
