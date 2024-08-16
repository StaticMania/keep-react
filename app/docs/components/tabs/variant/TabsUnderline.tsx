'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from '../../../../src'

const TabsUnderline = () => {
  return (
    <Tabs variant="underline" defaultActive="5" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="5">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="6">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="7">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="8">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="5">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="6">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="7">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="8">
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

const TabsUnderlineCode = {
  'TabsComponent.tsx': `
'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs variant="underline" defaultActive="5" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="5">
          <User size={16} />
          Profile
        </TabItem>
        <TabItem value="6">
          <Gear size={16} />
          Settings
        </TabItem>
        <TabItem value="7">
          <Buildings size={16} />
          Company
        </TabItem>
        <TabItem value="8">
          <ShieldWarning size={16} />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="5">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="6">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="7">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="8">
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

export { TabsUnderline, TabsUnderlineCode }
