import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from '../../../../src'

const DefaultDrawer = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Drawer>
        <DrawerAction asChild>
          <Button>Open Drawer</Button>
        </DrawerAction>
        <DrawerContent>
          <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
            <Skeleton className="space-y-2.5">
              <SkeletonLine className="h-[200px]" />
              <SkeletonLine className="h-4" />
              <SkeletonLine className="h-4" />
              <SkeletonLine className="h-4" />
              <SkeletonLine className="h-4" />
              <SkeletonLine className="h-10 w-1/3" />
            </Skeleton>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

const DefaultDrawerCode = {
  'DrawerComponent.tsx': `
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'

export const DrawerComponent = () => {
  return (
    <Drawer>
      <DrawerAction asChild>
        <Button>Open Drawer</Button>
      </DrawerAction>
      <DrawerContent>
        <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
          <Skeleton className="space-y-2.5">
            <SkeletonLine className="h-[200px]" />
            <SkeletonLine className="h-4" />
            <SkeletonLine className="h-4" />
            <SkeletonLine className="h-4" />
            <SkeletonLine className="h-4" />
            <SkeletonLine className="h-10 w-1/3" />
          </Skeleton>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
`,
}

export { DefaultDrawer, DefaultDrawerCode }
