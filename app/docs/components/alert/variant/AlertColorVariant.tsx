import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from '../../../../src'

const AlertWithColorVariant = () => {
  return (
    <div className="space-y-5">
      <Alert color="primary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="error">
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

const AlertWithColorVariantCode = `
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
    <div className="space-y-5">
      <Alert color="primary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href='/'>Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href='/'>Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href='/'>Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href='/'>Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
      <Alert color="error">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Alert here</AlertTitle>
          <AlertDescription>A short description followed by two actions items..</AlertDescription>
        </AlertContainer>
        <AlertLink href='/'>Learn More</AlertLink>
        <AlertDismiss />
      </Alert>
    </div>
  )
}
`

export { AlertWithColorVariant, AlertWithColorVariantCode }
