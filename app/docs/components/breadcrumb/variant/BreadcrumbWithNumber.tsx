'use client'
import { Breadcrumb } from '~/src'
import { CaretRight, House } from 'phosphor-react'

const BreadcrumbWithNumber = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="base">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="border">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}>
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="bar">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

const BreadcrumbWithNumberCode = `
"use client"
import { Breadcrumb } from "keep-react";
import { CaretRight, House } from "phosphor-react";

export const BreadcrumbComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="base">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="border">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={20} color="#5E718D" />}>
          01
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">02</Breadcrumb.Item>
        <Breadcrumb.Item href="#">03</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="bar">
          08
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
`

export { BreadcrumbWithNumber, BreadcrumbWithNumberCode }
