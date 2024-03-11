'use client'
import { Avatar, Card } from '../../../../src'
const CardWithAvatar = () => {
  return (
    <Card className="max-w-md">
      <Card.Content>
        <Card.Title>Our Contributors</Card.Title>
        <Card.Description>They help us to grow up the keep react component library</Card.Description>
        <Avatar.Group className="mt-3">
          <Avatar img="/images/avatar/avatar-2.png" />
          <Avatar img="/images/avatar/avatar-3.png" />
          <Avatar img="/images/avatar/avatar-4.png" />
          <Avatar img="/images/avatar/avatar-5.png" />
          <Avatar.Counter>+9</Avatar.Counter>
        </Avatar.Group>
      </Card.Content>
    </Card>
  )
}

const CardWithAvatarCode = `
'use client'
import { Avatar, Card } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <Card.Content>
        <Card.Title>Our Contributors</Card.Title>
        <Card.Description>They help us to grow up the keep react component library</Card.Description>
        <Avatar.Group className="mt-3">
          <Avatar img="/images/avatar/avatar-2.png" />
          <Avatar img="/images/avatar/avatar-3.png" />
          <Avatar img="/images/avatar/avatar-4.png" />
          <Avatar img="/images/avatar/avatar-5.png" />
          <Avatar.Counter>+9</Avatar.Counter>
        </Avatar.Group>
      </Card.Content>
    </Card>
  )
}
`
export { CardWithAvatar, CardWithAvatarCode }
