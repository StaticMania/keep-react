"use client";
import { Navbar, Button } from "~/src";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
import Brand from "./DefaultNavbar";

const NavbarWithCenterLogo = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
        </Navbar.Container>
        <Navbar.Brand>
          <Brand />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

const NavbarWithCenterLogoCode = `
"use client";
import { Button,Navbar } from "keep-react";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
        </Navbar.Container>
        <Navbar.Brand>
          <Brand />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent;
`;

export { NavbarWithCenterLogo, NavbarWithCenterLogoCode };
