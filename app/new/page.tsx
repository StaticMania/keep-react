'use client'
import { CheckBox, Button, Alert } from '../src'

const Page = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container  py-20">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div className="col-span-1 space-y-5">
            <Alert color="primary">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert color="secondary">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert color="success">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert color="warning">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert color="error">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
          </div>
          <div className="col-span-1 space-y-5">
            <Alert withBg color="primary">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert withBg color="secondary">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert withBg color="success">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert withBg color="warning">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
            <Alert withBg color="error">
              <Alert.Container>
                <Alert.Icon />
                <Alert.Title>Alert here</Alert.Title>
                <Alert.Description>A short description followed by two actions items..</Alert.Description>
              </Alert.Container>
              <Alert.Link>Learn More</Alert.Link>
              <Alert.Dismiss />
            </Alert>
          </div>
          <div className="col-span-1 space-y-5">
            <Alert className="!max-w-md" color="primary">
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="primary">
                      Learn More
                    </Button>
                    <Button size="sm" color="primary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="secondary">
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="error">
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="success">
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="warning">
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
          </div>
          <div className="col-span-1 space-y-5">
            <Alert className="!max-w-md" withBg>
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="primary">
                      Learn More
                    </Button>
                    <Button size="sm" color="primary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="secondary" withBg>
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="error" withBg>
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="success" withBg>
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
            <Alert className="!max-w-md" color="warning" withBg>
              <Alert.Container className="flex items-start">
                <Alert.Icon />
                <Alert.Container className="flex flex-col items-start">
                  <Alert.Title>Alert here</Alert.Title>
                  <Alert.Description className="block w-full sm:line-clamp-none">
                    A short description followed by two actions items.
                  </Alert.Description>
                  <div>
                    <CheckBox
                      size="md"
                      variant="square"
                      label="Don't show again"
                      id="two"
                      name="countries"
                      color="info"
                      labelStyle="text-body-4 font-medium text-metal-900"
                    />
                  </div>
                  <Alert.Container>
                    <Button size="sm" color="secondary">
                      Learn More
                    </Button>
                    <Button size="sm" color="secondary" variant="outline">
                      Dismiss
                    </Button>
                  </Alert.Container>
                </Alert.Container>
                <Alert.Dismiss />
              </Alert.Container>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
