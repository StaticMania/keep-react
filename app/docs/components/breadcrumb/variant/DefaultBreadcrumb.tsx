'use client'
import { CaretRight } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from '../../../../src'

const DefaultBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Overview</BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

const DefaultBreadcrumbCode = `
'use client'
import { CaretRight } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from 'keep-react'

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Overview</BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`

export { DefaultBreadcrumb, DefaultBreadcrumbCode }
