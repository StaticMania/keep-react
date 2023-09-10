"use client";
import { useState } from "react";
import { CheckboxGroup } from "~/src";

const CheckboxGroupWithImage = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <form className="space-y-4 md:p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value20"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value21"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value22"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value23"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

const CheckboxGroupWithImageCode = `
"use client";
import CheckboxGroup from "~/src/CheckboxGroup";
import { useState } from "react";

const CheckboxGroupWithImage = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value20"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value21"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value22"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Static Design System"
        description="The largest UI kit and design system for Figma & Static code in the world."
        img="/images/banner/blog.jpg"
        imgShape="square"
        checkboxType="circle"
        value="value23"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

export default CheckboxGroupWithImage;


`;

export { CheckboxGroupWithImage, CheckboxGroupWithImageCode };
