"use client";
import {
  CaretDown,
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  User,
} from "phosphor-react";
import { Button, Navbar } from "~/src";
import Brand from "./DefaultNavbar";

const EcommerceNavbar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Category" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Best Sellers" icon={<CaretDown size={20} />} />
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
            <Navbar.Link
              icon={<MagnifyingGlass size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-slate-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

const EcommerceNavbarCode = `
"use client";
import { CaretDown, Heart, MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
import { Button, Navbar } from "keep-react";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Category" icon={<CaretDown size={20} />} />
          <Navbar.Link linkName="Best Sellers" icon={<CaretDown size={20} />} />
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
            <Navbar.Link
              icon={<MagnifyingGlass size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-slate-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent;
`;

export { EcommerceNavbar, EcommerceNavbarCode };
