import type { Metadata, NextPage } from 'next'
import PieChartDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Pie Chart component offers an intuitive and visually compelling way to represent data distribution. With its circular graph divided into slices, users can easily visualize proportions and percentages of different categories within their dataset. Customizable features such as colors and hierarchical levels enhance the charts versatility, making it an essential tool for data analysis and presentation.',
  title: 'Pie Chart - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <PieChartDocs />
      <EditPage pageLink="/docs/components/pieChart" nextPageLink="/docs/components/avatar" nextPageName="Avatar" />
    </DocsContentLayout>
  )
}

export default page
