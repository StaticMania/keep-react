"use client";
import Link from "next/link";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "~/src";

const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <strong className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
        K.
      </strong>
      <span className="text-2xl font-bold text-slate-900">React</span>
    </Link>
  );
};

export default Brand;

const DefaultNavbar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Brand />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="News" icon={<CaretDown size={20} />} />
              <Navbar.Link
                linkName="Resources"
                icon={<CaretDown size={20} />}
              />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Button size="sm" type="outlinePrimary">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

const DefaultNavbarCode = `
"use client";
import { Navbar,Button } from "keep-react";
import { CaretDown } from "phosphor-react";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Brand />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="Projects" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="Blogs" icon={<CaretDown size={20} />} />
              <Navbar.Link linkName="News" icon={<CaretDown size={20} />} />
              <Navbar.Link
                linkName="Resources"
                icon={<CaretDown size={20} />}
              />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Button size="sm" type="outlinePrimary">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent;
`;

export { DefaultNavbar, DefaultNavbarCode };
