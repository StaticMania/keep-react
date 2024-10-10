'use client'
import Link from 'next/link'
import {
  Barcode,
  CaretDown,
  ChartPie,
  CheckSquare,
  Checks,
  HourglassLow,
  HouseLine,
  MagnifyingGlass,
  PencilLine,
  PresentationChart,
  UserCircle,
} from 'phosphor-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from '../../../../src'

const SidebarWithDropdown = () => {
  return (
    <div className="p-3">
      <Sidebar>
        <SidebarBody>
          <Link href="/" className="inline-flex items-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
              K.
            </span>
          </Link>

          <fieldset className="relative">
            <Input placeholder="Search" className="ps-11" />
            <InputIcon>
              <MagnifyingGlass size={19} color="#AFBACA" />
            </InputIcon>
          </fieldset>

          <SidebarList className="space-y-0.5">
            <SidebarItem>
              <HouseLine size={20} />
              House
            </SidebarItem>
            <SidebarItem>
              <PresentationChart size={20} />
              Dashboard
            </SidebarItem>
            <SidebarItem dropdown>
              <SidebarDropdown>
                <SidebarCollapse>
                  <div className="flex items-center gap-3">
                    <UserCircle size={20} />
                    Account
                  </div>
                  <span className="group-open:-rotate-180">
                    <CaretDown size={20} />
                  </span>
                </SidebarCollapse>

                <SidebarDropdownList>
                  <SidebarItem>
                    <PencilLine size={20} />
                    Update Info
                  </SidebarItem>
                  <SidebarItem>
                    <Barcode size={20} />
                    My Order
                  </SidebarItem>
                </SidebarDropdownList>
              </SidebarDropdown>
            </SidebarItem>
            <SidebarItem dropdown>
              <SidebarDropdown>
                <SidebarCollapse>
                  <div className="flex items-center gap-3">
                    <span>
                      <CheckSquare size={20} />
                    </span>
                    <span>Tasks</span>
                  </div>
                  <span className="group-open:-rotate-180">
                    <CaretDown size={20} />
                  </span>
                </SidebarCollapse>

                <SidebarDropdownList>
                  <SidebarItem>
                    <HourglassLow size={20} />
                    In Progress
                  </SidebarItem>
                  <SidebarItem>
                    <Checks size={20} />
                    Completed
                  </SidebarItem>
                </SidebarDropdownList>
              </SidebarDropdown>
            </SidebarItem>

            <SidebarItem>
              <ChartPie size={20} />
              Reporting
            </SidebarItem>
          </SidebarList>
        </SidebarBody>

        <SidebarFooter>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar" />
              <AvatarFallback>KR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-body-4 font-medium text-metal-400 dark:text-white">Enzo Farnandez</p>
              <p className="text-body-4 font-normal text-metal-300 dark:text-metal-400">enzo123@gmail.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

const SidebarWithDropdownCode = {
  'SidebarComponent.tsx': `
'use client'
import Link from 'next/link'
import {
  Barcode,
  CaretDown,
  ChartPie,
  CheckSquare,
  Checks,
  HourglassLow,
  HouseLine,
  MagnifyingGlass,
  PencilLine,
  PresentationChart,
  UserCircle,
} from 'phosphor-react'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarBody>
        <Link href="/" className="inline-flex items-center">
         <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
            K.
         </span>
        </Link>

        <fieldset className="relative">
          <Input placeholder="Search" className="ps-11" />
          <InputIcon>
            <MagnifyingGlass size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>

        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <HouseLine size={20} />
            House
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <UserCircle size={20} />
                  Account
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <PencilLine size={20} />
                  Update Info
                </SidebarItem>
                <SidebarItem>
                  <Barcode size={20} />
                  My Order
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <span>
                    <CheckSquare size={20} />
                  </span>
                  <span>Tasks</span>
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <HourglassLow size={20} />
                  In Progress
                </SidebarItem>
                <SidebarItem>
                  <Checks size={20} />
                  Completed
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>

          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
        </SidebarList>
      </SidebarBody>

      <SidebarFooter>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar" />
            <AvatarFallback>KR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-body-4 font-medium text-metal-400">Enzo Farnandez</p>
            <p className="text-body-4 font-normal text-metal-300">enzo123@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
`,
}
export { SidebarWithDropdown, SidebarWithDropdownCode }
