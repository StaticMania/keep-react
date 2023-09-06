"use client";
import { Button, Notification } from "@/src/components";

const DefaultNotification = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-sm"
      additionalContent={
        <div className="mt-2.5">
          <p className="text-sm md:text-base font-normal text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
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

const DefaultNotificationCode = `

"use client";
import { Notification,Button } from "keep-react";

const DefaultNotification = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-sm"
      additionalContent={
        <div className="mt-2.5">
          <p className="text-sm md:text-base font-normal text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
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

export default DefaultNotification;

`;

export { DefaultNotification, DefaultNotificationCode };
