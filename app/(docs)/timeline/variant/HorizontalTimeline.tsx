"use client";
import { Timeline } from "@/src/components/Timeline";
import { CalendarBlank } from "phosphor-react";

const HorizontalTimeline = () => {
  return (
    <Timeline horizontal={true}>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.0.0</Timeline.Title>
          <Timeline.Time>Released on December 2, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.1.0</Timeline.Title>
          <Timeline.Time>Released on December 23, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.3.0</Timeline.Title>
          <Timeline.Time>Released on January 5, 2022</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const HorizontalTimelineCode = `
"use client";
import { Timeline } from "keep-design";
import { CalendarBlank } from "phosphor-react";

const HorizontalTimeline = () => {
  return (
    <Timeline horizontal={true}>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.0.0</Timeline.Title>
          <Timeline.Time>Released on December 2, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.1.0</Timeline.Title>
          <Timeline.Time>Released on December 23, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={12} color="#ffffff" />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.3.0</Timeline.Title>
          <Timeline.Time>Released on January 5, 2022</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default HorizontalTimeline;
`;

export { HorizontalTimeline, HorizontalTimelineCode };
