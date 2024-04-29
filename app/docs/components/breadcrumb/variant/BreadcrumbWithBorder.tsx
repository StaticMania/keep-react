'use client'
import { CaretRight, HouseLine } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from '../../../../src'

const BreadcrumbWithBorder = () => {
  return (
    <div className="space-y-3">
      <Breadcrumb borderType="border-xy">
        <BreadcrumbItem>
          <HouseLine size={18} color="#455468" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <CaretRight size={18} color="#455468" />
          Overview
        </BreadcrumbItem>
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
      <Breadcrumb borderType="border-y">
        <BreadcrumbItem>
          <HouseLine size={18} color="#455468" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <CaretRight size={18} color="#455468" />
          Overview
        </BreadcrumbItem>
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
    </div>
  )
}

const BreadcrumbWithBorderCode = `
'use client'
import { CaretRight, HouseLine } from 'phosphor-react'
import { Breadcrumb, BreadcrumbItem } from 'keep-react'

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb borderType="border-xy">
      <BreadcrumbItem>
        <HouseLine size={18} color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <CaretRight size={18} color="#455468" />
        Overview
      </BreadcrumbItem>
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

export { BreadcrumbWithBorder, BreadcrumbWithBorderCode }
