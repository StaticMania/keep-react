import CodeHighlight from '~/app/components/CodeHighlight'
import CodeHighlightPreview from '~/app/components/CodeHighlightPreview'
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from '~/app/src'
import { ThemeProviderWrapper, viteReactDarkModeCode, viteThemeSwitcherCode } from './Code'
import ViteThemeSwitcher from './ViteThemeSwitch'

const DarkModeStepForReact = () => {
  return (
    <Timeline className="my-12 ml-2">
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 1</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">
            Create a new file called `Theme-provider.tsx` in the `components` folder
          </h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Copy and paste the provided theme provider code into Theme-provider.tsx.
          </p>
          <div className="!my-4">
            <CodeHighlight code={viteReactDarkModeCode} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 2</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Open the `main.tsx` file</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Wrap the `App` component with the `ThemeProvider` component.
          </p>
          <div className="!my-4">
            <CodeHighlight code={ThemeProviderWrapper} />
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="max-w-full">
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">Step 3</p>
          <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">Create a Theme Switcher component</h1>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Toggle between dark and light modes, use the example code provided to create a simple theme switcher.
          </p>
          <div className="!my-4">
            <CodeHighlightPreview code={viteThemeSwitcherCode}>
              <ViteThemeSwitcher />
            </CodeHighlightPreview>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default DarkModeStepForReact
