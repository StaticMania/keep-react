"use client";
import { Button, Timeline } from "~/src";
import { ArrowRight, CalendarBlank } from "phosphor-react";

const DashedBorderTimeline = () => {
  return (
    <div className="px-5 py-6">
      <Timeline timelineBarType="dashed">
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>New Feature Launch</Timeline.Title>
            <Timeline.Body>
              Introducing a set of exciting new features that enhance user
              experience and functionality.
            </Timeline.Body>
            <Button type="primary" size="sm">
              Explore Features
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
          <Timeline.Content>
            <Timeline.Time>March 2023</Timeline.Time>
            <Timeline.Title>User Interface Refinement</Timeline.Title>
            <Timeline.Body>
              Embarking on a user interface refinement phase to improve
              aesthetics and usability.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>Performance Optimization</Timeline.Title>
            <Timeline.Body>
              Focusing on performance optimization to ensure a seamless and
              efficient user experience.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default DashedBorderTimeline;

const DashedBorderTimelineCode = `
"use client";
import { Button,Timeline } from "keep-react";
import { ArrowRight, CalendarBlank } from "phosphor-react";

const DashedBorderTimeline = () => {
  return (
    <Timeline timelineBarType="dashed">
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
        <Timeline.Content>
          <Timeline.Time>February 2023</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          <Button type="primary" size="sm">
            Learn More
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
        <Timeline.Content>
          <Timeline.Time>March 2023</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank color="#ffffff" size={12} />} />
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

export default DashedBorderTimeline;
`;

export { DashedBorderTimeline, DashedBorderTimelineCode };
