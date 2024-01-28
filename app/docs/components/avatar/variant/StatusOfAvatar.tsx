import { Avatar } from '../../../../src'

const StatusOfAvatar = () => {
  return (
    <div className="my-5 flex items-center gap-3">
      <Avatar active={true} verified={true} shape="circle" color="primary" />
      <Avatar active={true} verified={true} shape="rounded" color="error" />
    </div>
  )
}

const StatusOfAvatarCode = `
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return (
    <>
      <Avatar active={true} verified={true} shape="circle" color="primary" />
      <Avatar active={true} verified={true} shape="rounded" color="error" />
    </>
  );
}
`

export { StatusOfAvatar, StatusOfAvatarCode }
