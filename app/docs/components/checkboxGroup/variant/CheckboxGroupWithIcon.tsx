'use client'
import { useState } from 'react'
import { SquaresFour } from 'phosphor-react'
import { CheckboxGroup } from '~/src'

const CheckboxGroupWithIcon = () => {
  const [selected, setSelected] = useState('')
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }
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
  )
}

const CheckboxGroupWithIconCode = `
"use client";
import { useState } from "react";
import { SquaresFour } from "phosphor-react";
import { CheckboxGroup } from "keep-react";

export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
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
}
`

export { CheckboxGroupWithIcon, CheckboxGroupWithIconCode }
