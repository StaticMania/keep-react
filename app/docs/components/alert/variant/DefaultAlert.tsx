import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from '../../../../src'

const DefaultAlert = () => {
  return (
    <Alert color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss />
    </Alert>
  )
}

const DefaultAlertCode = `
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from 'keep-react'

export const AlertComponent = () => {
  return (
    <Alert color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss />
    </Alert>
  )
}

`

export { DefaultAlert, DefaultAlertCode }
