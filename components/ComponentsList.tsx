/**
 * Renders a tree component with the given nodes.
 * @returns The tree component.
 */
"use client";
import { CloudArrowUp, File, FolderNotchOpen } from "phosphor-react";
import { useState } from "react";
import { CustomizedBarSizeWithAxisData } from "~/app/docs/components/barChart/variant/CustomizedBarSizeWithAxisData";
import { DefaultDatePicker } from "~/app/docs/components/datePicker/variant/DefaultDatePicker";
import { DefaultRadio } from "~/app/docs/components/radio/variant/DefaultRadio";
import { Button, CheckboxGroup, Modal, Pagination, Slider, Tooltip, Tree } from '~/src'

export const TreeComponent = () => {
  /**
   * An array of nodes representing the components list.
   * Each node has an `id`, a `title`, and an optional array of `children` nodes.
   */

  const nodes = [
    {
      id: 1,
      title: 'Home Page',
      children: [
        {
          id: 2,
          title: 'Hero Section',
          children: [
            {
              id: 2.1,
              title: 'Hero Image',
              children: [
                {
                  id: 2.2,
                  title: 'Hero Text',
                },
                {
                  id: 2.3,
                  title: 'Hero Title',
                },
              ],
            },
          ],
        },
      ],
    },
  ]
  return (
    <div className="scale-90">
      <Tree
        nodes={nodes}
        showBorder
        showItemsNumber
        showIcon
        ParentIcon={<FolderNotchOpen size={20} color="#3D4A5C" />}
        ChildIcon={<File size={20} color="#3D4A5C" />}
      />
    </div>
  );
};

/**
 * A slider component that allows users to select a value within a range.
 * @returns The SliderComponet JSX element.
 */
export const SliderComponet = () => {
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
  );
};

/**
 * PaginationComponent is a component that renders a pagination component.
 * @returns JSX.Element
 */

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
  );
};

/**
 * TooltipComponent is a component that renders a tooltip component.
 * @returns JSX.Element
 */

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
  );
};

/**
 * BarChartComponent is a component that renders a bar chart component.
 * @returns JSX.Element
 */

export const BarChartComponent = () => {
  return (
    <div className="scale-75">
      <CustomizedBarSizeWithAxisData />
    </div>
  );
};
/**
 * CheckboxGroupComponent is a component that renders a list of CheckboxGroup components.
 * @returns JSX.Element
 */
  
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
  );
};

/**
 * DatePickerComponent is a component that renders a DatePicker component.
 * @returns JSX.Element
 */

export const DatePickerComponent = () => {
  return (
    <div className="scale-75">
      <DefaultDatePicker />
    </div>
  );
};

/**
 * RadioSelectComponent is a component that renders a RadioSelect component.
 * @returns JSX.Element
 */

export const RadioSelectComponent = () => {
  return (
    <div className="scale-75">
      <DefaultRadio />
    </div>
  );
};

/**
 * ModalComponent is a component that renders a modal component.
 * @returns JSX.Element
 */

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false)
  const onClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={onClick}>Modal</Button>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="md" show={showModal} position="center">
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
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
