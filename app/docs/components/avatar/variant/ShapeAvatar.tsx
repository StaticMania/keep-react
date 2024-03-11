'use client'
import { Avatar } from '../../../../src'

const ShapeAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="circle" />
      <Avatar shape="rounded" />
    </div>
  )
}

const ShapeAvatarCode = `
import { Avatar } from "keep-react"

export const AvatarComponent = () => {
  return (
    <>
      <Avatar shape="circle" />
      <Avatar shape="rounded" />
    </>
  )
}
`

export { ShapeAvatar, ShapeAvatarCode }
