import CodeHighlight from '~/app/components/CodeHighlight'
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '~/app/src'
import { customizeColors, customizeSingleColor, forbiddenRoles } from './ColorsApi'

const CustomizeSteps = () => {
  return (
    <Timeline className="my-12 ml-2">
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">tailwind.config.ts</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Open your tailwind.config.ts file.</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Pass your custom color palette as the second argument of the keepTheme function.
          </p>
          <div className="!my-4">
            <CodeHighlight code={customizeColors} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Single Color</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Customize Single Color</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            If you don&apos;t need to change all the color accept one color. You can also do it by following this
            example below.
          </p>
          <div className="!my-4">
            <CodeHighlight code={customizeSingleColor} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Important Note</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Don&apos;t do this</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            You cannot change the names of the colors, but you can only change their color hex codes. But if you want to
            extend the color palette with your own colors, then you can do it. See the example below for more
            information.
          </p>
          <div className="!my-4">
            <CodeHighlight code={forbiddenRoles} />
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default CustomizeSteps
