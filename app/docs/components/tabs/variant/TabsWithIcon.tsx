'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from '../../../../src'

const TabsWithIcon = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="item-1" className="mx-auto max-w-xl">
        <TabsList>
          <TabsItem value="item-1">
            <User size={16} />
            Profile
          </TabsItem>
          <TabsItem value="item-2">
            <Gear size={16} />
            Settings
          </TabsItem>
          <TabsItem value="item-3">
            <Buildings size={16} />
            Company
          </TabsItem>
          <TabsItem value="item-4">
            <ShieldWarning size={16} />
            Privacy
          </TabsItem>
        </TabsList>
        <TabsContent value="item-1">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-2">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-3">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-4">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const TabsWithIconCode = {
  'TabsComponent.tsx': `
'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, TabsContent, TabsItem, TabsList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs defaultValue="item-1" className="mx-auto max-w-xl">
      <TabsList>
        <TabsItem value="item-1">
          <User size={16} />
          Profile
        </TabsItem>
        <TabsItem value="item-2">
          <Gear size={16} />
          Settings
        </TabsItem>
        <TabsItem value="item-3">
          <Buildings size={16} />
          Company
        </TabsItem>
        <TabsItem value="item-4">
          <ShieldWarning size={16} />
          Privacy
        </TabsItem>
      </TabsList>
      <TabsContent value="item-1">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-2">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-3">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-4">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
    </Tabs>
  )
}
`,
}

export { TabsWithIcon, TabsWithIconCode }
