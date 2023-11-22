'use client'
import { Alert } from '~/src'
import Link from 'next/link'
import { Info } from 'phosphor-react'

const CustomizeAlert = () => {
  return (
    <Alert className="rounded-lg bg-slate-900">
      <Alert.Container>
        <Alert.Icon>
          <Info size={24} color="#fff" />
        </Alert.Icon>
        <Alert.Body>
          <Alert.Title className="text-white">Default message - make it short</Alert.Title>
          <Alert.Description className="text-gray-400">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
            <Link href="/alert" className="ml-1 inline-block text-body-4 text-primary-600 underline">
              Link style
            </Link>
          </Alert.Description>
        </Alert.Body>
      </Alert.Container>
    </Alert>
  )
}

const CustomizeAlertCode = `
'use client'
import Link from 'next/link'
import { Alert } from 'keep-react'
import { Info } from 'phosphor-react'

const CustomizeAlert = () => {
  return (
    <Alert>
      <Alert.Container >
        <Alert.Icon>
          <Info size={24} color="#0F3CD9" />
        </Alert.Icon>
        <Alert.Body>
          <Alert.Title>Default message - make it short</Alert.Title>
          <Alert.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
            <Link href="/alert" className="ml-1 inline-block text-body-4 text-primary-600 underline">
              Link style
            </Link>
          </Alert.Description>
        </Alert.Body>
      </Alert.Container>
    </Alert>
  )
}
`
export { CustomizeAlert, CustomizeAlertCode }
