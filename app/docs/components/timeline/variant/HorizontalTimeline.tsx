'use client'
import { Timeline } from '../../../../src'
import { CalendarBlank } from 'phosphor-react'

const HorizontalTimeline = () => {
  return (
    <div className="px-5 py-6">
      <Timeline horizontal={true}>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Title>New Years Day</Timeline.Title>
            <Timeline.Time>January 1st</Timeline.Time>
            <Timeline.Body>Celebrating the start of a new year with friends and family.</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Title>Birthday Bash</Timeline.Title>
            <Timeline.Time>May 15th</Timeline.Time>
            <Timeline.Body>Throwing a fun-filled birthday party to celebrate another year of life.</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Title>Independence Day</Timeline.Title>
            <Timeline.Time>July 4th</Timeline.Time>
            <Timeline.Body>Enjoying a spectacular display of fireworks and patriotic festivities.</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default HorizontalTimeline

const HorizontalTimelineCode = `
"use client";
import { Timeline } from "keep-react";
import { CalendarBlank } from "phosphor-react";

export const TimelineComponent = () => {
  return (
    <Timeline horizontal={true}>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16}  />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.0.0</Timeline.Title>
          <Timeline.Time>Released on December 2, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16}  />} />
        <Timeline.Content>
          <Timeline.Title>Keep Library v1.1.0</Timeline.Title>
          <Timeline.Time>Released on December 23, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={<CalendarBlank size={16}  />} />
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
}
`

export { HorizontalTimeline, HorizontalTimelineCode }
