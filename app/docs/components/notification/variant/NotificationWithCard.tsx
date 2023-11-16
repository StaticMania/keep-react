'use client'
import { useState } from 'react'
import { Button, Notification } from '~/src'

const NotificationWithCard = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-2 py-3">
      <Button type="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-right"
        className="max-w-sm"
        headerBannerSrc="https://images.prismic.io/staticmania/58497239-b7e5-44e9-8185-25d467f6c551_banner.png?auto=compress,format"
        additionalContent={
          <div className="text-metal-500 mt-2.5 text-body-5 font-normal md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info" width="half">
                Download
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3" width="half">
                View Figma
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-metal-700 text-body-4 font-medium md:text-body-2">Welcome Keep Design</h3>
      </Notification>
    </div>
  )
}

const NotificationWithCardCode = `
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
      <Button type="primary" onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-right"
        className="max-w-sm"
        headerBannerSrc="https://images.prismic.io/staticmania/58497239-b7e5-44e9-8185-25d467f6c551_banner.png?auto=compress,format"
        additionalContent={
          <div className="mt-2.5 text-body-5 md:text-body-4 font-normal text-metal-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info" width="half">
                Download
              </Button>
              <Button
                size="xs"
                type="outlineGray"
                color="info"
                customClass="ml-3"
                width="half"
              >
                View Figma
              </Button>
            </div>
          </div>
        }
      >
        <h3 className="text-body-4 md:text-body-2 font-medium text-metal-700">
          Welcome Keep Design
        </h3>
      </Notification>
    </>
  );
}
`

export { NotificationWithCard, NotificationWithCardCode }
