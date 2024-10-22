import CodeHighlight from '~/app/components/CodeHighlight'
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '~/app/src'
import { keepInstall, twConfigForReact, twCssForReact, twNpmInstall, viteReact } from './Code/Code'

const IntroductionStepsForReact = () => {
  return (
    <Timeline className="my-12 ml-2">
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 1</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Create a Vite React Application</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Replace `my-project` with your preferred project name.
          </p>
          <div className="!my-4">
            <CodeHighlight code={viteReact} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 2</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Install Tailwind CSS</h1>
          <div className="!my-4">
            <CodeHighlight code={twNpmInstall} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 3</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Install Keep React library</h1>
          <div className="!my-4">
            <CodeHighlight code={keepInstall} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 4</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Configure Tailwind CSS</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Open the `tailwind.config.js` file in your project. Wrap your config with the keepTheme function to achieve
            keep-react configuration.
          </p>
          <div className="!my-4">
            <CodeHighlight code={twConfigForReact} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 5</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Add Tailwind CSS to index.css</h1>
          <div className="!my-4">
            <CodeHighlight code={twCssForReact} />
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default IntroductionStepsForReact
