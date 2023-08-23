"use client";
import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import {
  CaretRight,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithLogoSearchbar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput id="#id-8yj95h" placeholder="Search" color="gray" />
      </div>
      <Dropdown.Item
        icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
      >
        Google
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
      >
        Facebook
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
      >
        Twitter
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
      >
        Youtube
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
      >
        Linkedin
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithLogoSearchbarCode = `
"use client";
import { Dropdown,TextInput } from "keep-design";
import {
  CaretRight,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithLogoSearchbar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput id="#id-8yj95h" placeholder="Search" color="gray" />
      </div>
      <Dropdown.Item
        icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
      >
        Google
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
      >
        Facebook
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
      >
        Twitter
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
      >
        Youtube
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item
        icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
      >
        Linkedin
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithLogoSearchbar;

`;

export { DropdownWithLogoSearchbar, DropdownWithLogoSearchbarCode };
