import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from '../../../../src'

const DefaultTabs = () => {
  return (
    <Tabs defaultActive="item-5" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-5">Figma</TabItem>
        <TabItem value="item-6">Docs</TabItem>
        <TabItem value="item-7">Blog</TabItem>
        <TabItem value="item-8">Github</TabItem>
      </TabList>
      <TabContent value="item-5">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-6">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-7">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-8">
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

const DefaultTabsCode = {
  'TabsComponent.tsx': `
import { Skeleton, SkeletonLine, TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs defaultActive="item-5" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-5">Figma</TabItem>
        <TabItem value="item-6">Docs</TabItem>
        <TabItem value="item-7">Blog</TabItem>
        <TabItem value="item-8">Github</TabItem>
      </TabList>
      <TabContent value="item-5">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-6">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-7">
        <Skeleton className="max-w-full space-y-2.5">
          <SkeletonLine className="h-4 w-11/12" />
          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="item-8">
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

export { DefaultTabs, DefaultTabsCode }
