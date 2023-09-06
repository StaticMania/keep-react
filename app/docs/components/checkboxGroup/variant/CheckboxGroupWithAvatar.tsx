"use client";
import { useState } from "react";
import { CheckboxGroup } from "@/src/components";

const CheckboxGroupWithAvatar = () => {
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
        img="/images/avatar/avatar-1.png"
        imgShape="circle"
        value="value16"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Carlin Tebb"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-2.png"
        imgShape="circle"
        value="value17"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Bellanca Sherringham"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-3.png"
        imgShape="circle"
        value="value18"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Guy Hawkins"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-4.png"
        imgShape="circle"
        value="value19"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

const CheckboxGroupWithAvatarCode = `
"use client";
import { useState } from "react";
import CheckboxGroup from "keep-react";

const CheckboxGroupWithAvatar = () => {
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
        img="/images/avatar/avatar-1.png"
        imgShape="circle"
        value="value16"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Carlin Tebb"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-2.png"
        imgShape="circle"
        value="value17"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Bellanca Sherringham"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-3.png"
        imgShape="circle"
        value="value18"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Guy Hawkins"
        description="Digital product designer - Static Design System."
        checkboxType="circle"
        img="/images/avatar/avatar-4.png"
        imgShape="circle"
        value="value19"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
};

export default CheckboxGroupWithAvatar;
`;

export { CheckboxGroupWithAvatar, CheckboxGroupWithAvatarCode };
