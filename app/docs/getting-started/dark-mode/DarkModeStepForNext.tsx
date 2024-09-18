import CodeHighlight from '~/app/components/CodeHighlight'
import CodeHighlightPreview from '~/app/components/CodeHighlightPreview'
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '~/app/src'
import { nextThemeInstall, nextThemeProvider, nextThemeSwitcher, nextThemeWrapper } from './Code'
import ViteThemeSwitcher from './ViteThemeSwitch'

const DarkModeStepForNext = () => {
  return (
    <Timeline className="my-12 ml-2">
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 1</p>
          <p className="text-body-3 font-medium text-metal-900 dark:text-white">Start by installing `next-themes`</p>
          <div className="!my-4">
            <CodeHighlight code={nextThemeInstall} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 2</p>
          <p className="text-body-3 font-medium text-metal-900 dark:text-white">
            Create a new file called `theme-provider.tsx` in the `components` folder
          </p>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Copy and paste the provided theme provider code into `theme-provider.tsx`.
          </p>
          <div className="!my-4">
            <CodeHighlight code={nextThemeProvider} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 3</p>
          <p className="text-body-3 font-medium text-metal-900 dark:text-white">
            Wrap your root layout. Add the `ThemeProvider` to your root layout.
          </p>
          <div className="!my-4">
            <CodeHighlight code={nextThemeWrapper} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 4</p>
          <p className="text-body-3 font-medium text-metal-900 dark:text-white">Create a Theme Switcher component</p>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Toggle between dark and light modes, use the example code provided to create a simple theme switcher.
          </p>
          <div className="!my-4">
            <CodeHighlightPreview code={nextThemeSwitcher}>
              <div className="p-3">
                <ViteThemeSwitcher />
              </div>
            </CodeHighlightPreview>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default DarkModeStepForNext
