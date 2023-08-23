"use client";
import { Avatar } from "@/src/components/Avatar/Avatar";

const DefaultAvatarGroup = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar shape="round" size="md" stacked={true} />
      <Avatar shape="round" size="md" stacked={true} />
    </Avatar.Group>
  );
};

const DefaultAvatarGroupCode = `
"use client";
import { Avatar } from "keep-design";
const DefaultAvatarGroup = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar shape="round" size="md" stacked={true} />
      <Avatar shape="round" size="md" stacked={true} />
    </Avatar.Group>
  );
};

export default DefaultAvatarGroup;
`;

export { DefaultAvatarGroupCode, DefaultAvatarGroup };
