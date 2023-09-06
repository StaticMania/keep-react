"use client";
import { Avatar } from "@/src/components";

const AvatarWithCounter = () => {
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
      <Avatar.Counter size="md" total={99} href="/" />
    </Avatar.Group>
  );
};

const AvatarWithCounterCode = `
"use client";
import { Avatar } from "keep-react";

const AvatarWithCounter = () => {
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
      <Avatar.Counter size="md" total={99} href="/" />
    </Avatar.Group>
  );
};

export default AvatarWithCounter;
`;

export { AvatarWithCounter, AvatarWithCounterCode };
