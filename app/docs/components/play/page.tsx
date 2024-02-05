import type { Metadata, NextPage } from 'next'
import PlayDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Play component is a button that, when clicked, opens a centered modal with an embedded YouTube video. Enhance your web app user experience with this sleek and interactive video playback feature. Customize the button appearance using provided themes for a seamless integration.',
  title: 'Play - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <PlayDocs />
    </DocsContentLayout>
  )
}

export default page
