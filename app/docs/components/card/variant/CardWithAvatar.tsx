import { Avatar, AvatarGroup, AvatarImage, Card, CardContent, CardDescription, CardTitle } from '../../../../src'

const CardWithAvatar = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-1.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-2.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-3.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-4.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-5.png" />
          </Avatar>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

const CardWithAvatarCode = {
  'CardComponent.tsx': `
import { Avatar, AvatarGroup, AvatarImage, Card, CardContent, CardDescription, CardTitle } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-1.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-2.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-3.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-4.png" />
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="/images/avatar/avatar-5.png" />
          </Avatar>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}
`,
}
export { CardWithAvatar, CardWithAvatarCode }
