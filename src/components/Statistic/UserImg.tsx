import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";

interface UserImgProps {
  img: string;
}

const UserImg: FC<UserImgProps> = ({ img }) => {
  return <Avatar size="lg" shape="round" img={img} />;
};

export default UserImg;
