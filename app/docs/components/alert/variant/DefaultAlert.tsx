'use client'
import { Alert } from '~/src'
import Link from 'next/link'
import { Info } from 'phosphor-react'

const DefaultAlert = () => {
  return (
    <Alert>
      <Alert.Container>
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

const DefaultAlertCode = `
'use client'
import Link from 'next/link'
import { Alert } from 'keep-react'
import { Info } from 'phosphor-react'

export const AlertComponent = () => {
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

export { DefaultAlert, DefaultAlertCode }
