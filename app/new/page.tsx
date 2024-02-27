'use client'
import { Button, Divider, Typography } from '../src'
import { Sidebar } from './Sidebar'

const page = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-5">
        <div>
          <Sidebar className="max-w-max">
            <Sidebar.Body className="space-y-3">
              <div className="flex items-start gap-3">
                <div>
                  <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
                </div>
                <div>
                  <Typography variant="p">Men&apos;s casual shoe</Typography>
                  <Typography variant="p">1 x 99 = $99</Typography>
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
                  <Typography variant="p">Men&apos;s casual shoe</Typography>
                  <Typography variant="p">1 x 99 = $99</Typography>
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
                  <Typography variant="p">Men&apos;s casual shoe</Typography>
                  <Typography variant="p">1 x 99 = $99</Typography>
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
                <Typography>Total</Typography>
                <Typography>$297</Typography>
              </div>
              <Button className="w-full">Checkout Now</Button>
            </Sidebar.Footer>
          </Sidebar>
        </div>
      </div>
    </section>
  )
}

export default page
