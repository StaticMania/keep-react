import { Alert } from '../src'

const page = () => {
  return (
    <div className="py-20">
      <div className="container">
        <Alert color="primary">
          <Alert.Container>
            <Alert.Icon />
            <Alert.Title>Alert here</Alert.Title>
            <Alert.Description>A short description followed by two actions items.</Alert.Description>
          </Alert.Container>
          <Alert.Link>Learn More</Alert.Link>
          <Alert.Dismiss />
        </Alert>
      </div>
    </div>
  )
}

export default page
