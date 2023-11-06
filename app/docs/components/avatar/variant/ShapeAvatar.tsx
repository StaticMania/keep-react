"use client";
import { Avatar } from "~/src";

const ShapeAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="circle" />
      <Avatar shape="rounded" />
      <Avatar shape="square" />
    </div>
  );
};

const ShapeAvatarCode = `
"use client";
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return (
    <>
      <Avatar shape="circle" />
      <Avatar shape="rounded" />
      <Avatar shape="square" />
    </>
  );
}
`;

export { ShapeAvatar, ShapeAvatarCode };
