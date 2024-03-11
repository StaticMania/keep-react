'use client'
import { useState } from 'react'
import { Alert } from '../../../../src'

const AlertWithDismissIcon = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert color="primary" dismiss={showAlert}>
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss onClick={onDismiss} />
    </Alert>
  )
}

const AlertWithDismissIconCode = `
'use client'
import { useState } from 'react'
import { Alert } from 'keep-react'

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert color="primary" dismiss={showAlert}>
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss onClick={onDismiss} />
    </Alert>
  )
}
`

export { AlertWithDismissIcon, AlertWithDismissIconCode }
