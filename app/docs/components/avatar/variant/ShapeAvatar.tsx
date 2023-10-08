"use client";
import { Avatar } from "~/src";

const ShapeAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="round" />
      <Avatar shape="roundSquare" />
      <Avatar shape="square" />
    </div>
  );
};

const ShapeAvatarCode = `
"use client";
import { Avatar } from "keep-react";

const ShapeAvatar = () => {
  return (
      <Avatar shape="round" />
  );
};

export default NotificationOfAvatar;
`;

export { ShapeAvatar, ShapeAvatarCode };
