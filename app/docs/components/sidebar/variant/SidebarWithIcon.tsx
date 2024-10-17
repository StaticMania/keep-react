'use client'
import Link from 'next/link'
import {
  ChartPie,
  CheckSquare,
  Gear,
  HouseLine,
  Lifebuoy,
  PresentationChart,
  SignOut,
  Stack,
  Users,
} from 'phosphor-react'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
} from '../../../../src'

const SidebarWithIcon = () => {
  return (
    <div className="p-3">
      <Sidebar className="max-w-max">
        <SidebarBody className="space-y-4">
          <Link href="/" className="flex items-center gap-1">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
              K.
            </span>
          </Link>
          <SidebarList className="space-y-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <HouseLine size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <PresentationChart size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <Stack size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <CheckSquare size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Tasks
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <ChartPie size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Reporting
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <Users size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <Lifebuoy size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <SidebarItem>
                    <Gear size={20} />
                  </SidebarItem>
                </TooltipAction>
                <TooltipContent
                  side="right"
                  sideOffset={15}
                  className="rounded-none text-body-5 font-normal text-white">
                  <TooltipArrow />
                  Settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarList>
        </SidebarBody>
        <SidebarFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipAction asChild>
                <SidebarItem>
                  <SignOut size={20} />
                </SidebarItem>
              </TooltipAction>
              <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow />
                Log Out
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

const SidebarWithIconCode = {
  'SidebarComponent.tsx': `
'use client'
import Link from 'next/link'
import {
  ChartPie,
  CheckSquare,
  Gear,
  HouseLine,
  Lifebuoy,
  PresentationChart,
  SignOut,
  Stack,
  Users,
} from 'phosphor-react'

import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
} from from 'keep-react'


export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max">
      <SidebarBody className="space-y-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
            K.
          </span>
        </Link>
        <SidebarList className="space-y-1">
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <HouseLine size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <PresentationChart size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <Stack size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <CheckSquare size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Tasks
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <ChartPie size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Reporting
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <Users size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <Lifebuoy size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
          <SidebarItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipAction asChild>
                  <Gear size={20} />
                </TooltipAction>
                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
                <TooltipArrow/>
                  Settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipAction asChild>
                <SignOut size={20} />
              </TooltipAction>
              <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">
              <TooltipArrow/>
                Log Out
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}
`,
}

export { SidebarWithIcon, SidebarWithIconCode }
