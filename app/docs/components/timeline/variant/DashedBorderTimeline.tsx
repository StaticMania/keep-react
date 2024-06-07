import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '../../../../src'

const DashedBorderTimeline = () => {
  return (
    <div className="px-5 py-6">
      <Timeline className="border-dashed">
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2022
            </p>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 1 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2022
            </p>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 2 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2022
            </p>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 3 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default DashedBorderTimeline

const DashedBorderTimelineCode = `
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from 'keep-react'

export const TimelineComponent = () => {
  return (
    <Timeline className="border-dashed">
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">September 23,2022</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 1 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">September 23,2022</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 2 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">September 23,2022</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 3 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
`

export { DashedBorderTimeline, DashedBorderTimelineCode }
