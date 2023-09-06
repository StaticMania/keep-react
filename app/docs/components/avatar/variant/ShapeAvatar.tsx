import { Avatar } from "@/src/components";

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
import { Avatar } from "keep-react";
const ShapeAvatar = () => {
  return (
      <Avatar shape="round" />
  );
};
`;

export { ShapeAvatar, ShapeAvatarCode };
