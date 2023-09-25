"use client";
import { CloudArrowUp, File, FolderNotchOpen } from "phosphor-react";
import { useState } from "react";
import { CustomizedBarSizeWithAxisData } from "~/app/docs/components/barChart/variant/CustomizedBarSizeWithAxisData";
import { DefaultDatePicker } from "~/app/docs/components/datePicker/variant/DefaultDatePicker";
import { DefaultRadio } from "~/app/docs/components/radio/variant/DefaultRadio";

import {
  Avatar,
  Button,
  CheckboxGroup,
  Modal,
  Pagination,
  Slider,
  Tooltip,
  Tree,
} from "~/src";

export const TreeComponent = () => {
  const nodes = [
    {
      id: 1,
      title: "Home Page",
      children: [
        {
          id: 2,
          title: "Hero Section",
          children: [
            {
              id: 2.1,
              title: "Hero Image",
              children: [
                {
                  id: 2.2,
                  title: "Hero Text",
                },
                {
                  id: 2.3,
                  title: "Hero Title",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
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
export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
export const TooltipComponent = () => {
  return (
    <Tooltip
      title="Tooltip Title here"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
      trigger="hover"
      placement="top"
      animation="duration-300"
      style="dark"
    >
      <Button size="sm" type="primary">
        Tooltip Content
      </Button>
    </Tooltip>
  );
};
export const BarChartComponent = () => {
  return (
    <div className="lg:scale-75 scale-50">
      <CustomizedBarSizeWithAxisData />
    </div>
  );
};
export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
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
export const DatePickerComponent = () => {
  return (
    <div className="scale-75">
      <DefaultDatePicker />
    </div>
  );
};
export const RadioSelectComponent = () => {
  return (
    <div className="scale-75">
      <DefaultRadio />
    </div>
  );
};
export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Button onClick={onClick}>Modal</Button>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="center"
      >
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
  );
};
export const AvatarGroupComponent = () => {
  return (
    <Avatar.Group>
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-1.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-2.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-3.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-4.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="/images/avatar/avatar-5.png"
      />
      <Avatar
        shape="round"
        size="md"
        stacked={true}
        img="https://randomuser.me/api/portraits/men/32.jpg"
      />
    </Avatar.Group>
  );
};
