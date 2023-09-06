"use client";
import { Cookie } from "phosphor-react";
import { Button } from "@/src/components/Button";
import { Notification } from "@/src/components/Notification";

const NotificationWithIcon = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      infoIcon={
        <Button type="default" circle={true} size="xs">
          <span>
            <Cookie size={24} weight="bold" color="#3D4A5C" />
          </span>
        </Button>
      }
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
              Review
            </Button>
          </div>
        </div>
      }
    >
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Can we store cookies?
      </h3>
    </Notification>
  );
};

const NotificationWithIconCode = `
"use client";
import { Notification,Button } from "keep-react";
import { Cookie } from "phosphor-react";

const NotificationWithIcon = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      infoIcon={
        <Button type="default" circle={true} size="xs">
          <span>
            <Cookie size={24} weight="bold" color="#3D4A5C" />
          </span>
        </Button>
      }
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
              Review
            </Button>
          </div>
        </div>
      }
    >
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Can we store cookies?
      </h3>
    </Notification>
  );
};

export default NotificationWithIcon;
`;

export { NotificationWithIcon, NotificationWithIconCode };
