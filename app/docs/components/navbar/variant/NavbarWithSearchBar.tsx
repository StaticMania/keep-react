"use client";
import Image from "next/image";
import { Navbar, Button, TextInput } from "~/src";
import {
  FacebookLogo,
  InstagramLogo,
  List,
  MagnifyingGlass,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const NavbarWithSearchBar = () => {
  return (
    <div className="h-96 lg:h-20">
      <Navbar rounded fluid={false}>
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
      </Navbar>
    </div>
  );
};

const NavbarWithSearchBarCode = `
"use client";
import { Navbar,TextInput,Button } from "keep-react";
import {
  FacebookLogo,
  InstagramLogo,
  List,
  MagnifyingGlass,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import Image from "next/image";

const NavbarWithSearchBar = () => {
  return (
      <Navbar rounded fluid={false}>
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
      </Navbar>
  );
};

export default NavbarWithSearchBar;
`;

export { NavbarWithSearchBar, NavbarWithSearchBarCode };
