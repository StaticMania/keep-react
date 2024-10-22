import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../../../src'

const CardWithAvatar = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-1.png" />
            <AvatarFallback>KR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-2.png" />
            <AvatarFallback>BR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-3.png" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-4.png" />
            <AvatarFallback>DD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-5.png" />
            <AvatarFallback>CX</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

const CardWithAvatarCode = {
  'CardComponent.tsx': `
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Card, CardContent, CardDescription, CardTitle } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Our Contributors</CardTitle>
        <CardDescription>They help us to grow up the keep react component library</CardDescription>
        <AvatarGroup className="mt-3">
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-1.png" />
            <AvatarFallback>KR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-2.png" />
            <AvatarFallback>BR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-3.png" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-4.png" />
            <AvatarFallback>DD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-5.png" />
            <AvatarFallback>CX</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}
`,
}
export { CardWithAvatar, CardWithAvatarCode }
