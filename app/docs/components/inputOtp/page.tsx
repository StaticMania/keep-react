import type { Metadata, NextPage } from 'next'
import InputOTPDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The OTP (One-Time Password) Inputs component is a secure and intuitive interface designed to capture verification codes typically sent via SMS or email. It consists of multiple input fields that allow users to enter each digit of the OTP separately, ensuring accurate and quick entry.',
  title: 'OTP Input - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <InputOTPDocs />
      <EditPage pageLink="/docs/components/inputOtp" nextPageLink="/docs/components/timeline" nextPageName="Timeline" />
    </DocsContentLayout>
  )
}

export default page
