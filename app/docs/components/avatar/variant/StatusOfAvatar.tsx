import { Avatar, AvatarBadge, AvatarImage } from '../../../../src'

const StatusOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage />
        <AvatarBadge />
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarBadge />
      </Avatar>
    </div>
  )
}

const StatusOfAvatarCode = {
  'AvatarComponent.tsx': `
import { Avatar, AvatarBadge, AvatarImage } from 'keep-react'

export const AvatarComponent = () => {
  return (
    <>
      <Avatar>
        <AvatarImage />
        <AvatarBadge />
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarBadge />
      </Avatar>
    </>
  );
}
`,
}

export { StatusOfAvatar, StatusOfAvatarCode }
