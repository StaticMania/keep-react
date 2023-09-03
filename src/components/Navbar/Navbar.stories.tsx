import type { Meta, StoryObj } from "@storybook/react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  List,
  MagnifyingGlass,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Button } from "../Button";
import { TextInput } from "../FormControls/TextInput";
import { Navbar } from "./";
import { removeFragment } from "@/src/helpers/mergeDeep";

const meta: Meta<typeof Navbar> = {
  tags: ["autodocs"],
  component: Navbar,
  argTypes: {
    children: {
      description: "Children is navbar content",
      control: {
        disable: true,
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    rounded: {
      description: "Navbar rounded or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    menuOpen: {
      description: "Navbar menu open or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    fluid: {
      description: "Navbar fluid or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    border: {
      description: "Navbar border show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const DefaultNavbar: Story = {
  args: {
    rounded: false,
    children: removeFragment(
      <>
        <div className="flex items-center gap-5">
          <Navbar.Brand href="/">
            <img
              src="../assets/images/company/logo.png"
              className="mr-3 h-6 pr-5 sm:h-9 md:border-r md:border-gray-50"
              alt="Keep Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="#">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              Case Study
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              Resources
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              About
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex md:order-2">
          <Button type="outlinePrimary" size="sm">
            Contact
          </Button>
          <Navbar.Toggle />
        </div>
      </>
    ),
  },
};
export const NavbarWithSearchIcon: Story = {
  args: {
    rounded: true,
    children: removeFragment(
      <>
        <div className="flex items-center gap-5">
          <Navbar.Brand href="/">
            <img
              src="../assets/images/company/logo.png"
              className="mr-3 h-6 pr-5 sm:h-9 md:border-r md:border-gray-50"
              alt="Keep Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="#">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              Case Study
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              Download
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#">
              Resources
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="#" className="md:hidden">
              Contact
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex md:order-2">
            <Button type="link" size="xs" color="#455468">
              <span className="pr-2">
                <MagnifyingGlass size={20} color="#455468" />
              </span>
              Search
            </Button>
          </div>
          <div className="flex md:order-3">
            <Button
              type="outlinePrimary"
              size="sm"
              customClass="hidden md:flex"
            >
              Contact
            </Button>
            <Navbar.Toggle />
          </div>
        </div>
      </>
    ),
  },
};
export const NavbarWithMobileMenu: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <img
            src="../assets/images/company/logo.png"
            className="mr-3 h-6 pr-5 sm:h-9"
            alt="Keep Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button type="link" size="xs" color="#455468">
            <span className="hidden pr-2 md:block">
              <List size={24} color="#455468" />
            </span>
            <Navbar.Toggle />
            Menu
          </Button>
        </div>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
export const NavbarWithMobileMenuAndSearchIcon: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <img
            src="../assets/images/company/logo.png"
            className="mr-3 h-6 pr-5 sm:h-9"
            alt="Keep Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <Button type="link" size="xs" color="#455468">
            <span className="pr-2">
              <MagnifyingGlass size={20} color="#455468" />
            </span>
            Search
          </Button>
          <Button type="link" size="xs" color="#455468">
            <span className="hidden pr-2 md:block">
              <List size={24} color="#455468" />
            </span>
            <Navbar.Toggle />
            Menu
          </Button>
        </div>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
export const NavbarWithSearchBarAndSocialIcons: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <img
            src="../assets/images/company/logo.png"
            className="mr-3 h-6 pr-5 sm:h-9"
            alt="Keep Logo"
          />
        </Navbar.Brand>
        <div className="hidden items-center md:order-2 md:flex">
          <TextInput
            id="username"
            placeholder="Search anything"
            color="gray"
            sizing="md"
            addon={<MagnifyingGlass size={20} color="#5E718D" />}
            addonPosition="left"
          />
          <Button type="link" size="xs" color="#455468">
            <span className="pr-2">
              <FacebookLogo size={20} color="#5E718D" />
            </span>
          </Button>
          <Button type="link" size="xs" color="#5E718D">
            <span className="pr-2">
              <InstagramLogo size={20} color="#5E718D" />
            </span>
          </Button>
          <Button type="link" size="xs" color="#5E718D">
            <span className="pr-2">
              <TwitterLogo size={20} color="#5E718D" />
            </span>
          </Button>
          <Button type="link" size="xs" color="#5E718D">
            <span className="pr-2">
              <YoutubeLogo size={20} color="#5E718D" />
            </span>
          </Button>
          <Button type="link" size="xs" color="#455468">
            <span className="pr-2">
              <List size={20} color="#455468" />
            </span>
            Menu
          </Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="md:hidden">
          <div className="mx-auto w-5/6">
            <TextInput
              id="username"
              placeholder="Search anything"
              color="gray"
              sizing="md"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div className="flex items-center justify-end pr-3 ">
            <Button type="link" size="xs" color="#455468">
              <span className="pr-2">
                <FacebookLogo size={20} color="#5E718D" />
              </span>
            </Button>
            <Button type="link" size="xs" color="#5E718D">
              <span className="pr-2">
                <InstagramLogo size={20} color="#5E718D" />
              </span>
            </Button>
            <Button type="link" size="xs" color="#5E718D">
              <span className="pr-2">
                <TwitterLogo size={20} color="#5E718D" />
              </span>
            </Button>
            <Button type="link" size="xs" color="#5E718D">
              <span className="pr-2">
                <YoutubeLogo size={20} color="#5E718D" />
              </span>
            </Button>
          </div>
        </Navbar.Collapse>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
export const NavbarForMobileDevice: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <img
            src="../assets/images/company/logo.png"
            className="mr-3 h-6 pr-5 sm:h-9"
            alt="Keep Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <Button type="link" size="xs" color="#455468">
            <Navbar.Toggle />
            <span className="hidden md:block">
              <List size={24} weight="bold" color="#455468" />
            </span>
          </Button>
        </div>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
export const NavbarForMobileDeviceAndSearch: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <img
            src="../assets/images/company/logo.png"
            className="mr-3 h-6 pr-5 sm:h-9"
            alt="Keep Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <Button type="link" size="xs" color="#455468">
            <span className="pr-2">
              <MagnifyingGlass size={20} color="#455468" />
            </span>
          </Button>
          <Button type="link" size="xs" color="#455468">
            <span className="hidden md:block">
              <List size={24} color="#455468" />
            </span>
            <Navbar.Toggle />
          </Button>
        </div>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
