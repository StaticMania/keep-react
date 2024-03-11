'use client'
import { Alert } from '../../../../src'

const AlertWithColorVariant = () => {
  return (
    <div className="space-y-5">
      <Alert color="primary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="secondary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="success">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="warning">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="error">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
    </div>
  )
}

const AlertWithColorVariantCode = `
'use client'
import { Alert } from 'keep-react'

export const AlertComponent = () => {
  return (
    <div className="space-y-5">
      <Alert color="primary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="secondary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="success">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="warning">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert color="error">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
    </div>
  )
}
`

export { AlertWithColorVariant, AlertWithColorVariantCode }
