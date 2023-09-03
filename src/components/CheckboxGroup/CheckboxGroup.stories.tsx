import type { Meta, StoryObj } from "@storybook/react";
import { SquaresFour } from "phosphor-react";
import { useState } from "react";
import CheckboxGroup from ".";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const DefaultCheckboxGroupCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        fieldName="Design System"
        value="value1"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        fieldName="Design System"
        value="value2"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        fieldName="Design System"
        value="value3"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        fieldName="Design System"
        value="value4"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};
const CheckboxGroupWithCircleCheckboxCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value5"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value6"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value7"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value8"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};
const CheckboxGroupWithIconCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value8"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value9"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value10"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        checkboxType="square"
        checkboxPosition="right"
        icon={<SquaresFour size={24} />}
        fieldName="Icon Checkbox"
        value="value11"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};
const CheckboxGroupWithLogoCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
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
      <CheckboxGroup
        title="Master Card"
        description="Payment with master card and get 10% discount"
        checkboxType="circle"
        img="/images/company/mastercard.png"
        imgShape="circle"
        value="mastercard"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};
const CheckboxGroupWithAvatarCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Leslie Alexander"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/avatar/avatar-1.png"
        imgShape="circle"
        value="value16"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Carlin Tebb"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/avatar/avatar-2.png"
        imgShape="circle"
        value="value17"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Bellanca Sherringham"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/avatar/avatar-3.png"
        imgShape="circle"
        value="value18"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Guy Hawkins"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/avatar/avatar-4.png"
        imgShape="circle"
        value="value19"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};
const CheckboxGroupWithImageCom = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/banner/banner.png"
        imgShape="square"
        checkboxType="circle"
        value="value20"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/banner/banner.png"
        imgShape="square"
        checkboxType="circle"
        value="value21"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/banner/banner.png"
        imgShape="square"
        checkboxType="circle"
        value="value22"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/banner/banner.png"
        imgShape="square"
        checkboxType="circle"
        value="value23"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

export const DefaultCheckboxGroup: Story = {
  render: () => <DefaultCheckboxGroupCom />,
};
export const CheckboxGroupWithCircleCheckbox: Story = {
  render: () => <CheckboxGroupWithCircleCheckboxCom />,
};
export const CheckboxGroupWithIcon: Story = {
  render: () => <CheckboxGroupWithIconCom />,
};
export const CheckboxGroupWithLogo: Story = {
  render: () => <CheckboxGroupWithLogoCom />,
};
export const CheckboxGroupWithAvatar: Story = {
  render: () => <CheckboxGroupWithAvatarCom />,
};
export const CheckboxGroupWithImage: Story = {
  render: () => <CheckboxGroupWithImageCom />,
};
