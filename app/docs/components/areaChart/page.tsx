import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import AreaChartDocs from '.'

export const metadata: Metadata = {
  description:
    "An Area Chart is a visual way to show data as a line that turns into a colored shape below it. This shape helps you understand how the data changes over time or categories. It's like coloring under a line graph to see where the data is bigger or smaller. People use Area Charts to see trends, compare things, and notice patterns in data. The colored area makes it clear which parts are higher or lower in value.",
  title: 'Area Chart - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AreaChartDocs />
    </DocsContentLayout>
  )
}

export default page
