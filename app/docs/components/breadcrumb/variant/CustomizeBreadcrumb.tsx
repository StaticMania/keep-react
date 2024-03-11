'use client'
import { Browsers, CaretDoubleRight } from 'phosphor-react'
import { Breadcrumb } from '../../../../src'

const CustomizeBreadcrumb = () => {
  return (
    <Breadcrumb
      icon={<Browsers size={20} color="#455468" />}
      dividerIcon={<CaretDoubleRight size={20} color="#455468" />}>
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}

const CustomizeBreadcrumbCode = `
'use client'
import { Browsers, CaretDoubleRight } from 'phosphor-react'
import { Breadcrumb } from 'keep-react'

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb
      icon={<Browsers size={20} color="#455468" />}
      dividerIcon={<CaretDoubleRight size={20} color="#455468" />}>
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export { CustomizeBreadcrumb, CustomizeBreadcrumbCode }
