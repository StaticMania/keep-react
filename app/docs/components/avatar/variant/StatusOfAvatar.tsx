"use client";
import { Avatar } from "~/src";

const StatusOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        shape="circle"
        size="xl"
        status="online"
        statusPosition="bottom-left"
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="offline"
        statusPosition="bottom-right"
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="busy"
        statusPosition="top-left"
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="away"
        statusPosition="top-right"
        img="/images/avatar/avatar-4.png"
      />
    </div>
  );
};

const StatusOfAvatarCode = `
"use client";
import { Avatar } from "keep-react";

const StatusOfAvatar = () => {
  return (
      <Avatar shape="circle" size="xl" status="online"  statusPosition="bottom-left"  img="/images/avatar/avatar-4.png" />
  );
};

export const StatusOfAvatar;
`;

export { StatusOfAvatar, StatusOfAvatarCode };
