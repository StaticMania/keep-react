'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerContent, DrawerOverlay } from '../../../../src'

const DefaultDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} color="secondary">
        Drawer
      </Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 dark:text-white lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <Button onClick={() => setIsOpen(false)} className="bg-metal-900 dark:bg-metal-800" color="secondary">
              Explore Now
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const DefaultDrawerCode = `
'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerContent, DrawerOverlay } from 'keep-react'

export const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} color="secondary">
        Drawer
      </Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
            <h1 className="text-heading-3 font-bold dark:text-white text-metal-900 lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <Button onClick={() => setIsOpen(false)} className="bg-metal-900 dark:bg-metal-800" color="secondary">
              Explore Now
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
`

export { DefaultDrawer, DefaultDrawerCode }
