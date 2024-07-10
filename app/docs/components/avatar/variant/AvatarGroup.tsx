import { Avatar, AvatarGroup, AvatarImage } from '../../../../src'

const AvatarGroupComponent = () => {
  return (
    <AvatarGroup>
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
  )
}

const AvatarGroupCode = `
import { Avatar, AvatarGroup, AvatarImage } from 'keep-react'

const AvatarGroupComponent = () => {
  return (
    <AvatarGroup>
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
  )
}

`

export { AvatarGroupCode, AvatarGroupComponent }
