import { Avatar, AvatarImage } from '../../../../src'

const ImageOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage />
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
      </Avatar>
    </div>
  )
}

const ImageOfAvatarCode = `
import { Avatar, AvatarImage } from "keep-react"

export const AvatarComponent = () => {
  return (
      <>
        <Avatar>
          <AvatarImage />
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-4.png" />
        </Avatar>
      </>
  )
}
`

export { ImageOfAvatar, ImageOfAvatarCode }
