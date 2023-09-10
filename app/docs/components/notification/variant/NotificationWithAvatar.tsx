"use client";
import { Notification, Button, Avatar } from "~/src";

const NotificationWithAvatar = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      additionalContent={
        <div className="mt-2.5 text-sm md:text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          <div className="mt-6 flex">
            <Button size="xs" type="primary" color="info">
              Accept
            </Button>
            <Button
              size="xs"
              type="outlineGray"
              color="info"
              customClass="ml-3"
            >
              View Profile
            </Button>
          </div>
        </div>
      }
      infoIcon={
        <div className="h-12 w-12">
          <Avatar shape="round" size="md" img="/images/avatar/avatar-4.png" />
        </div>
      }
    >
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Rono Pixel
        <span className="pl-2 text-xs md:text-sm font-medium text-slate-400">
          Product Designer
        </span>
      </h3>
    </Notification>
  );
};

const NotificationWithAvatarCode = `
"use client";
import { Notification,Button,Avatar } from "keep-react";

const NotificationWithAvatar = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      additionalContent={
        <div className="mt-2.5 text-sm md:text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          <div className="mt-6 flex">
            <Button size="xs" type="primary" color="info">
              Accept
            </Button>
            <Button
              size="xs"
              type="outlineGray"
              color="info"
              customClass="ml-3"
            >
              View Profile
            </Button>
          </div>
        </div>
      }
      infoIcon={
        <div className="h-12 w-12">
          <Avatar shape="round" size="md" img="/images/avatar/avatar-4.png" />
        </div>
      }
    >
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Rono Pixel
        <span className="pl-2 text-xs md:text-sm font-medium text-slate-400">
          Product Designer
        </span>
      </h3>
    </Notification>
  );
};

export default NotificationWithAvatar;
`;

export { NotificationWithAvatar, NotificationWithAvatarCode };
