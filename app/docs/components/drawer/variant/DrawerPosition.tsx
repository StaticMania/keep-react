'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerContent } from '../../../../src'

const DrawerPosition = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom')
  return (
    <>
      <div className="flex items-center gap-3">
        {['bottom', 'top', 'left', 'right'].map((position) => (
          <Button
            key={position}
            onClick={() => {
              setIsOpen(!isOpen)
              setPosition(position as 'bottom' | 'top' | 'left' | 'right')
            }}
            color="secondary"
            className="bg-metal-900 capitalize">
            {position}
          </Button>
        ))}
      </div>
      <Drawer position={position} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent className="flex items-center justify-center">
          <div className="mx-auto max-w-lg space-y-3 px-6 py-5 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <Button onClick={() => setIsOpen(false)} className="bg-metal-900" color="secondary">
              Explore Now
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const DrawerPositionCode = `
'use client'
import { useState } from 'react'
import { Button, Drawer, DrawerContent } from 'keep-react'

export const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState('bottom')
  return (
    <>
      <div className="flex items-center gap-3">
        {['bottom', 'top', 'left', 'right'].map((position) => (
          <Button
            key={position}
            onClick={() => {
              setIsOpen(!isOpen)
              setPosition(position)
            }}
            color="secondary"
            className="bg-metal-900 capitalize">
            {position}
          </Button>
        ))}
      </div>
      <Drawer position={position} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent className="flex items-center justify-center">
          <div className="mx-auto max-w-lg space-y-3 px-6 py-5 lg:px-0">
            <h1 className="text-heading-3 font-bold text-metal-900 lg:text-heading-2">Keep React</h1>
            <p className="text-body-3 font-normal text-metal-600">
              Elevate your web projects with Keep React&apos;s 40+ customizable components. Access open-source resources
              for efficient development and bring your ideas to life with ease.
            </p>
            <Button onClick={() => setIsOpen(false)} className="bg-metal-900" color="secondary">
              Explore Now
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
`
export { DrawerPosition, DrawerPositionCode }
