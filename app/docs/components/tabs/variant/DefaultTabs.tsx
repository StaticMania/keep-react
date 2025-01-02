import { Skeleton, SkeletonLine, Tabs, TabsContent, TabsItem, TabsList } from '../../../../src'

const DefaultTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="item-1" className="mx-auto max-w-xl">
        <TabsList>
          <TabsItem value="item-1">Figma</TabsItem>
          <TabsItem value="item-2">Docs</TabsItem>
          <TabsItem value="item-3">Blog</TabsItem>
          <TabsItem value="item-4">Github</TabsItem>
        </TabsList>
        <TabsContent value="item-1">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-2">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-7/12" />
            <SkeletonLine className="h-4 w-10/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-3">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-10/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-7/12" />
          </Skeleton>
        </TabsContent>
        <TabsContent value="item-4">
          <Skeleton className="max-w-full space-y-2.5">
            <SkeletonLine className="h-4 w-11/12" />
            <SkeletonLine className="h-4 w-9/12" />
            <SkeletonLine className="h-4 w-7/12" />
            <SkeletonLine className="h-4 w-10/12" />
          </Skeleton>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const DefaultTabsCode = {
  'TabsComponent.tsx': `
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs defaultValue="item-1" className="mx-auto max-w-xl">
      <TabsList>
        <TabsItem value="item-1">Figma</TabsItem>
        <TabsItem value="item-2">Docs</TabsItem>
        <TabsItem value="item-3">Blog</TabsItem>
        <TabsItem value="item-4">Github</TabsItem>
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

export { DefaultTabs, DefaultTabsCode }
