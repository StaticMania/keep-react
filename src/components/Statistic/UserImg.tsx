import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";

interface UserImgProps {
  img: string;
}

export const UserImg: FC<UserImgProps> = ({ img }) => {
  return <Avatar size="lg" shape="round" img={img} />;
};
