"use client";

import { Avatar } from "@/src/components/Avatar/Avatar";

const page = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <Avatar.Group>
        <Avatar
          shape="round"
          size="md"
          stacked={true}
          img="./images/avatar/avatar-1.png"
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
        <Avatar.Add
          icon="/images/icon/plus.png"
          bg="#444D61"
          size="md"
          ringColor="ring-[#444D61]"
          iconColor="text-white"
        />
      </Avatar.Group>
    </div>
  );
};

export default page;
