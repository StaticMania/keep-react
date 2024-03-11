'use client'
import { Alert } from '../../../../src'

const AlertWithBgColor = () => {
  return (
    <div className="space-y-5">
      <Alert withBg={true} color="primary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert withBg={true} color="secondary">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert withBg={true} color="success">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert withBg={true} color="warning">
        <Alert.Container>
          <Alert.Icon />
          <Alert.Title>Alert here</Alert.Title>
          <Alert.Description>A short description followed by two actions items..</Alert.Description>
        </Alert.Container>
        <Alert.Link>Learn More</Alert.Link>
        <Alert.Dismiss />
      </Alert>
      <Alert withBg={true} color="error">
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

const AlertWithBgColorCode = `
'use client'
import { Alert } from 'keep-react'

export const AlertComponent = () => {
  return (
    <Alert withBg={true} color="primary">
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items..</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss />
    </Alert>
  )
}
`

export { AlertWithBgColor, AlertWithBgColorCode }
