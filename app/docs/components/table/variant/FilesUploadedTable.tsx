'use client'
import { Cube, DotsThreeOutline } from 'phosphor-react'
import { FileUploadTableData } from '~/public/data/tableData'
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '../../../../src'

const FilesUploadedTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <TableCaption>
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
        </TableCaption>
        <TableHead>
          <TableHeadCell className="min-w-[344px]">
            <p className="text-body-5 font-medium text-metal-400">File no.</p>
          </TableHeadCell>
          <TableHeadCell className="min-w-[160px]">File size</TableHeadCell>
          <TableHeadCell className="min-w-[171px]">Date uploaded</TableHeadCell>
          <TableHeadCell className="min-w-[170px]">Last uploaded</TableHeadCell>
          <TableHeadCell className="min-w-[300px]">Team</TableHeadCell>
          <TableHeadCell className="min-w-[100px]" />
        </TableHead>
        <TableBody className="divide-gray-25 divide-y">
          {FileUploadTableData.map((cell) => (
            <TableRow className="bg-white" key={cell.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="circle" img="/images/icon/file.svg" size="md" />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.fileName}</p>
                        <p className="text-body-5 font-normal text-metal-500">{cell.fileSize}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.totalSize}</p>
                <p className="text-body-5 font-normal text-metal-500">{cell.fileSize}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-5 font-normal text-metal-500">{cell.time}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
              </TableCell>
              <TableCell>
                <Avatar.Group>
                  <Avatar img="/images/avatar/avatar-1.png" />
                  <Avatar img="/images/avatar/avatar-2.png" />
                  <Avatar img="/images/avatar/avatar-3.png" />
                  <Avatar img="/images/avatar/avatar-4.png" />
                  <Avatar img="/images/avatar/avatar-5.png" />
                  <Avatar.Counter>+9</Avatar.Counter>
                </Avatar.Group>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" shape="circle">
                  <DotsThreeOutline size={15} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const FilesUploadedTableCode = `
"use client"
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'keep-react'
import { Cube, DotsThreeOutline,Pencil,Trash } from "phosphor-react";

export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
      <TableCaption>
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
      </TableCaption>
      <TableHead>
        <TableHeadCell className="min-w-[344px]">
          <p className="text-body-5 font-medium text-metal-400">File no.</p>
        </TableHeadCell>
        <TableHeadCell className="min-w-[160px]">File size</TableHeadCell>
        <TableHeadCell className="min-w-[171px]">Date uploaded</TableHeadCell>
        <TableHeadCell className="min-w-[170px]">Last uploaded</TableHeadCell>
        <TableHeadCell className="min-w-[300px]">Team</TableHeadCell>
        <TableHeadCell className="min-w-[100px]" />
      </TableHead>
      <TableBody className="divide-gray-25 divide-y">
        <TableRow className="bg-white">
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar shape="circle" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                    <p className="text-body-5 font-normal text-metal-500">200 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Total 0.2 MB</p>
            <p className="text-body-5 font-normal text-metal-500">200 KB</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
            <p className="text-body-5 font-normal text-metal-500">4:45 pm</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
          </TableCell>
          <TableCell>
            <Avatar.Group>
              <Avatar img="/images/avatar/avatar-1.png" />
              <Avatar img="/images/avatar/avatar-2.png" />
              <Avatar img="/images/avatar/avatar-3.png" />
              <Avatar img="/images/avatar/avatar-4.png" />
              <Avatar img="/images/avatar/avatar-5.png" />
              <Avatar.Counter>+9</Avatar.Counter>
            </Avatar.Group>
          </TableCell>
          <TableCell>
            <Button variant="outline" size="sm" shape="circle">
              <DotsThreeOutline size={15} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`
export { FilesUploadedTable, FilesUploadedTableCode }
