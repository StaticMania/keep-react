'use client'
import Image from 'next/image'
import { Heart, MagnifyingGlass, ShoppingCart, User } from 'phosphor-react'
import { Button, Navbar } from '~/src'

const EcommerceNavbar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container tag="ul" className="hidden items-center justify-between gap-8 lg:flex">
          <Navbar.Link linkName="Category" />
          <Navbar.Link linkName="Best Sellers" />
        </Navbar.Container>
        <Navbar.Brand>
          <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container tag="ul" className="hidden items-center justify-between gap-5 lg:flex">
            <Navbar.Link icon={<MagnifyingGlass size={20} color="#444" />} iconAnimation={false} />
            <Navbar.Link icon={<User size={20} color="#444" />} iconAnimation={false} />
            <Navbar.Link icon={<Heart size={20} color="#444" />} iconAnimation={false} />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="text-metal-600 ml-1">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  )
}

const EcommerceNavbarCode = `
"use client";
import { Button, Navbar } from "keep-react";
import { Heart, MagnifyingGlass, ShoppingCart, User } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Category"/>
          <Navbar.Link linkName="Best Sellers"/>
        </Navbar.Container>
        <Navbar.Brand>
          <Image
            src="/images/keep.svg"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home"/>
            <Navbar.Link linkName="Projects"/>
            <Navbar.Link linkName="Blogs"/>
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
            <span className="ml-1 text-metal-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
`

export { EcommerceNavbar, EcommerceNavbarCode }
