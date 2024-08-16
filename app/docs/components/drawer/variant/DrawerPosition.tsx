'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerClose, DrawerContent } from '../../../../src'

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
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} position={position}>
        <DrawerContent>
          <DrawerClose className="absolute right-5 top-5" />
          <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 lg:text-heading-2 dark:text-white">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <DrawerClose asChild>
              <Button>Explore Now</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

const DrawerPositionCode = {
  'DrawerComponent.tsx': `
import { Button, Drawer, DrawerClose, DrawerContent } from 'keep-react'

export const DrawerComponent = () => {
  return (
    <Drawer position="left">
      <DrawerAction asChild>
        <Button>Left Drawer</Button>
      </DrawerAction>
      <DrawerContent>
        <DrawerClose className="absolute right-5 top-5" />
        <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
          <h1 className="text-heading-3 font-bold text-metal-900 lg:text-heading-2 dark:text-white">Keep React</h1>
          <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
            Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
            for efficient development and bring your ideas to life with ease.
          </p>
          <DrawerClose asChild>
            <Button>Explore Now</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
`,
}

export { DrawerPosition, DrawerPositionCode }
