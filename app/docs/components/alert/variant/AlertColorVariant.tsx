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
          <AlertTitle>Primary Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Secondary Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="error">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
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
          <AlertTitle>Primary Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Secondary Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="error">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
    </div>
  )
}

`

export { AlertWithColorVariant, AlertWithColorVariantCode }
