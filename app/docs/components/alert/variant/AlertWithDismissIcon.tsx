'use client'
import { useState } from 'react'
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from '../../../../src'

const AlertWithDismissIcon = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert dismiss={showAlert}>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss onClick={onDismiss} />
      </AlertContainer>
    </Alert>
  )
}

const AlertWithDismissIconCode = `
'use client'
import { useState } from 'react'
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from 'keep-react'

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert dismiss={showAlert}>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss onClick={onDismiss} />
      </AlertContainer>
    </Alert>
  )
}

`

export { AlertWithDismissIcon, AlertWithDismissIconCode }
