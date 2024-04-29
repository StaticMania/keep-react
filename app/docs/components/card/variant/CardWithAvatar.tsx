import { Avatar, AvatarCounter, AvatarGroup, Card, CardContent, CardDescription, CardTitle } from '../../../../src'

const CardWithAvatar = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar img="/images/avatar/avatar-2.png" />
          <Avatar img="/images/avatar/avatar-3.png" />
          <Avatar img="/images/avatar/avatar-4.png" />
          <Avatar img="/images/avatar/avatar-5.png" />
          <AvatarCounter>+9</AvatarCounter>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

const CardWithAvatarCode = `
import { Avatar, AvatarCounter, AvatarGroup, Card, CardContent, CardDescription, CardTitle } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar img="/images/avatar/avatar-2.png" />
          <Avatar img="/images/avatar/avatar-3.png" />
          <Avatar img="/images/avatar/avatar-4.png" />
          <Avatar img="/images/avatar/avatar-5.png" />
          <AvatarCounter>+9</AvatarCounter>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}
`
export { CardWithAvatar, CardWithAvatarCode }
