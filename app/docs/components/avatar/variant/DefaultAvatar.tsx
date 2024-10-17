import { Avatar, AvatarFallback, AvatarImage } from '../../../../src'

const DefaultAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="/images/avatar/avatar-4.png" />
      <AvatarFallback>KR</AvatarFallback>
    </Avatar>
  )
}

const DefaultAvatarCode = {
  'AvatarComponent.tsx': `
import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'

export const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage src="/images/avatar/avatar-4.png" />
      <AvatarFallback>KR</AvatarFallback>
    </Avatar>
  )
}
`,
}

export { DefaultAvatar, DefaultAvatarCode }
