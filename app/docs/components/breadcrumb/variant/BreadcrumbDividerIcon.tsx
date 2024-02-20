'use client'
import { Breadcrumb } from '../../../../src'

const BreadcrumbDividerIcon = () => {
  return (
    <>
      <Breadcrumb dividerIconStyle="caret">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item>Tokens</Breadcrumb.Item>
        <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb dividerIconStyle="caret">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item activeType="border">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb dividerIconStyle="slash">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item>Tokens</Breadcrumb.Item>
        <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb dividerIconStyle="slash">
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item activeType="border">Color</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

const BreadcrumbDividerIconCode = `
'use client'
import { Breadcrumb } from "keep-react"

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb dividerIconStyle="caret">
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export { BreadcrumbDividerIcon, BreadcrumbDividerIconCode }
