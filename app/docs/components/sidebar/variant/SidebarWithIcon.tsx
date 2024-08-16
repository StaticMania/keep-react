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
  TooltipContent,
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
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <HouseLine size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Home
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <PresentationChart size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Stack size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Projects
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <CheckSquare size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Tasks
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <ChartPie size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Reporting
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Users size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Users
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Lifebuoy size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Support
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Gear size={20} />
                </TooltipAction>
                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                  Settings
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
          </SidebarList>
        </SidebarBody>
        <SidebarFooter>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <SignOut size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">
                Log Out
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
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
  TooltipContent,
} from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max">
      <SidebarBody className="space-y-4">
        <Link href="/" className="inline-flex items-center gap-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
            K.
          </span>
        </Link>
        <SidebarList className="space-y-1">
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <HouseLine size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Home</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <PresentationChart size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Dashboard</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Stack size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Projects</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <CheckSquare size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Tasks</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <ChartPie size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Reporting</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Users size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Users</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Lifebuoy size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Support</TooltipContent>
            </Tooltip>
          </SidebarItem>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Gear size={20} />
              </TooltipAction>
              <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Settings</TooltipContent>
            </Tooltip>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem>
          <Tooltip placement="right" contentOffset={30}>
            <TooltipAction asChild>
              <SignOut size={20} />
            </TooltipAction>
            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Log Out</TooltipContent>
          </Tooltip>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}

`,
}

export { SidebarWithIcon, SidebarWithIconCode }
