import type { Metadata, NextPage } from 'next'
import CheckboxDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Checkbox Component is a user interface element that allows users to toggle between two states, typically representing selection or deselection. It consists of a small box that can be checked (selected) or unchecked (deselected). Checkboxes are commonly used in forms, lists, and interactive interfaces to enable users to make multiple selections or indicate their preferences.',
  title: 'Checkbox - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CheckboxDocs />
      <EditPage pageLink="/docs/components/checkbox" nextPageLink="/docs/components/divider" nextPageName="Divider" />
    </DocsContentLayout>
  )
}

export default page
