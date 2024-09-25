import Image from 'next/image'
import KeepDarkLogo from '../../../../../public/images/keep-dark.svg'
import KeepLogo from '../../../../../public/images/keep.svg'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from '../../../../src'

const NavbarLayout1 = () => {
  return (
    <div className="h-96 lg:h-auto">
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            <Image src={KeepLogo} alt="keep" width="88" height="40" className="block dark:hidden" />
            <Image src={KeepDarkLogo} alt="keep" width="88" height="40" className="hidden dark:block" />
          </NavbarBrand>
          <NavbarList>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem active>Get Started</NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem active>Get Started</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  )
}

const NavbarLayout1Code = {
  'NavbarComponent.tsx': `
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'

export const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>
          <img src={KeepLogo} alt="keep"/>
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
`,
}

export { NavbarLayout1, NavbarLayout1Code }
