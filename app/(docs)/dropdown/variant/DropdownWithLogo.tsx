"use client";

import { Dropdown } from "@/src/components/Dropdown";
import {
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithLogo = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item
        icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
      >
        Google
      </Dropdown.Item>
      <Dropdown.Item
        icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
      >
        Facebook
      </Dropdown.Item>
      <Dropdown.Item
        icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
      >
        Twitter
      </Dropdown.Item>
      <Dropdown.Item
        icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
      >
        Youtube
      </Dropdown.Item>
      <Dropdown.Item
        icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
      >
        Linkedin
      </Dropdown.Item>
    </Dropdown>
  );
};
const DropdownWithLogoCode = `
"use client";
import { Dropdown } from "keep-design";
import {
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithLogo = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item
        icon={<GoogleLogo size={20} color="#4285f4" weight="bold" />}
      >
        Google
      </Dropdown.Item>
      <Dropdown.Item
        icon={<FacebookLogo size={20} color="#3b5998" weight="fill" />}
      >
        Facebook
      </Dropdown.Item>
      <Dropdown.Item
        icon={<TwitterLogo size={20} color="#00acee" weight="fill" />}
      >
        Twitter
      </Dropdown.Item>
      <Dropdown.Item
        icon={<YoutubeLogo size={20} color="#c4302b" weight="fill" />}
      >
        Youtube
      </Dropdown.Item>
      <Dropdown.Item
        icon={<LinkedinLogo size={20} color="#0072b1" weight="fill" />}
      >
        Linkedin
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithLogo;
`;

export { DropdownWithLogo, DropdownWithLogoCode };
