import { Avatar } from '../../../../src'

const AvatarGroup = () => {
  return (
    <Avatar.Group>
      <Avatar img="/images/avatar/avatar-2.png" />
      <Avatar img="/images/avatar/avatar-3.png" />
      <Avatar img="/images/avatar/avatar-4.png" />
      <Avatar img="/images/avatar/avatar-5.png" />
      <Avatar.Counter>+9</Avatar.Counter>
    </Avatar.Group>
  )
}

const AvatarGroupCode = `
import { Avatar } from 'keep-react'

const AvatarGroupComponent = () => {
  return (
    <Avatar.Group>
      <Avatar img="/images/avatar/avatar-2.png" />
      <Avatar img="/images/avatar/avatar-3.png" />
      <Avatar img="/images/avatar/avatar-4.png" />
      <Avatar img="/images/avatar/avatar-5.png" />
      <Avatar.Counter>+9</Avatar.Counter>
    </Avatar.Group>
  )
}
`

export { AvatarGroup, AvatarGroupCode }
