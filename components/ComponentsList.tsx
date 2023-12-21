'use client'
import { CloudArrowUp, GridFour, Phone, User } from 'phosphor-react'
import { useState } from 'react'
import { CustomizedBarSizeWithAxisData } from '~/app/docs/components/barChart/variant/CustomizedBarSizeWithAxisData'
import { DefaultRadio } from '~/app/docs/components/radio/variant/DefaultRadio'

import { Button, CheckboxGroup, Modal, Pagination, Slider, Tooltip, Tabs, DatePicker } from '~/src'

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
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="scale-75">
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="circle"
      />
    </div>
  )
}
export const TooltipComponent = () => {
  return (
    <Tooltip
      title="Tooltip Title here"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
      trigger="hover"
      placement="top"
      animation="duration-300"
      style="dark">
      <Button size="sm" type="primary">
        Tooltip Content
      </Button>
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
export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState('')
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }
  return (
    <div className="scale-50">
      <form className="space-y-4 p-5">
        <CheckboxGroup
          title="Paypal"
          description="Payment with paypal and get 10% discount"
          checkboxType="circle"
          img="/images/company/paypal.png"
          imgShape="circle"
          value="paypal"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Stripe"
          description="Payment with stripe and get 10% discount"
          checkboxType="circle"
          img="/images/company/stripe.png"
          imgShape="circle"
          value="stripe"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Visa"
          description="Payment with Visa and get 10% discount"
          checkboxType="circle"
          img="/images/company/Visa.png"
          imgShape="circle"
          value="Visa"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
      </form>
    </div>
  )
}
export const DatePickerComponent = () => {
  const [_, setDate] = useState<Date | null>(null)
  return (
    <div className="mx-auto flex w-3/5 scale-75">
      <DatePicker singleDate={setDate} placeholder="Select date">
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
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export const TabsComponent = () => {
  return (
    <div className="scale-75 md:scale-95">
      <Tabs aria-label="Tabs" style="underline" borderPosition="bottom" iconPosition="left">
        <Tabs.Item title="Profile" icon={<User size={20} />}>
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
          Contacts content
        </Tabs.Item>
      </Tabs>
    </div>
  )
}
