'use client'
import { DefaultTableData } from '~/public/data/tableData'
import { Avatar, Button, Table, Badge } from '../../../../src'
import { Cube, ArrowDown } from 'phosphor-react'
import Image from 'next/image'
import TableActionBtn from './TableActionBtn'

const HoverableTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} hoverable={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Team member</p>
              <Badge size="xs" colorType="light" color="gray">
                100 Member
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
              </Button>
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">Type</p>
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {DefaultTableData.map((cell) => (
            <Table.Row className="bg-white" key={cell.id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="circle" img={cell.img} size="md" />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.name}</p>
                        <span>{cell.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                {cell.status ? (
                  <Badge colorType="light" color="success" dot={true}>
                    Active
                  </Badge>
                ) : (
                  <Badge colorType="light" color="gray" dot={true}>
                    Offline
                  </Badge>
                )}
              </Table.Cell>
              <Table.Cell>{cell.position}</Table.Cell>
              <Table.Cell>{cell.email}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  {cell.tags.map((tag, index, arr) =>
                    index === arr.length - 1 ? (
                      <Badge key={tag} colorType="light" color="gray">
                        {tag}
                      </Badge>
                    ) : (
                      <Badge key={tag} colorType="light" color="info">
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div>
                    <Image src="/images/icon/Series.png" width={72} height={36} alt="line" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <ArrowDown size={20} color="#D7DFE9" />
                    </span>
                    <span>{cell.performance}%</span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <TableActionBtn />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const HoverableTableCode = `
"use client";
import Image from "next/image";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import { ArrowDown, Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";

export const TableComponent = () => {
  return (
    <Table showCheckbox={true} hoverable={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Team member</p>
            <Badge size="xs" colorType="light" color="gray">
              100 Member
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              New member
            </Button>
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Search
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[290px]">
          <p className="text-body-6 font-medium text-metal-400">Type</p>
        </Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
        <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
        <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
        <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar shape="circle" img="/images/avatar/avatar-4.png" size="md" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Ralph Edwards</p>
                    <span>&ralph</span>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <Badge colorType="light" color="success" dot={true}>
              Active
            </Badge>
          </Table.Cell>
          <Table.Cell>
            <p>UI/UX Designer</p>
          </Table.Cell>
          <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-1">
              <Badge colorType="light" color="info">
                Product
              </Badge>
              <Badge colorType="light" color="info">
                Marketing
              </Badge>
              <Badge colorType="light" color="gray">
                +3
              </Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div>
                <Image src="/images/icon/Series.png" width={72} height={36} alt="line" />
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <ArrowDown size={20} color="#D7DFE9" />
                </span>
                <span>20%</span>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
              <Popover.Container className="!mt-0 !block">
                <ul>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Delete</span>
                      <span>
                        <Trash />
                      </span>
                    </button>
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Edit</span>
                      <span>
                        <Pencil />
                      </span>
                    </button>
                  </li>
                </ul>
              </Popover.Container>
              <Popover.Action>
                <Button variant="outline" size="sm" shape="circle">
                  <DotsThreeOutline size={14}  />
                </Button>
              </Popover.Action>
            </Popover>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
`

export { HoverableTable, HoverableTableCode }
