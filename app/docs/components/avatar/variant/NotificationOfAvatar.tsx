import { Avatar } from "~/src";

const NotificationOfAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        shape="round"
        size="xl"
        statusType="notification"
        status="online"
        statusPosition="bottom-left"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="xl"
        status="offline"
        statusType="notification"
        statusPosition="bottom-right"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="xl"
        status="busy"
        statusPosition="top-left"
        statusType="notification"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
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
import { Avatar } from "keep-react";
const NotificationOfAvatar = () => {
  return (
      <Avatar 
        shape="round"
        size="xl"
        statusType="notification"
        status="online"
        statusPosition="bottom-left"
        totalNotification={99}
        img="/images/avatar/avatar-4.png"
      />
  );
};
`;

export { NotificationOfAvatar, NotificationOfAvatarCode };
