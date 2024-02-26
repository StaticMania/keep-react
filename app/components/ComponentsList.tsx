'use client'
import { CloudArrowUp, DotsThree, HouseLine, Phone, SignIn, User } from 'phosphor-react'
import { useState } from 'react'
import { CustomizedBarSizeWithAxisData } from '../docs/components/barChart/variant/CustomizedBarSizeWithAxisData'
import { DefaultRadio } from '../docs/components/radio/variant/DefaultRadio'
import { Button, DatePicker, Modal, Pagination, Slider, Tabs, Tooltip } from '../src'

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
  const [showModal, setShowModal] = useState(false)
  const onClick = () => {
    setShowModal(!showModal)
  }
  return (
    <div>
      <Button onClick={onClick}>Modal</Button>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="md" show={showModal} position="center">
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={onClick}>
            Cancel
          </Button>
          <Button onClick={onClick}>Confirm</Button>
        </Modal.Footer>
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
