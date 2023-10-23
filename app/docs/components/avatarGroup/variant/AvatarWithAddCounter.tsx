"use client";
import { Avatar } from "~/src";

const AvatarWithPlusCounter = () => {
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
      <Avatar.Counter size="md" total={99} href="/" />
      <Avatar.Add
        icon="/images/icon/plus.png"
        bg="#444D61"
        size="md"
        ringColor="ring-[#444D61]"
        iconColor="text-white"
      />
    </Avatar.Group>
  );
};

const AvatarWithPlusCounterCode = `
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
      <Avatar.Counter size="md" total={99} href="/" />
      <Avatar.Add
        icon="/images/icon/plus.png"
        bg="#444D61"
        size="md"
        ringColor="ring-[#444D61]"
        iconColor="text-white"
      />
    </Avatar.Group>
  );
};
`;

export { AvatarWithPlusCounterCode, AvatarWithPlusCounter };
