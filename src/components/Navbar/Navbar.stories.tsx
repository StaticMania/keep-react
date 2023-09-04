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
import Image from "next/image";

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
            <Image
              src="/images/keepLogo.svg"
              width="113"
              height={40}
              alt="logo"
              className="mr-3 pr-5 md:border-r md:border-gray-50"
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="/navbar">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/navbar">
              Projects
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/navbar">
              Resources
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/navbar">
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
            <Image
              src="/images/keepLogo.svg"
              width={113}
              height={40}
              alt="logo"
              className="md:pr-5 md:border-r md:border-slate-200"
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="/navbar">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/navbar">
              Projects
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/navbar">
              Resources
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/contact" className="md:hidden">
              Contact
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex lg:order-2">
            <Button type="link" size="xs" color="#455468">
              <span className="pr-2">
                <MagnifyingGlass size={20} color="#455468" />
              </span>
              Search
            </Button>
          </div>
          <div className="flex lg:order-3">
            <Button
              type="outlinePrimary"
              size="sm"
              customClass="hidden lg:flex"
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
export const NavbarWithCenterLogo: Story = {
  args: {
    rounded: true,
    children: removeFragment(
      <>
        <div className="hidden items-center gap-5 lg:flex">
          <Navbar.Collapse>
            <Navbar.Link href="/">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/">
              Project
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/">
              Download
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
          </Navbar.Collapse>
        </div>

        <Navbar.Brand href="/">
          <Image
            src="/images/keepLogo.svg"
            width={113}
            height={40}
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Collapse className="lg:hidden">
          <Navbar.Link href="/">Tutorial</Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Work</Navbar.Link>
          <Navbar.Link href="/">Case Study</Navbar.Link>
          <Navbar.Link href="/">Download</Navbar.Link>
        </Navbar.Collapse>

        <div className="flex items-center gap-2">
          <Navbar.Collapse className="hidden lg:block">
            <Navbar.Link href="/">Tutorial</Navbar.Link>
            <Navbar.Link href="/">About</Navbar.Link>
          </Navbar.Collapse>
          <div className="flex lg:order-2">
            <Button type="link" size="xs" color="#455468">
              <span className="pr-2">
                <MagnifyingGlass size={20} color="#455468" />
              </span>
              Search
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
          <Navbar.Brand href="/">
            <Image
              src="/images/keepLogo.svg"
              width={113}
              height={40}
              alt="logo"
              className="mr-3 h-6 pr-5 sm:h-9"
            />
          </Navbar.Brand>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Mobile>
            <ul className="mt-5 flex flex-col items-center justify-center gap-5">
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/">About</Navbar.Link>
              <Navbar.Link href="/">Services</Navbar.Link>
              <Navbar.Link href="/">Blog</Navbar.Link>
            </ul>
          </Navbar.Mobile>
        </div>
      </>
    ),
    fluid: true,
    rounded: true,
  },
};
export const NavbarWithSearchAndSocialIcons: Story = {
  args: {
    children: removeFragment(
      <>
        <Navbar.Brand href="/">
          <Image
            src="/images/keepLogo.svg"
            width={113}
            height={40}
            alt="logo"
            className="mr-3 h-6 pr-5 sm:h-9"
          />
        </Navbar.Brand>

        <div className="hidden items-center lg:order-2 lg:flex">
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

        <Navbar.Collapse className="lg:hidden">
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
          <div className="flex items-center justify-center">
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
