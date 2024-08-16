'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from '../../../../src'

const TabsWithIcon = () => {
  return (
    <Tabs defaultActive="item-1" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-1">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="item-2">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="item-3">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="item-4">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="item-1">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-2">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-3">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-4">
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

const TabsWithIconCode = {
  'TabsComponent.tsx': `
'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs defaultActive="item-1" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-1">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="item-2">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="item-3">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="item-4">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="item-1">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-2">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-3">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-4">
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

export { TabsWithIcon, TabsWithIconCode }
