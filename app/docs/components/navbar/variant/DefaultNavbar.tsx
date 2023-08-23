"use client";
import { Button } from "@/src/components/Button";
import { Navbar } from "@/src/components/Navbar";
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

const DefaultNavbarCode = `
"use client";
import { Navbar,Button } from "keep-design";
import { CaretDown } from "phosphor-react";
import Image from "next/image";

const DefaultNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className="flex items-center gap-5">
        <Navbar.Brand href="/">
          <Image
            src="/images/keepLogo.svg"
                            height="40"
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
