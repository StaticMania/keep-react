"use client";
import { Avatar } from "~/src";

const ImageOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar shape="circle" size="xl" img="/images/avatar/avatar-4.png" />
      <Avatar shape="rounded" size="xl" img="/images/avatar/avatar-4.png" />
      <Avatar shape="square" size="xl" img="/images/avatar/avatar-4.png" />
    </div>
  );
};

const ImageOfAvatarCode = `
"use client";
import { Avatar } from "keep-react";
const ImageOfAvatar = () => {
  return (
      <Avatar shape="circle" size="xl"  img="/images/avatar/avatar-4.png" />
  );
};

export defaul ImageOfAvatar;
`;

export { ImageOfAvatar, ImageOfAvatarCode };
