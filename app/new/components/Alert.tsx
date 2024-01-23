import { FC } from 'react'
import { Alert } from '~/app/src'

const AlertComponent: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Alert color="primary">
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss />
    </Alert>
  )
}

export default AlertComponent
