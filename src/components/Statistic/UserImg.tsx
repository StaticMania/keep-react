import { FC } from 'react'
import { Avatar } from '../Avatar/Avatar'

export interface UserImgProps {
  img: string
}

export const UserImg: FC<UserImgProps> = ({ img }) => {
  return <Avatar size="lg" shape="circle" img={img} />
}
