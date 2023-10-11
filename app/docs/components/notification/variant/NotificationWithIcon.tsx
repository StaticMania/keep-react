"use client";
import { useState } from "react";
import { Cookie } from "phosphor-react";
import { Notification, Button } from "~/src";

const NotificationWithIcon = () => {
  const [showNotification, setShowNotification] = useState(false);
  const onDismiss = () => {
    setShowNotification(!showNotification);
  };
  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="px-2 py-3">
      <Button onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="top-right"
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
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
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

const NotificationWithIconCode = `
"use client";
import { Cookie } from "phosphor-react";
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
    <div className="px-2 py-3">
      <Button onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="top-right"
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
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
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

export { NotificationWithIcon, NotificationWithIconCode };
