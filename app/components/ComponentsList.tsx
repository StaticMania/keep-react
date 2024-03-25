'use client'
import { CloudArrowUp, DotsThree, HouseLine, Phone, SignIn, User } from 'phosphor-react'
import { useState } from 'react'
import { CustomizedBarSizeWithAxisData } from '../docs/components/barChart/variant/CustomizedBarSizeWithAxisData'
import { DefaultRadio } from '../docs/components/radio/variant/DefaultRadio'
import { Accordion, AreaChart, Button, DatePicker, Modal, Pagination, Skeleton, Slider, Tabs, Tooltip } from '../src'

export const SliderComponent = () => {
  return (
    <div className="w-full scale-75">
      <Slider
        defaultValue={300}
        max={1000}
        min={100}
        onChange={(value) => console.log(value)}
        step={100}
        tooltip="top"
      />
    </div>
  )
}
export const PaginationComponent = () => {
  return (
    <div className="scale-75">
      <Pagination>
        <Pagination.List>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>
            <DotsThree size={20} />
          </Pagination.Item>
          <Pagination.Item>10</Pagination.Item>
        </Pagination.List>
      </Pagination>
    </div>
  )
}
export const TooltipComponent = () => {
  return (
    <Tooltip
      title="Tooltip Title here"
      content="A tooltip is a user interface component containing text that appears when a user hover."
      trigger="hover"
      placement="top"
      animation="duration-300"
      style="dark">
      <Button size="sm">Tooltip Content</Button>
    </Tooltip>
  )
}
export const BarChartComponent = () => {
  return (
    <div className="scale-50 md:scale-75">
      <CustomizedBarSizeWithAxisData />
    </div>
  )
}
export const DatePickerComponent = () => {
  return (
    <div className="mx-auto flex w-3/5 scale-75">
      <DatePicker placeholder="Select date">
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  )
}
export const RadioSelectComponent = () => {
  return (
    <div className="scale-75">
      <DefaultRadio />
    </div>
  )
}
export const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <Button onClick={openModal}>Modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <CloudArrowUp size={28} color="#1B4DFF" />
          </Modal.Icon>
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900">Update Modal Status</h3>
              <p className="text-body-4 font-normal text-metal-600">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export const TabsComponent = () => {
  return (
    <div className="scale-75">
      <Tabs activeLabel="one">
        <Tabs.List>
          <Tabs.Item label="one" className="flex items-center gap-2">
            <HouseLine size={20} />
            Home
          </Tabs.Item>
          <Tabs.Item className="flex items-center gap-2" label="two">
            <User size={20} />
            About
          </Tabs.Item>
          <Tabs.Item className="flex items-center gap-2" label="three">
            <Phone size={20} />
            Contact
          </Tabs.Item>
          <Tabs.Item className="flex items-center gap-2" label="four">
            <SignIn size={20} />
            Sign Up
          </Tabs.Item>
        </Tabs.List>
        <Tabs.Content label="one">Home Content</Tabs.Content>
        <Tabs.Content label="two">About Content</Tabs.Content>
        <Tabs.Content label="three">Contact Content</Tabs.Content>
        <Tabs.Content label="four">Sign Up Content</Tabs.Content>
      </Tabs>
    </div>
  )
}
export const AreaChartComponent = () => {
  const chartData = [
    {
      name: '1',
      price: 0,
      sell: 0,
    },
    {
      name: '2',
      price: 300,
      sell: 200,
    },
    {
      name: '3',
      price: 170,
      sell: 120,
    },
    {
      name: '4',
      price: 190,
      sell: 130,
    },
    {
      name: '5',
      price: 220,
      sell: 120,
    },
    {
      name: '6',
      price: 400,
      sell: 213,
    },
    {
      name: '7',
      price: 420,
      sell: 325,
    },
    {
      name: '8',
      price: 450,
      sell: 250,
    },
    {
      name: '9',
      price: 400,
      sell: 300,
    },
    {
      name: '10',
      price: 500,
      sell: 400,
    },
  ]
  return (
    <AreaChart
      dataKey="price"
      secondaryDataKey="sell"
      showTooltip={true}
      showGridLine={true}
      showXaxis={true}
      showYaxis={true}
      chartData={chartData}
    />
  )
}

export const AccordionComponent = () => {
  return (
    <Accordion openFirstPanel={true} className="space-y-4">
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. What is the purpose of the Keep React?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. How do I customize the color scheme of components?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
          The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
          available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
          prop when using the component, and it will reflect the chosen color.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Q. Can I add additional content to notifications?</Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content>
          Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
          message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
          or icons, within the notification to provide users with more context and options.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export const SkeletonComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
    </div>
  )
}
