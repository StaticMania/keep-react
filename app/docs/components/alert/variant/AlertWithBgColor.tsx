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
          <AlertTitle>Primary Alert</AlertTitle>
          <AlertDescription>A short description followed by two actions items.</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/">Learn More</AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert withBg={true} color="secondary">
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
      <Alert withBg={true} color="success">
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
      <Alert withBg={true} color="warning">
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
      <Alert withBg={true} color="error">
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

const AlertWithBgColorCode = {
  'AlertComponent.tsx': `
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
    <Alert withBg={true} color="secondary">
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
  )
}
`,
}

export { AlertWithBgColor, AlertWithBgColorCode }
