'use client'
import { Cube, DotsThreeOutline } from 'phosphor-react'
import { FileUploadTableData } from '~/public/data/tableData'
import { Avatar, Button, Table } from '../../../../src'

const FilesUploadedTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
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
          <Table.HeadCell className="min-w-[344px]">
            <p className="text-body-6 font-medium text-metal-400">File no.</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[160px]">File size</Table.HeadCell>
          <Table.HeadCell className="min-w-[171px]">Date uploaded</Table.HeadCell>
          <Table.HeadCell className="min-w-[170px]">Last uploaded</Table.HeadCell>
          <Table.HeadCell className="min-w-[300px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {FileUploadTableData.map((cell) => (
            <Table.Row className="bg-white" key={cell.id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="circle" img="/images/icon/file.svg" size="md" />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.fileName}</p>
                        <p className="text-body-6 font-normal text-metal-500">{cell.fileSize}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">{cell.totalSize}</p>
                <p className="text-body-6 font-normal text-metal-500">{cell.fileSize}</p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-6 font-normal text-metal-500">{cell.time}</p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
              </Table.Cell>
              <Table.Cell>
                <Avatar.Group>
                  <Avatar img="/images/avatar/avatar-1.png" />
                  <Avatar img="/images/avatar/avatar-2.png" />
                  <Avatar img="/images/avatar/avatar-3.png" />
                  <Avatar img="/images/avatar/avatar-4.png" />
                  <Avatar img="/images/avatar/avatar-5.png" />
                  <Avatar.Counter>+9</Avatar.Counter>
                </Avatar.Group>
              </Table.Cell>
              <Table.Cell>
                <Button variant="outline" size="sm" shape="circle">
                  <DotsThreeOutline size={15} />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const FilesUploadedTableCode = `
"use client";
import { Avatar,Button,Table,Popover } from "keep-react";
import { Cube, DotsThreeOutline,Pencil,Trash } from "phosphor-react";

export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Filter
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
        <Table.HeadCell className="min-w-[344px]">
          <p className="text-body-6 font-medium text-metal-400">File no.</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[160px]">File size</Table.HeadCell>
        <Table.HeadCell className="min-w-[171px]">Date uploaded</Table.HeadCell>
        <Table.HeadCell className="min-w-[170px]">Last uploaded</Table.HeadCell>
        <Table.HeadCell className="min-w-[300px]">Team</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar shape="circle" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                    <p className="text-body-6 font-normal text-metal-500">200 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Total 0.2 MB</p>
            <p className="text-body-6 font-normal text-metal-500">200 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
            <p className="text-body-6 font-normal text-metal-500">4:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar img="/images/avatar/avatar-1.png" />
              <Avatar img="/images/avatar/avatar-2.png" />
              <Avatar img="/images/avatar/avatar-3.png" />
              <Avatar img="/images/avatar/avatar-4.png" />
              <Avatar img="/images/avatar/avatar-5.png" />
              <Avatar.Counter>+9</Avatar.Counter>
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline" size="sm" shape="circle">
              <DotsThreeOutline size={15} />
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
`
export { FilesUploadedTable, FilesUploadedTableCode }
