'use client'
import { useState } from 'react'
import { Notification, Button, Avatar } from '~/src'

const NotificationWithAvatar = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
      <Button variant="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info">
                Accept
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3">
                View Profile
              </Button>
            </div>
          </div>
        }
        infoIcon={
          <div className="h-12 w-12">
            <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">
          Rono Pixel
          <span className="pl-2 text-body-6 font-medium text-metal-400 md:text-body-5">Product Designer</span>
        </h3>
      </Notification>
    </div>
  )
}

const NotificationWithAvatarCode = `
"use client";
import { useState } from "react";
import { Notification, Button, Avatar } from "keep-react";

export const NotificationComponent = () => {

  const [showNotification, setShowNotification] = useState(false);
  const onDismiss = () => {
    setShowNotification(!showNotification);
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-body-5 md:text-body-4 font-normal text-metal-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info">
                Accept
              </Button>
              <Button
                size="xs"
                variant="outlineGray"
                color="info"
                className="ml-3"
              >
                View Profile
              </Button>
            </div>
          </div>
        }
        infoIcon={
          <div className="h-12 w-12">
            <Avatar
              shape="circle"
              size="md"
              img="/images/avatar/avatar-4.png"
            />
          </div>
        }
      >
        <h3 className="text-body-4 md:text-body-2 font-medium text-metal-700">
          Rono Pixel
          <span className="pl-2 text-body-6 md:text-body-5 font-medium text-metal-400">
            Product Designer
          </span>
        </h3>
      </Notification>
    </>
  );
};
`

export { NotificationWithAvatar, NotificationWithAvatarCode }
