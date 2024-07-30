import type { Metadata, NextPage } from 'next'
import DatePickerDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Date Picker component offers an intuitive way for users to select dates from a calendar. With this component, users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of customization options, allowing developers to control date formats, highlight specific dates, set minimum and maximum selectable dates, and more.',
  title: 'DatePicker - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DatePickerDocs />
      <EditPage
        pageLink="/docs/components/datePicker"
        nextPageLink="/docs/components/dropdown"
        nextPageName="Dropdown"
      />
    </DocsContentLayout>
  )
}

export default page
