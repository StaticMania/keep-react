import { FC } from 'react'
import { Avatar } from '../Avatar/Avatar'

/**
 * Props for the UserImg component.
 * @interface UserImgProps
 */
export interface UserImgProps {
  /**
   * The URL for the user's image.
   * @type {string}
   */
  img: string
}

export const UserImg: FC<UserImgProps> = ({ img }) => {
  return <Avatar size="lg" shape="circle" img={img} />
}
