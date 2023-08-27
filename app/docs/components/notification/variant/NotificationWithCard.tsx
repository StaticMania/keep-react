"use client";
import { Button } from "@/src/components/Button";
import { Notification } from "@/src/components/Notification";

const NotificationWithCard = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      className="max-w-sm"
      onDismiss={onDismiss}
      headerBannerSrc="/images/banner/banner.png"
      additionalContent={
        <div className="mt-2.5 text-sm md:text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
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
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Welcome Keep Design
      </h3>
    </Notification>
  );
};

const NotificationWithCardCode = `
"use client";
import { Notification,Button } from "keep-design";

const NotificationWithCard = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      className="max-w-sm"
      onDismiss={onDismiss}
      headerBannerSrc="/images/banner/banner.png"
      additionalContent={
        <div className="mt-2.5 text-sm md:text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
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
      <h3 className="text-base md:text-xl font-medium text-slate-700">
        Welcome Keep Design
      </h3>
    </Notification>
  );
};

export default NotificationWithCard;
`;

export { NotificationWithCard, NotificationWithCardCode };
