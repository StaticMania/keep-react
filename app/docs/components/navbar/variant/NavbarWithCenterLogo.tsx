"use client";
import Image from "next/image";
import { Navbar, Button } from "~/src";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const NavbarWithCenterLogo = () => {
  return (
    <div className="h-96 lg:h-20">
      <Navbar>
        <div className="flex items-center justify-between w-full">
          <div className="mr-auto lg:block hidden">
            <Navbar.Collapse className="p-0">
              <Navbar.Link href="/">
                Work
                <CaretDown size={20} color="#455468" />
              </Navbar.Link>
              <Navbar.Link href="/">
                Projects
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

          <div className="ml-auto flex items-center gap-2">
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

          <Navbar.Collapse className="lg:hidden block">
            <Navbar.Link href="/">Work</Navbar.Link>
            <Navbar.Link href="/">Projects</Navbar.Link>
            <Navbar.Link href="/">Download</Navbar.Link>
            <Navbar.Link href="/">Tutorial</Navbar.Link>
            <Navbar.Link href="/">About</Navbar.Link>
            <Navbar.Link href="/">Work</Navbar.Link>
          </Navbar.Collapse>
        </div>
        {/* <Navbar.Brand href="/">
          <Image
            src="/images/keepLogo.svg"
            width={113}
            height={40}
            alt="logo"
          />
        </Navbar.Brand>

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

        <Navbar.Collapse className="lg:hidden block">
          <Navbar.Link href="/">Work</Navbar.Link>
          <Navbar.Link href="/">Projects</Navbar.Link>
          <Navbar.Link href="/">Download</Navbar.Link>
          <Navbar.Link href="/">Tutorial</Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Work</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

const NavbarWithCenterLogoCode = `
"use client";
import Image from "next/image";
import { Button,Navbar } from "keep-react";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const NavbarWithCenterLogo = () => {
  return (
    <div className="h-72">
      <Navbar rounded>
        <div className="hidden items-center gap-5 lg:flex">
          <Navbar.Collapse>
            <Navbar.Link href="/">
              Work
              <CaretDown size={20} color="#455468" />
            </Navbar.Link>
            <Navbar.Link href="/">
              Case Study
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
            className="lg:mr-3 lg:pr-5 lg:border-r lg:border-gray-50"
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
      </Navbar>
    </div>
  );
};

export default NavbarWithCenterLogo;
`;

export { NavbarWithCenterLogo, NavbarWithCenterLogoCode };
