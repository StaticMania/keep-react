"use client";
import Image from "next/image";
import { CaretDown } from "phosphor-react";
import { Navbar, Button } from "@/src/components";

const DefaultNavbar = () => {
  return (
    <div className="h-96 lg:h-20">
      <Navbar fluid={true} rounded={true}>
        <div className="flex items-center gap-5">
          <Navbar.Brand href="/">
            <Image
              src="/images/keepLogo.svg"
              width={113}
              height={40}
              alt="logo"
              className="lg:mr-3 lg:pr-5 lg:border-r lg:border-gray-50"
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
      </Navbar>
    </div>
  );
};

const DefaultNavbarCode = `
"use client";
import { Navbar,Button } from "keep-react";
import { CaretDown } from "phosphor-react";
import Image from "next/image";

const DefaultNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
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
    </Navbar>
  );
};

export default DefaultNavbar;

`;

export { DefaultNavbar, DefaultNavbarCode };
