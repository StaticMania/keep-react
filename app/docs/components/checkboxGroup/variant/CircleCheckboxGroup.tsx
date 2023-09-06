"use client";
import { useState } from "react";
import { CheckboxGroup } from "@/src/components";

const CircleCheckboxGroup = () => {
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

const CircleCheckboxGroupCode = `
"use client";
import { useState } from "react";
import CheckboxGroup from "keep-react";

const CircleCheckboxGroup = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
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

export default CircleCheckboxGroup;
`;

export { CircleCheckboxGroup, CircleCheckboxGroupCode };
