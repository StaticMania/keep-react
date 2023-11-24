'use client'
import { Sidebar, Badge, Button } from '~/src'
import { X } from 'phosphor-react'
import {
  ChartBar,
  Chat,
  Handbag,
  LockKey,
  ShoppingBagOpen,
  ShoppingCart,
  SquaresFour,
  TreeStructure,
  Users,
} from 'phosphor-react'

const SidebarWithCTA = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-w-xs">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
            Project Plan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
            Our Progress
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<LockKey size={24} />}>
            Security
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center justify-between">
            <Badge color="warning">Beta</Badge>
            <Button variant="link">
              <X size="20" color="#5E718D" />
            </Button>
          </div>
          <p className="mb-3 text-body-5 text-primary-900 dark:text-primary-400">
            Preview the new keep design dashboard navigation! You can turn the new navigation off for a limited time in
            your profile.
          </p>
        </Sidebar.CTA>
      </Sidebar.Items>
    </Sidebar>
  )
}

const SidebarWithCTACode = `
"use client";
import { Sidebar, Badge, Button } from "keep-react";
import { X } from "phosphor-react";
import {
  ChartBar,
  Chat,
  Handbag,
  LockKey,
  ShoppingBagOpen,
  ShoppingCart,
  SquaresFour,
  TreeStructure,
  Users,
} from "phosphor-react";

const SidebarWithCTA = () => {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="max-w-xs"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={<ShoppingCart size={24} />}
            label="E-commerce"
          >
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
            Project Plan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
            Our Progress
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<LockKey size={24} />}>
            Security
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center justify-between">
            <Badge color="warning">Beta</Badge>
            <Button variant="link">
              <X size="20" color="#5E718D" />
            </Button>
          </div>
          <p className="mb-3 text-body-5 text-primary-900 dark:text-primary-400">
            Preview the new keep design dashboard navigation! You can turn the
            new navigation off for a limited time in your profile.
          </p>
        </Sidebar.CTA>
      </Sidebar.Items>
    </Sidebar>
  );
}
`
export { SidebarWithCTA, SidebarWithCTACode }
