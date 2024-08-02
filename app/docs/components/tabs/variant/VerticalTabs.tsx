'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from '../../../../src'

const VerticalTab = () => {
  return (
    <Tabs vertical defaultActive="item-9" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-9">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="item-10">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="item-11">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="item-12">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="item-9">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-10">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-11">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-12">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
    </Tabs>
  )
}

const VerticalTabCode = {
  'TabsComponent.tsx': `
'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs vertical defaultActive="item-9" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-9">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="item-10">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="item-11">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="item-12">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="item-9">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-10">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-11">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-12">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
    </Tabs>
  )
}

`,
}

export { VerticalTab, VerticalTabCode }
