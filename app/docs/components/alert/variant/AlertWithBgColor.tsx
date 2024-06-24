import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from '../../../../src'

const AlertWithBgColor = () => {
  return (
    <div className="space-y-5">
      <Alert withBg={true} color="primary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert withBg={true} color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert withBg={true} color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert withBg={true} color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert withBg={true} color="error">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
    </div>
  )
}

const AlertWithBgColorCode = `

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
    <Alert withBg={true} color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items..</AlertDescription>
      </AlertContainer>
      <AlertLink href='/'>Learn More</AlertLink>
      <AlertDismiss />
    </Alert>
  )
}
`

export { AlertWithBgColor, AlertWithBgColorCode }
