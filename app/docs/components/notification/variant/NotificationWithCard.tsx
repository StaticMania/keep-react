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
      <Button variant="primary" onClick={handleShowNotification}>
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
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info" width="half">
                Download
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3" width="half">
                View Figma
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">Welcome Keep Design</h3>
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
      <Button variant="primary" onClick={handleShowNotification}>Show Notification</Button>
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
              <Button size="xs" variant="primary" color="info" width="half">
                Download
              </Button>
              <Button
                size="xs"
                variant="outlineGray"
                color="info"
                className="ml-3"
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
