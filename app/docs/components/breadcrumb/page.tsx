import type { Metadata, NextPage } from 'next'
import BreadcrumbDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Breadcrumbs component in the Keep React provides a navigation aid that allows users to understand their current location within a website or application. With customizable options for type, icon, divider, line, and style, you can create breadcrumbs that align with your design and enhance the navigation experience.',
  title: 'Breadcrumb - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BreadcrumbDocs />
      <EditPage pageLink="/docs/components/breadcrumb" nextPageLink="/docs/components/button" nextPageName="Button" />
    </DocsContentLayout>
  )
}

export default page
