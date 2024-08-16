import type { Metadata, NextPage } from 'next'
import BarChartDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    "The Bar Chart component provides a visual representation of data through bars of varying lengths. It's a graphical representation commonly used to display and compare the values of different categories or groups. The Bar Chart component is highly customizable and can be tailored to fit various data visualization needs.",
  title: 'Bar Chart - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BarChartDocs />
      <EditPage
        pageLink="/docs/components/barChart"
        nextPageLink="/docs/components/lineChart"
        nextPageName="Line Chart"
      />
    </DocsContentLayout>
  )
}

export default page
