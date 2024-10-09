'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerContent, Skeleton, SkeletonLine } from '../../../../src'

const DrawerPosition = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom')
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <div className="flex items-center gap-3">
        {['bottom', 'top', 'left', 'right'].map((position) => (
          <Button
            key={position}
            onClick={() => {
              setIsOpen(!isOpen)
              setPosition(position as 'bottom' | 'top' | 'left' | 'right')
            }}>
            {position} Drawer
          </Button>
        ))}
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent position={position}>
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

const DrawerPositionCode = {
  'DrawerComponent.tsx': `
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'

export const DrawerComponent = () => {
  return (
    <Drawer>
      <DrawerAction asChild>
        <Button>Open Drawer</Button>
      </DrawerAction>
      <DrawerContent position="bottom">
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

export { DrawerPosition, DrawerPositionCode }
