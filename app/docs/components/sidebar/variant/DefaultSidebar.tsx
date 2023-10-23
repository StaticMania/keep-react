"use client";
import { Sidebar } from "~/src";
import {
  Chat,
  LockSimple,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
} from "phosphor-react";

const DefaultSidebar = () => {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="max-w-xs"
    >
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item icon={<ShoppingCart size={24} />}>
          E-commerce
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={<LockSimple size={24} />}
          label="pro"
          labelColor="gray"
        >
          Components
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<Chat size={24} />} label="3">
          Inbox
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<Users size={24} />}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<SignIn size={24} />}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};

const DefaultSidebarCode = `
"use client";
import { Sidebar } from "keep-react";
import {
  Chat,
  LockSimple,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
} from "phosphor-react";

export const SidebarComponent = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item icon={<ShoppingCart size={24} />}>
            E-commerce
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={<LockSimple size={24} />}
            label="pro"
            labelColor="gray"
          >
            Components
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Chat size={24} />} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<SignIn size={24} />}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar>
  );
}
`;

export { DefaultSidebar, DefaultSidebarCode };
