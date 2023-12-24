'use client'
import Link from 'next/link'
import { Alert } from '../../../../src'
import { useState } from 'react'
import { CheckCircle, Info, XCircle } from 'phosphor-react'

const AlertWithColorVariant = () => {
  const [dismiss, setDismiss] = useState<boolean[]>([false, false, false, false, false])

  const handleDismiss = (index: number) => {
    const updatedDismissStates = [...dismiss]
    updatedDismissStates[index] = true
    setDismiss(updatedDismissStates)
  }
  return (
    <div className="space-y-5">
      <Alert
        onDismiss={() => handleDismiss(1)}
        dismiss={dismiss[1]}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="primary">
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
      <Alert
        onDismiss={() => handleDismiss(2)}
        dismiss={dismiss[2]}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="success">
        <Alert.Container>
          <Alert.Icon>
            <CheckCircle size={24} color="#0A9952" />
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
      <Alert
        onDismiss={() => handleDismiss(3)}
        dismiss={dismiss[3]}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="metal">
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} color="#5E718D" />
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
      <Alert
        onDismiss={() => handleDismiss(4)}
        dismiss={dismiss[4]}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="warning">
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} color="#D8A800" />
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
      <Alert
        onDismiss={() => handleDismiss(5)}
        dismiss={dismiss[5]}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="error">
        <Alert.Container>
          <Alert.Icon>
            <XCircle size={24} color="#E92215" />
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
    </div>
  )
}

const AlertWithColorVariantCode = `
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Alert } from 'keep-react'
import { CheckCircle, Info, XCircle } from 'phosphor-react'

export const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <div className="space-y-5">
      <Alert
        onDismiss={onDismiss}
        dismiss={showAlert}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="primary">
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
      <Alert
        onDismiss={onDismiss}
        dismiss={showAlert}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="success">
        <Alert.Container>
          <Alert.Icon>
            <CheckCircle size={24} color="#0A9952" />
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
      <Alert
        onDismiss={onDismiss}
        dismiss={showAlert}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="metal">
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} color="#5E718D" />
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
      <Alert
        onDismiss={onDismiss}
        dismiss={showAlert}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="warning">
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} color="#D8A800" />
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
      <Alert
        onDismiss={onDismiss}
        dismiss={showAlert}
        rounded={true}
        withBorder={true}
        withBorderAccent={true}
        color="error">
        <Alert.Container>
          <Alert.Icon>
            <XCircle size={24} color="#E92215" />
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
    </div>
  )
}
`

export { AlertWithColorVariant, AlertWithColorVariantCode }
