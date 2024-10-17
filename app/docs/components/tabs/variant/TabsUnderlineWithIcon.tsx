'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from '../../../../src'

const TabsUnderlineWithIcon = () => {
  return (
    <div className="py-3">
      <Tabs variant="underline" defaultValue="1" className="mx-auto max-w-xl">
        <TabsList>
          <TabsItem value="1">
            <User size={16} />
            Profile
          </TabsItem>
          <TabsItem value="2">
            <Gear size={16} />
            Settings
          </TabsItem>
          <TabsItem value="3">
            <Buildings size={16} />
            Company
          </TabsItem>
          <TabsItem value="4">
            <ShieldWarning size={16} />
            Privacy
          </TabsItem>
        </TabsList>
        <TabsContent value="1">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-7/12" />
            <SkeletonLine className="h-4 w-10/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="2">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="3">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-7/12" />
            <SkeletonLine className="h-4 w-10/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="4">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const TabsUnderlineWithIconCode = {
  'TabsComponent.tsx': `
'use client'
import { Buildings, Gear, ShieldWarning, User } from 'phosphor-react'
import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs variant="underline" defaultValue="1" className="mx-auto max-w-xl">
      <TabsList>
        <TabsItem value="1">
          <User size={16} />
          Profile
        </TabsItem>
        <TabsItem value="2">
          <Gear size={16} />
          Settings
        </TabsItem>
        <TabsItem value="3">
          <Buildings size={16} />
          Company
        </TabsItem>
        <TabsItem value="4">
          <ShieldWarning size={16} />
          Privacy
        </TabsItem>
      </TabsList>
      <TabsContent value="1">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="2">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="3">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabsContent>
      <TabsContent value="4">
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

export { TabsUnderlineWithIcon, TabsUnderlineWithIconCode }
