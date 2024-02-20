'use client'
import { Breadcrumb } from '../../../../src'

const DefaultBreadcrumb = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item>Tokens</Breadcrumb.Item>
        <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>Overview</Breadcrumb.Item>
        <Breadcrumb.Item>Pools</Breadcrumb.Item>
        <Breadcrumb.Item activeType="border">Tokens</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

const DefaultBreadcrumbCode = `
'use client'
import { Breadcrumb } from 'keep-react'

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export { DefaultBreadcrumb, DefaultBreadcrumbCode }
