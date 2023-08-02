import { Avatar } from "@/src/components/Avatar/Avatar";

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
import { Avatar } from "keep-design";
const ShapeAvatar = () => {
  return (
      <Avatar shape="round" />
  );
};
`;

export { ShapeAvatar, ShapeAvatarCode };
