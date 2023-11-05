"use client";
import { Avatar } from "~/src";

const DefaultAvatarGroup = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar shape="circle" size="md" stacked={true} />
      <Avatar shape="circle" size="md" stacked={true} />
    </Avatar.Group>
  );
};

const DefaultAvatarGroupCode = `
"use client";
import { Avatar } from "keep-react";

export const AvatarGroupComponent = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar shape="circle" size="md" stacked={true} />
      <Avatar shape="circle" size="md" stacked={true} />
    </Avatar.Group>
  );
};
`;

export { DefaultAvatarGroupCode, DefaultAvatarGroup };
