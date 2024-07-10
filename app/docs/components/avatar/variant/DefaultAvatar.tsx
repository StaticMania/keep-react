import { Avatar, AvatarText } from '../../../../src'

const DefaultAvatar = () => {
  return (
    <Avatar>
      <AvatarText>KR</AvatarText>
    </Avatar>
  )
}

const DefaultAvatarCode = `
import { Avatar, AvatarText } from 'keep-react'

export const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarText>KR</AvatarText>
    </Avatar>
  )
}
`

export { DefaultAvatar, DefaultAvatarCode }
