import type { Metadata, NextPage } from 'next'
import SelectDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Select component is a versatile and user-friendly interface element that enables users to choose from a list of options presented in a dropdown menu. It can be customized with various features, such as icons and actions, to enhance the user experience.',
  title: 'Select - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <SelectDocs />
      <EditPage pageLink="/docs/components/select" nextPageLink="/docs/components/spinner" nextPageName="Spinner" />
    </DocsContentLayout>
  )
}

export default page
