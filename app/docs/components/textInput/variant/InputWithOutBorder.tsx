"use client";
import { EyeSlash, Lock } from "phosphor-react";
import { TextInput, Label } from "~/src";

const InputWithOutBorder = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Label value="Gray Color Input" />
        <TextInput
          id="#id-12"
          placeholder="Gray Color Input"
          color="gray"
          sizing="md"
          border={false}
          withBg={true}
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
          id="#id-13"
          placeholder="Info Color Input"
          color="info"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#1B4DFF" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#1B4DFF" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Error Color Input" color="error" />
        <TextInput
          id="#id-14"
          placeholder="Error Color Input"
          color="error"
          sizing="md"
          type="text"
          border={false}
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
          id="#id-15"
          placeholder="Warning Color Input"
          color="warning"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#FFC700" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#FFC700" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Success Color Input" color="success" />
        <TextInput
          id="#id-16"
          placeholder="Success Color Input"
          color="success"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#0A9952" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#0A9952" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

const InputWithOutBorderCode = `
"use client";
import { TextInput, Label } from "keep-react";
import { EyeSlash, Lock } from "phosphor-react";

export const TextInputComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Label value="Gray Color Input" />
        <TextInput
          id="#id-12"
          placeholder="Gray Color Input"
          color="gray"
          sizing="md"
          border={false}
          withBg={true}
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
          id="#id-13"
          placeholder="Info Color Input"
          color="info"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#1B4DFF" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#1B4DFF" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Error Color Input" color="error" />
        <TextInput
          id="#id-14"
          placeholder="Error Color Input"
          color="error"
          sizing="md"
          type="text"
          border={false}
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
          id="#id-15"
          placeholder="Warning Color Input"
          color="warning"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#FFC700" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#FFC700" />}
          iconPosition="right"
        />
      </div>
      <div>
        <Label value="Success Color Input" color="success" />
        <TextInput
          id="#id-16"
          placeholder="Success Color Input"
          color="success"
          sizing="md"
          type="text"
          withBg={true}
          border={false}
          addon={<Lock size={20} color="#0A9952" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#0A9952" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
}
`;

export { InputWithOutBorder, InputWithOutBorderCode };
