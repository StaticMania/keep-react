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
    <Alert>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
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
    <Alert>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  )
}
`

export { DefaultAlert, DefaultAlertCode }
