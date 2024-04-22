'use client'
import { Button, Divider, Sidebar } from '../../../../src'

const SidebarWithCart = () => {
  return (
    <div className="p-2">
      <Sidebar className="max-w-max">
        <Sidebar.Body className="space-y-3">
          <div className="flex items-start gap-3">
            <div>
              <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
            </div>
            <div>
              <p>Men&apos;s casual shoe</p>
              <p>1 x 99 = $99</p>
              <Button
                color="secondary"
                size="xs"
                variant="outline"
                className="border-none p-0 hover:bg-white hover:text-error-500">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
            </div>
            <div>
              <p>Men&apos;s casual shoe</p>
              <p>1 x 99 = $99</p>
              <Button
                color="secondary"
                size="xs"
                variant="outline"
                className="border-none p-0 hover:bg-white hover:text-error-500">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
            </div>
            <div>
              <>Men&apos;s casual shoe</>
              <>1 x 99 = $99</>
              <Button
                color="secondary"
                size="xs"
                variant="outline"
                className="border-none p-0 hover:bg-white hover:text-error-500">
                Remove
              </Button>
            </div>
          </div>
        </Sidebar.Body>
        <Divider className="my-3" />
        <Sidebar.Footer>
          <div className="mb-2 flex items-center justify-between">
            <p>Total</p>
            <p>$297</p>
          </div>
          <Button className="w-full">Checkout Now</Button>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

const SidebarWithCartCode = `
'use client'
import { Button, Divider, Sidebar } from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max">
      <Sidebar.Body className="space-y-3">
        <div className="flex items-start gap-3">
          <div>
            <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
          </div>
          <div>
            <p>Men&apos;s casual shoe</p>
            <p>1 x 99 = $99</p>
            <Button
              color="secondary"
              size="xs"
              variant="outline"
              className="border-none p-0 hover:bg-white hover:text-error-500">
              Remove
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div>
            <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
          </div>
          <div>
            <p>Men&apos;s casual shoe</p>
            <p>1 x 99 = $99</p>
            <Button
              color="secondary"
              size="xs"
              variant="outline"
              className="border-none p-0 hover:bg-white hover:text-error-500">
              Remove
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div>
            <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
          </div>
          <div>
            <p>Men&apos;s casual shoe</p>
            <p>1 x 99 = $99</p>
            <Button
              color="secondary"
              size="xs"
              variant="outline"
              className="border-none p-0 hover:bg-white hover:text-error-500">
              Remove
            </Button>
          </div>
        </div>
      </Sidebar.Body>
      <Divider className="my-3" />
      <Sidebar.Footer>
        <div className="mb-2 flex items-center justify-between">
          <p>Total</p>
          <p>$297</p>
        </div>
        <Button className="w-full">Checkout Now</Button>
      </Sidebar.Footer>
    </Sidebar>
  )
}
`
export { SidebarWithCart, SidebarWithCartCode }
