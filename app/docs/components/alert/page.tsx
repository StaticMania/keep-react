import type { Metadata, NextPage } from 'next'
import React from 'react'
import AlertDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.',
  title: 'Alert - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AlertDocs />
    </DocsContentLayout>
  )
}

export default page
