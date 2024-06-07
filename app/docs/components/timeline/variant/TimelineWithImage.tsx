import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '../../../../src'

const TimelineWithImage = () => {
  return (
    <div className="px-5 py-6">
      <Timeline>
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
            <img src="https://picsum.photos/400/230?v=1" className="!mt-4 block rounded-xl" alt="item1" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              November 10, 2023
            </p>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 2 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=2" className="!mt-4 block rounded-xl" alt="item2" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">December 20,2023</p>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 3 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=3" className="!mt-4 block rounded-xl" alt="item3" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

const TimelineWithImageCode = `
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from 'keep-react'

export const TimelineComponent = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">September 23,2022</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 1 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=1" className="!mt-4 block rounded-xl" alt="item1" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">November 10, 2023</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 2 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=2" className="!mt-4 block rounded-xl" alt="item2" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">December 20,2023</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Step 3 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=3" className="!mt-4 block rounded-xl" alt="item3" />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

`
export { TimelineWithImage, TimelineWithImageCode }
