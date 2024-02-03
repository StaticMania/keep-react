import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import DatePickerDocs from '.'

export const metadata: Metadata = {
  description:
    'The Date Picker component offers an intuitive way for users to select dates from a calendar. With this component, users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of customization options, allowing developers to control date formats, highlight specific dates, set minimum and maximum selectable dates, and more.',
  title: 'DatePicker - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DatePickerDocs />
    </DocsContentLayout>
  )
}

export default page
