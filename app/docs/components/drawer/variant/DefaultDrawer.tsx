import { Button, Drawer, DrawerAction, DrawerBody, DrawerClose, DrawerContent } from '../../../../src'

const DefaultDrawer = () => {
  return (
    <Drawer>
      <DrawerAction />
      <DrawerBody>
        <DrawerContent>
          <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 dark:text-white lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <DrawerClose asChild>
              <Button color="secondary">Explore Now</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </DrawerBody>
    </Drawer>
  )
}

const DefaultDrawerCode = `
import { Button, Drawer, DrawerBody, DrawerClose, DrawerContent } from 'keep-react'

export const DrawerComponent = () => {
  return (
    <Drawer>
      <DrawerAction />
      <DrawerBody>
        <DrawerContent>
          <div className="mx-auto max-w-sm space-y-3 px-6 py-20 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 dark:text-white lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <DrawerClose asChild>
              <Button color="secondary">Explore Now</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </DrawerBody>
    </Drawer>
  )
}
`

export { DefaultDrawer, DefaultDrawerCode }
