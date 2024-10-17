'use client'
import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from '../../../../src'

const TabsUnderline = () => {
  return (
    <div className="py-3">
      <Tabs variant="underline" defaultValue="1" className="mx-auto max-w-xl">
        <TabsList>
          <TabsItem value="1">Profile</TabsItem>
          <TabsItem value="2">Settings</TabsItem>
          <TabsItem value="3">Company</TabsItem>
          <TabsItem value="4">Privacy</TabsItem>
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

const TabsUnderlineCode = {
  'TabsComponent.tsx': `
'use client'
import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs variant="underline" defaultValue="1" className="mx-auto max-w-xl">
      <TabsList>
        <TabsItem value="1">Profile</TabsItem>
        <TabsItem value="2">Settings</TabsItem>
        <TabsItem value="3">Company</TabsItem>
        <TabsItem value="4">Privacy</TabsItem>
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
  )
}
`,
}

export { TabsUnderline, TabsUnderlineCode }
