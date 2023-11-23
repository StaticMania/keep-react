'use client'
import { useState } from 'react'
import { Cookie } from 'phosphor-react'
import { Notification, Button } from '~/src'

const NotificationWithIcon = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
      <Button buttonType="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-left"
        className="max-w-[400px]"
        infoIcon={
          <Button buttonType="default" circle={true} size="xs">
            <span>
              <Cookie size={24} weight="bold" color="#3D4A5C" />
            </span>
          </Button>
        }
        additionalContent={
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" buttonType="primary" color="info">
                Accept
              </Button>
              <Button size="xs" buttonType="outlineGray" color="info" className="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">Can we store cookies?</h3>
      </Notification>
    </div>
  )
}

const NotificationWithIconCode = `
"use client";
import { useState } from "react";
import { Cookie } from "phosphor-react";
import { Notification, Button } from "keep-react";

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
      <Button buttonType="primary" onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-left"
        className="max-w-[400px]"
        infoIcon={
          <Button buttonType="default" circle={true} size="xs">
            <span>
              <Cookie size={24} weight="bold" color="#3D4A5C" />
            </span>
          </Button>
        }
        additionalContent={
          <div className="mt-2.5 text-body-5 md:text-body-4 font-normal text-metal-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" buttonType="primary" color="info">
                Accept
              </Button>
              <Button
                size="xs"
                buttonType="outlineGray"
                color="info"
                className="ml-3"
              >
                Review
              </Button>
            </div>
          </div>
        }
      >
        <h3 className="text-body-4 md:text-body-2 font-medium text-metal-700">
          Can we store cookies?
        </h3>
      </Notification>
    </>
  );
}
`

export { NotificationWithIcon, NotificationWithIconCode }
