const AlertWithCard = () => {
  return (
    <div className="space-y-5">
      {/* <Alert className="!max-w-[420px]" color="primary" withBg={true}>
        <AlertContainer className="flex items-start">
          <AlertIcon />
          <AlertBody className="flex flex-col items-start gap-3">
            <AlertTitle className="text-body-2">Alert here</AlertTitle>
            <AlertDescription className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </AlertDescription>
            <fieldset className="flex items-center gap-2">
              <Checkbox id="checked1" variant="checked" className="border-primary-500 peer-checked:bg-primary-500" />
              <Label htmlFor="checked1" className="text-body-4 font-normal text-primary-500">
                Don&apos;t show again
              </Label>
            </fieldset>
            <AlertContainer>
              <Button size="sm" color="primary">
                Learn More
              </Button>
              <Button size="sm" color="primary" variant="outline">
                Dismiss
              </Button>
            </AlertContainer>
          </AlertBody>
          <AlertDismiss />
        </AlertContainer>
      </Alert> */}
      {/* <Alert className="!max-w-[420px]" color="secondary" withBg={true}>
        <AlertContainer className="flex items-start">
          <AlertIcon />
          <AlertBody className="flex flex-col items-start gap-3">
            <AlertTitle>Keep Design System Alert</AlertTitle>
            <AlertDescription className="block w-full sm:line-clamp-none">
              Keep Design System is an world first design system ecosystem for designers, developers, agencies and
              startups.
            </AlertDescription>
            <fieldset className="flex items-center gap-2">
              <Checkbox id="checked2" variant="checked" className="border-metal-200 peer-checked:bg-metal-500" />
              <Label htmlFor="checked2" className="text-body-4 font-normal text-metal-500">
                Don&apos;t show again
              </Label>
            </fieldset>
            <AlertContainer>
              <Button size="sm" color="secondary">
                Learn More
              </Button>
              <Button size="sm" color="secondary" variant="outline">
                Dismiss
              </Button>
            </AlertContainer>
          </AlertBody>
          <AlertDismiss />
        </AlertContainer>
      </Alert> */}
      {/* <Alert className="!max-w-[420px]" color="success" withBg={true}>
        <AlertContainer className="flex items-start">
          <AlertIcon />
          <AlertBody className="flex flex-col items-start gap-3">
            <AlertTitle>Alert here</AlertTitle>
            <AlertDescription className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </AlertDescription>
            <fieldset className="flex items-center gap-2">
              <Checkbox id="checked3" variant="checked" className="border-success-200 peer-checked:bg-success-500" />
              <Label htmlFor="checked3" className="text-body-4 font-normal text-success-500">
                Don&apos;t show again
              </Label>
            </fieldset>
            <AlertContainer>
              <Button size="sm" color="success">
                Learn More
              </Button>
              <Button size="sm" color="success" variant="outline">
                Dismiss
              </Button>
            </AlertContainer>
          </AlertBody>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert className="!max-w-[420px]" color="warning" withBg={true}>
        <AlertContainer className="flex items-start">
          <AlertIcon />
          <AlertBody className="flex flex-col items-start gap-3">
            <AlertTitle>Alert here</AlertTitle>
            <AlertDescription className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </AlertDescription>
            <fieldset className="flex items-center gap-2">
              <Checkbox id="checked4" variant="checked" className="border-warning-200 peer-checked:bg-warning-500" />
              <Label htmlFor="checked4" className="text-body-4 font-normal text-warning-500">
                Don&apos;t show again
              </Label>
            </fieldset>
            <AlertContainer>
              <Button size="sm" color="warning">
                Learn More
              </Button>
              <Button size="sm" color="warning" variant="outline">
                Dismiss
              </Button>
            </AlertContainer>
          </AlertBody>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert className="!max-w-[420px]" color="error" withBg={true}>
        <AlertContainer className="flex items-start">
          <AlertIcon />
          <AlertBody className="flex flex-col items-start gap-3">
            <AlertTitle>Alert here</AlertTitle>
            <AlertDescription className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </AlertDescription>
            <fieldset className="flex items-center gap-2">
              <Checkbox id="checked5" variant="checked" className="border-error-200 peer-checked:bg-error-500" />
              <Label htmlFor="checked5" className="text-body-4 font-normal text-error-500">
                Don&apos;t show again
              </Label>
            </fieldset>
            <AlertContainer>
              <Button size="sm" color="error">
                Learn More
              </Button>
              <Button size="sm" color="error" variant="outline">
                Dismiss
              </Button>
            </AlertContainer>
          </AlertBody>
          <AlertDismiss />
        </AlertContainer>
      </Alert> */}
    </div>
  )
}

const AlertWithCardCode = `
import {
  Alert,
  AlertBody,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertTitle,
  Button,
  Checkbox,
  Label,
} from 'keep-react'

export const AlertComponent = () => {
  return (
    <Alert className="!max-w-[420px]" color="primary" withBg={true}>
      <AlertContainer className="flex items-start">
        <AlertIcon />
        <AlertBody className="flex flex-col items-start gap-3">
          <AlertTitle className="text-body-2">Alert here</AlertTitle>
          <AlertDescription className="block w-full sm:line-clamp-none">
            A short description followed by two actions items.
          </AlertDescription>
          <fieldset className="flex items-center gap-2">
            <Checkbox id="checked1" variant="checked" className="border-primary-500 peer-checked:bg-primary-500" />
            <Label htmlFor="checked1" className="text-body-4 font-normal text-primary-500">
              Don&apos;t show again
            </Label>
          </fieldset>
          <AlertContainer>
            <Button size="sm" color="primary">
              Learn More
            </Button>
            <Button size="sm" color="primary" variant="outline">
              Dismiss
            </Button>
          </AlertContainer>
        </AlertBody>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  )
}

`

export { AlertWithCard, AlertWithCardCode }
