"use client";
import { Avatar } from "~/src";

const DefaultAvatar = () => {
  return <Avatar />;
};

const DefaultAvatarCode = `
"use client";
import { Avatar } from "keep-react";

const DefaultAvatar = () => {
  return <Avatar/>;
};

export default DefaultAvatar;
`;

export { DefaultAvatar, DefaultAvatarCode };
