"use client";
import { Avatar } from "~/src";

const NotificationOfAvatar = () => {
  return (
    <div className="flex items-center gap-3 pl-5 h-20">
      <Avatar
        shape="circle"
        size="xl"
        statusType="notification"
        status="online"
        statusPosition="bottom-left"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="offline"
        statusType="notification"
        statusPosition="bottom-right"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="busy"
        statusPosition="top-left"
        statusType="notification"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="circle"
        size="xl"
        status="away"
        bordered
        statusPosition="top-right"
        statusType="notification"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
    </div>
  );
};

const NotificationOfAvatarCode = `
"use client";
import { Avatar } from "keep-react";

const NotificationOfAvatar = () => {
  return (
      <Avatar 
        shape="circle"
        size="xl"
        statusType="notification"
        status="online"
        statusPosition="bottom-left"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
  );
};

export default NotificationOfAvatar;
`;

export { NotificationOfAvatar, NotificationOfAvatarCode };
