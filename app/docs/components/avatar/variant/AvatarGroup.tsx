import { Avatar, AvatarCounter, AvatarGroup } from '../../../../src'

const AvatarGroupComponent = () => {
  return (
    <AvatarGroup>
      <Avatar img="/images/avatar/avatar-2.png" />
      <Avatar img="/images/avatar/avatar-3.png" />
      <Avatar img="/images/avatar/avatar-4.png" />
      <Avatar img="/images/avatar/avatar-5.png" />
      <AvatarCounter>+9</AvatarCounter>
    </AvatarGroup>
  )
}

const AvatarGroupCode = `
import { Avatar, AvatarCounter, AvatarGroup } from 'keep-react'

const AvatarGroupComponent = () => {
  return (
    <AvatarGroup>
      <Avatar img="/images/avatar/avatar-2.png" />
      <Avatar img="/images/avatar/avatar-3.png" />
      <Avatar img="/images/avatar/avatar-4.png" />
      <Avatar img="/images/avatar/avatar-5.png" />
      <AvatarCounter>+9</AvatarCounter>
    </AvatarGroup>
  )
}
`

export { AvatarGroupCode, AvatarGroupComponent }
