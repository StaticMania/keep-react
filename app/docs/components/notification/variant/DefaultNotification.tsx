"use client";
import { useState } from "react";
import { Button, Notification } from "~/src";

const DefaultNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const onDismiss = () => {
    setShowNotification(!showNotification);
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };
  return (
    <div className="py-3 px-2">
      <Button onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
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
    </div>
  );
};

const DefaultNotificationCode = `
"use client";
import { Notification, Button } from "keep-react";

const NotificationComponent = () => {

  const [showNotification, setShowNotification] = useState(false);
  const onDismiss = () => {
    setShowNotification(!showNotification);
  };
  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="py-3 px-2">
      <Button onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
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
    </div>
  );
};

export default NotificationComponent;
`;

export { DefaultNotification, DefaultNotificationCode };
