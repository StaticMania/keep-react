"use client";
import Image from "next/image";
import { List } from "phosphor-react";
import { Navbar, Button } from "@/src/components";

const NavbarWithMobileMenu = () => {
  return (
    <div className="h-96 lg:h-20">
      <Navbar fluid={true} rounded>
        <Navbar.Brand href="/">
          <Image
            src="/images/keepLogo.svg"
            width={113}
            height={40}
            alt="logo"
            className="mr-3 h-6 pr-5 sm:h-9"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="lg:hidden">
          <Navbar.Link href="/">Tutorial</Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Work</Navbar.Link>
          <Navbar.Link href="/">Case Study</Navbar.Link>
          <Navbar.Link href="/">Download</Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <div className="hidden lg:block">
          <Button type="text" size="xs" color="#455468">
            <List size={24} weight="bold" color="#455468" />
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

const NavbarWithMobileMenuCode = `
"use client";
import { Navbar } from "keep-desing";
import Image from "next/image";

const NavbarWithMobileMenu = () => {
  return (
    <div className="h-72">
      <Navbar fluid={true} rounded>
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
      </Navbar>
    </div>
  );
};

export default NavbarWithMobileMenu;
`;

export { NavbarWithMobileMenu, NavbarWithMobileMenuCode };
