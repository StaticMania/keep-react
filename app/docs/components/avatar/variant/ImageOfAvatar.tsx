'use client'
import { Avatar } from '../../../../src'

const ImageOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
      <Avatar shape="rounded" img="/images/avatar/avatar-4.png" />
    </div>
  )
}

const ImageOfAvatarCode = `
'use client'
import { Avatar } from "keep-react"

export const AvatarComponent = () => {
  return (
      <>
        <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
        <Avatar shape="rounded" img="/images/avatar/avatar-4.png" />
      </>
  )
}
`

export { ImageOfAvatar, ImageOfAvatarCode }
