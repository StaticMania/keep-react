'use client'
import { Avatar } from '~/src'

const DefaultAvatar = () => {
  return <Avatar />
}

const DefaultAvatarCode = `
"use client";
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return <Avatar/>;
}
`

export { DefaultAvatar, DefaultAvatarCode }
