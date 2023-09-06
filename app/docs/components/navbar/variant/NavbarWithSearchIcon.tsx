"use client";
import Image from "next/image";
import { Navbar, Button } from "@/src/components";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const NavbarWithSearchIcon = () => {
  return (
    <div className="h-96 lg:h-20">
      <Navbar rounded={true} fluid={true}>
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
      </Navbar>
    </div>
  );
};

const NavbarWithSearchIconCode = `
"use client";
import Image from "next/image";
import { Button,Navbar } from "keep-react";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const NavbarWithSearchIcon = () => {
  return (
      <Navbar rounded={true} fluid={true}>
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
      </Navbar>
  );
};

export default NavbarWithSearchIcon;
`;

export { NavbarWithSearchIcon, NavbarWithSearchIconCode };
