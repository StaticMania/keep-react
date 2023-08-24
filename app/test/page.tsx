"use client";
import { Button } from "@/src/components/Button";
import { Navbar } from "@/src/components/Navbar";
import Image from "next/image";
import { CaretDown } from "phosphor-react";
const page = () => {
  return (
    <Navbar rounded>
      <div className="flex items-center gap-5">
        <Navbar.Brand href="/">
          <Image
            width="113"
            height="40"
            src="/images/keepLogo.svg"
            alt="keep Design System"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">
            Work
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Case Study
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Resources
            <CaretDown size={20} color="#455468" />
          </Navbar.Link>
          <Navbar.Link href="/navbars">
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

export default page;
