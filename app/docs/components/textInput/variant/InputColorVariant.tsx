"use client";

import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { EyeSlash, Lock } from "phosphor-react";

const InputColorVariant = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Label value="Gray Color Input" />
        <TextInput
          id="#id-yml3mm"
          placeholder="Gray Color Input"
          color="gray"
          withBg={true}
          sizing="md"
          type="text"
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#5E718D" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Info Color Input" color="info" />
        <TextInput
          id="#id-yml3mm"
          placeholder="Info Color Input"
          color="info"
          sizing="md"
          type="text"
          withBg={true}
          addon={<Lock size={20} color="#1B4DFF" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#1B4DFF" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Error Color Input" color="error" />
        <TextInput
          id="#id-d49v11"
          placeholder="Error Color Input"
          color="error"
          sizing="md"
          type="text"
          withBg={true}
          addon={<Lock size={20} color="#FF574D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#FF574D" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Warning Color Input" color="warning" />
        <TextInput
          id="#id-d49v11"
          placeholder="Warning Color Input"
          color="warning"
          sizing="md"
          type="text"
          withBg={true}
          addon={<Lock size={20} color="#FFC700" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#FFC700" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Success Color Input" color="success" />
        <TextInput
          id="#id-d49v11"
          placeholder="Success Color Input"
          color="success"
          sizing="md"
          type="text"
          withBg={true}
          addon={<Lock size={20} color="#0A9952" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#0A9952" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

const InputColorVariantCode = `
"use client";

import { Label } from "@/src/components/FormControls/Label";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { EyeSlash, Lock } from "phosphor-react";

const InputColorVariant = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Label value="Gray Color Input" />
        <TextInput
          id="#id-yml3mm"
          placeholder="Gray Color Input"
          color="gray"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#5E718D" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default InputColorVariant;
`;

export { InputColorVariant, InputColorVariantCode };
