'use client'
import { Bell, Envelope, Gear } from 'phosphor-react'
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '../../../../src'

const BreadcrumbWithIcon = () => {
  return (
    <div className="space-y-2.5 px-4 py-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Gear size={16} />
              Settings
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <Bell size={16} />
              Notifications
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbPage>
              <Envelope size={16} />
              Email Notifications
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-heading-3">You have 2 new notifications</h3>
    </div>
  )
}

const BreadcrumbWithIconCode = {
  'BreadcrumbComponent.tsx': `
'use client'
import { Bell, Envelope, Gear } from 'phosphor-react'
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from 'keep-react'

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Gear size={16} />
            Settings
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">
            <Bell size={16} />
            Notifications
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Envelope size={16} />
            Email Notifications
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
`,
}

export { BreadcrumbWithIcon, BreadcrumbWithIconCode }
