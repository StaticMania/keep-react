"use client";
import Image from "next/image";
import { Timeline } from "@/src/components";

const TimelineWithImage = () => {
  return (
    <div className="py-6 px-5">
      <Timeline timelineBarType="dashed" gradientPoint={true}>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>

            <Image
              height={220}
              width={400}
              src="/images/banner/timeline.png"
              alt="timeline"
            />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2023</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>

            <Image
              height={213}
              width={340}
              src="/images/banner/banner.png"
              alt="timeline"
              className="rounded-lg"
            />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

const TimelineWithImageCode = `
"use client";
import { Timeline } from "keep-react";
import Image from "next/image";

const TimelineWithImage = () => {
  return (
    <Timeline timelineBarType="dashed" gradientPoint={true}>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2023</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>

          <Image
            height={220}
            width={400}
            src="/images/banner/timeline.png"
            alt="timeline"
          />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 2023</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>

          <Image
            height={213}
            width={340}
            src="/images/banner/banner.png"
            alt="timeline"
          />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2023</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default TimelineWithImage;
`;
export { TimelineWithImage, TimelineWithImageCode };
