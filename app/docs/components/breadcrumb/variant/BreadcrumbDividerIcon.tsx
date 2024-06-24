'use client'
import { CaretDoubleRight, HouseLine } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from '../../../../src'

const BreadcrumbDividerIcon = () => {
  return (
    <Breadcrumb borderType="border-y">
      <BreadcrumbItem>
        <HouseLine size={18} color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Overview
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

const BreadcrumbDividerIconCode = `
'use client'
import { CaretDoubleRight, HouseLine } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from 'keep-react'

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb borderType="border-y">
      <BreadcrumbItem>
        <HouseLine size={18} color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Overview
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretDoubleRight size={18} color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`

export { BreadcrumbDividerIcon, BreadcrumbDividerIconCode }
