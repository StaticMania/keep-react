"use client";
import { Button } from "@/src/components/Button";
import { Navbar } from "@/src/components/Navbar";
import Image from "next/image";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
const Header = () => {
  return (
    <Navbar>
      <div className="flex items-center gap-5">
        <Navbar.Brand href="/">
          <Image
            width="113"
            height="40"
            src="/images/keepLogo.svg"
            alt="keep Design System"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="bg-white lg:bg-transparent mt-3 lg:mt-0">
          <Navbar.Link href="/navbars">
            Work
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Case Study
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Download
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Resources
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/contact" className="md:hidden border-b-0">
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
          <Button type="outlinePrimary" size="sm" customClass="hidden md:flex">
            Contact
          </Button>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
