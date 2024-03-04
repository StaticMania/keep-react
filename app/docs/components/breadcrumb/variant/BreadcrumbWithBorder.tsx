'use client'
import { Breadcrumb } from '../../../../src'

const BreadcrumbWithBorder = () => {
  return (
    <div className="space-y-3">
      <Breadcrumb borderType="border-xy">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item>Tokens</Breadcrumb.Item>
        <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb borderType="border-xy">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item activeType="border">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb borderType="border-y">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item>Tokens</Breadcrumb.Item>
        <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb borderType="border-y">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item activeType="border">Color</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

const BreadcrumbWithBorderCode = `
'use client'
import { Breadcrumb } from 'keep-react'

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb borderType="border-xy">
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export { BreadcrumbWithBorder, BreadcrumbWithBorderCode }
