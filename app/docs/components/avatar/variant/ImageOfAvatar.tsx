import { Avatar } from "@/src/components";

const ImageOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="round" size="xl" img="/images/avatar/avatar-4.png" />
      <Avatar shape="roundSquare" size="xl" img="/images/avatar/avatar-4.png" />
      <Avatar shape="square" size="xl" img="/images/avatar/avatar-4.png" />
    </div>
  );
};

const ImageOfAvatarCode = `
import { Avatar } from "keep-react";
const ImageOfAvatar = () => {
  return (
      <Avatar shape="round" size="xl"  img="/images/avatar/avatar-4.png" />
  );
};
`;

export { ImageOfAvatar, ImageOfAvatarCode };
