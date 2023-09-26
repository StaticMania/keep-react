"use client";
import { useState } from "react";
import { CheckboxGroup } from "~/src";

const DefaultCheckboxGroup = () => {
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

const DefaultCheckboxGroupCode = `
"use client";
import { useState } from "react";
import { CheckboxGroup } from "keep-react";

const DefaultCheckboxGroup = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
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

export default DefaultCheckboxGroup;
`;

export { DefaultCheckboxGroup, DefaultCheckboxGroupCode };
