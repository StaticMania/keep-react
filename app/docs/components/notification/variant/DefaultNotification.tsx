'use client'
import { useState } from 'react'
import { Button, Notification } from '~/src'

const DefaultNotification = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-2 py-3">
      <Button onClick={handleShowNotification} type="primary">
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-sm"
        additionalContent={
          <div className="mt-2.5">
            <p className="text-sm font-normal text-slate-500 md:text-base">
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-base font-medium text-slate-700 md:text-xl">Can we store cookies?</h3>
      </Notification>
    </div>
  )
}

const DefaultNotificationCode = `
"use client";
import { useState } from "react";
import { Button, Notification } from "keep-react";

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
      <Button onClick={handleShowNotification} type="primary">Show Notification</Button>
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
    </>
  );
}
`

export { DefaultNotification, DefaultNotificationCode }
