'use client'
import { Alert, Button, CheckBox } from '../../../../src'

const AlertWithCard = () => {
  return (
    <div className="space-y-5">
      <Alert className="!max-w-md" color="primary" withBg={true}>
        <Alert.Container className="flex items-start">
          <Alert.Icon />
          <Alert.Body className="flex flex-col items-start gap-3">
            <Alert.Title className="text-body-2">Alert here</Alert.Title>
            <Alert.Description className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </Alert.Description>
            <div>
              <CheckBox
                size="md"
                variant="square"
                label="Don't show again"
                id="one"
                color="info"
                labelStyle="text-body-4 font-medium text-metal-900"
              />
            </div>
            <Alert.Container>
              <Button size="sm" color="primary">
                Learn More
              </Button>
              <Button size="sm" color="primary" variant="outline">
                Dismiss
              </Button>
            </Alert.Container>
          </Alert.Body>
          <Alert.Dismiss />
        </Alert.Container>
      </Alert>
      <Alert className="!max-w-md" color="secondary" withBg={true}>
        <Alert.Container className="flex items-start">
          <Alert.Icon />
          <Alert.Body className="flex flex-col items-start gap-3">
            <Alert.Title>Alert here</Alert.Title>
            <Alert.Description className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </Alert.Description>
            <div>
              <CheckBox
                size="md"
                variant="square"
                label="Don't show again"
                id="two"
                color="info"
                labelStyle="text-body-4 font-medium text-metal-900"
              />
            </div>
            <Alert.Container>
              <Button size="sm" color="secondary">
                Learn More
              </Button>
              <Button size="sm" color="secondary" variant="outline">
                Dismiss
              </Button>
            </Alert.Container>
          </Alert.Body>
          <Alert.Dismiss />
        </Alert.Container>
      </Alert>
      <Alert className="!max-w-md" color="success" withBg={true}>
        <Alert.Container className="flex items-start">
          <Alert.Icon />
          <Alert.Body className="flex flex-col items-start gap-3">
            <Alert.Title>Alert here</Alert.Title>
            <Alert.Description className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </Alert.Description>
            <div>
              <CheckBox
                size="md"
                variant="square"
                label="Don't show again"
                id="three"
                color="info"
                labelStyle="text-body-4 font-medium text-metal-900"
              />
            </div>
            <Alert.Container>
              <Button size="sm" color="success">
                Learn More
              </Button>
              <Button size="sm" color="success" variant="outline">
                Dismiss
              </Button>
            </Alert.Container>
          </Alert.Body>
          <Alert.Dismiss />
        </Alert.Container>
      </Alert>
      <Alert className="!max-w-md" color="warning" withBg={true}>
        <Alert.Container className="flex items-start">
          <Alert.Icon />
          <Alert.Body className="flex flex-col items-start gap-3">
            <Alert.Title>Alert here</Alert.Title>
            <Alert.Description className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </Alert.Description>
            <div>
              <CheckBox
                size="md"
                variant="square"
                label="Don't show again"
                id="five"
                color="info"
                labelStyle="text-body-4 font-medium text-metal-900"
              />
            </div>
            <Alert.Container>
              <Button size="sm" color="warning">
                Learn More
              </Button>
              <Button size="sm" color="warning" variant="outline">
                Dismiss
              </Button>
            </Alert.Container>
          </Alert.Body>
          <Alert.Dismiss />
        </Alert.Container>
      </Alert>
      <Alert className="!max-w-md" color="error" withBg={true}>
        <Alert.Container className="flex items-start">
          <Alert.Icon />
          <Alert.Body className="flex flex-col items-start gap-3">
            <Alert.Title>Alert here</Alert.Title>
            <Alert.Description className="block w-full sm:line-clamp-none">
              A short description followed by two actions items.
            </Alert.Description>
            <div>
              <CheckBox
                size="md"
                variant="square"
                label="Don't show again"
                id="four"
                color="info"
                labelStyle="text-body-4 font-medium text-metal-900"
              />
            </div>
            <Alert.Container>
              <Button size="sm" color="error">
                Learn More
              </Button>
              <Button size="sm" color="error" variant="outline">
                Dismiss
              </Button>
            </Alert.Container>
          </Alert.Body>
          <Alert.Dismiss />
        </Alert.Container>
      </Alert>
    </div>
  )
}

const AlertWithCardCode = `
'use client'
import { Alert, Button, CheckBox } from 'keep-react'

export const AlertComponent = () => {
  return (
    <Alert className="!max-w-md" color="primary" withBg={true}>
      <Alert.Container className="flex items-start">
        <Alert.Icon />
        <Alert.Body className="flex flex-col items-start gap-3">
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description className="block w-full sm:line-clamp-none">
            A short description followed by two actions items.
          </Alert.Description>
          <div>
            <CheckBox
              size="md"
              variant="square"
              label="Don't show again"
              id="one"
              color="info"
              labelStyle="text-body-4 font-medium text-metal-900"
            />
          </div>
          <Alert.Container>
            <Button size="sm" color="primary">
              Learn More
            </Button>
            <Button size="sm" color="primary" variant="outline">
              Dismiss
            </Button>
          </Alert.Container>
        </Alert.Body>
        <Alert.Dismiss />
      </Alert.Container>
    </Alert>
  )
}
`

export { AlertWithCard, AlertWithCardCode }
