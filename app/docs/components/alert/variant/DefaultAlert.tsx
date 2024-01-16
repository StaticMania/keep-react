import { Alert } from '../../../../src'

const DefaultAlert = () => {
  return (
    <Alert color="primary">
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss />
    </Alert>
  )
}

const DefaultAlertCode = `
import { Alert } from 'keep-react'

export const AlertComponent = () => {
  return (
    <Alert color="primary">
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss />
    </Alert>
  )
}
`

export { DefaultAlert, DefaultAlertCode }
